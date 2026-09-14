/**
 * DraggablePills - Physics-based interactive pills using Matter.js
 *
 * Pills drop into an arena with gravity, bounce, and can be dragged
 * with mouse or touch. Based on the pasted reference implementation,
 * trimmed to just the arena and adapted to our pill data + dark theme.
 *
 * @example
 * ```tsx
 * <DraggablePills
 *   pills={[{ label: "Visioner", background: "#fff", color: "#0b1530" }]}
 *   animationConfig={{ gravityY: 1, bounciness: 0.45 }}
 * />
 * ```
 */
"use client";

import React, { useEffect, useRef } from "react";
import styles from "./draggable-pills.module.css";

/** Key animation settings that have the most visual impact */
export interface AnimationConfig {
  /** Time between each pill drop in ms @default 400 */
  staggerMs?: number;
  /** Gravity strength (1 = normal, 2 = heavy) @default 1 */
  gravityY?: number;
  /** How bouncy pills are (0 = no bounce, 1 = very bouncy) @default 0.45 */
  bounciness?: number;
  /** Delay before ceiling closes after last drop in ms @default 900 */
  gateCloseDelayMs?: number;
}

export interface DraggablePillItem {
  label: string;
  background: string;
  color: string;
}

export interface DraggablePillsProps {
  /** Array of pills with label + colors */
  pills?: DraggablePillItem[];
  /** Key animation settings */
  animationConfig?: AnimationConfig;
}

const DEFAULT_PILLS: DraggablePillItem[] = [
  { label: "Visioner", background: "#ffffff", color: "#0b1530" },
  { label: "Inovatif", background: "#2563eb", color: "#ffffff" },
  { label: "Berintegritas", background: "#bfc7d1", color: "#0b1530" },
  { label: "Profesional", background: "#ffffff", color: "#0b1530" },
  { label: "Transparan", background: "#16295e", color: "#ffffff" },
  { label: "Akuntabel", background: "#bfc7d1", color: "#0b1530" },
  { label: "Berdampak", background: "#2563eb", color: "#ffffff" },
];

export function DraggablePills({
  pills = DEFAULT_PILLS,
  animationConfig,
}: DraggablePillsProps): React.ReactElement {
  const arenaRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  // Store config in ref to avoid effect dependency issues while keeping values current
  const configRef = useRef(animationConfig);
  configRef.current = animationConfig;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const arena = arenaRef.current;
    if (!arena) return;

    // Handle React Strict Mode double-invocation
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }

    let isCleanedUp = false;
    const timeoutIds: ReturnType<typeof setTimeout>[] = [];
    const safeSetTimeout = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!isCleanedUp) fn();
      }, ms);
      timeoutIds.push(id);
      return id;
    };

    // Dynamically import Matter.js (client-side only)
    import("matter-js").then((Matter) => {
      if (isCleanedUp || !arenaRef.current) return;

      const userConfig = configRef.current;

      // Merge user config with defaults
      const CONFIG = {
        drop: {
          staggerMs: userConfig?.staggerMs ?? 400,
          spawnAbovePx: 100,
          revealLeadMs: 60,
        },
        walls: {
          thickness: 80,
          edgePadding: 16,
        },
        gate: {
          openExtraPx: 350,
          closeAfterMs: userConfig?.gateCloseDelayMs ?? 900,
          closeAnimMs: 500,
        },
        physics: {
          gravityY: userConfig?.gravityY ?? 1,
          pill: {
            restitution: userConfig?.bounciness ?? 0.45,
            friction: 0.12,
            frictionAir: 0.02,
            density: 0.002,
          },
          ceiling: {
            restitution: 0.85,
            friction: 0,
            frictionStatic: 0,
          },
          walls: {
            restitution: 0.2,
            friction: 0.2,
          },
        },
        antiStick: {
          zonePx: 34,
          holdMs: 220,
          nudgeDownVy: 2.6,
          nudgeSideVx: 0.4,
        },
        drag: {
          stiffnessMouse: 0.15,
          dampingMouse: 0.08,
          stiffnessTouch: 0.28,
          dampingTouch: 0.12,
        },
      };

      const isTouch =
        "ontouchstart" in window ||
        (navigator.maxTouchPoints != null && navigator.maxTouchPoints > 0);

      // Catatan: JANGAN set overscrollBehavior = "contain" di arena —
      // itu mengunci scroll halaman saat kursor di dalam section.

      const pillElements = Array.from(
        arena.querySelectorAll<HTMLElement>("[data-pill]")
      );
      if (pillElements.length === 0) return;

      const {
        Engine,
        Runner,
        World,
        Bodies,
        Body,
        Composite,
        Mouse,
        MouseConstraint,
        Events,
      } = Matter;

      // Create engine and world
      const engine = Engine.create();
      const world = engine.world;
      world.gravity.y = CONFIG.physics.gravityY;
      const runner = Runner.create();

      const getArenaRect = () => ({
        w: arena.clientWidth,
        h: arena.clientHeight,
      });

      // Boundary bodies
      let ceiling: Matter.Body | null = null;
      let floor: Matter.Body | null = null;
      let leftWall: Matter.Body | null = null;
      let rightWall: Matter.Body | null = null;

      const buildBounds = () => {
        const { w, h } = getArenaRect();
        const t = CONFIG.walls.thickness;

        const existing = [ceiling, floor, leftWall, rightWall].filter(
          (body): body is Matter.Body => body !== null
        );
        if (existing.length > 0) {
          Composite.remove(world, existing);
        }

        const openCeilingY = -(
          CONFIG.drop.spawnAbovePx + CONFIG.gate.openExtraPx
        );

        ceiling = Bodies.rectangle(w / 2, openCeilingY, w + t * 2, t, {
          isStatic: true,
          restitution: CONFIG.physics.ceiling.restitution,
          friction: CONFIG.physics.ceiling.friction,
          frictionStatic: CONFIG.physics.ceiling.frictionStatic,
        });

        floor = Bodies.rectangle(w / 2, h + t / 2, w + t * 2, t, {
          isStatic: true,
          restitution: CONFIG.physics.walls.restitution,
          friction: CONFIG.physics.walls.friction,
        });

        leftWall = Bodies.rectangle(-t / 2, h / 2, t, h + t * 2, {
          isStatic: true,
          restitution: CONFIG.physics.walls.restitution,
          friction: CONFIG.physics.walls.friction,
        });

        rightWall = Bodies.rectangle(w + t / 2, h / 2, t, h + t * 2, {
          isStatic: true,
          restitution: CONFIG.physics.walls.restitution,
          friction: CONFIG.physics.walls.friction,
        });

        World.add(world, [ceiling, floor, leftWall, rightWall]);
      };

      const closeGate = () => {
        if (!ceiling) return;
        const ceilingBody = ceiling; // Capture for closure
        const { w } = getArenaRect();
        const t = CONFIG.walls.thickness;
        const startY = ceilingBody.position.y;
        const endY = -t / 2;
        const startTime = performance.now();

        const tick = (now: number) => {
          if (isCleanedUp) return;
          const progress = Math.min(
            1,
            (now - startTime) / CONFIG.gate.closeAnimMs
          );
          const y = startY + (endY - startY) * progress;
          Body.setPosition(ceilingBody, { x: w / 2, y });
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };
        requestAnimationFrame(tick);
      };

      // Pill body records
      interface PillRecord {
        body: Matter.Body;
        w: number;
        h: number;
        stickStart: number;
      }
      const bodies = new Map<HTMLElement, PillRecord>();

      const rand = (min: number, max: number) =>
        min + Math.random() * (max - min);

      const createBodiesQueued = () => {
        const { w } = getArenaRect();
        let queueY = -60;

        for (const el of pillElements) {
          const pw = el.offsetWidth;
          const ph = el.offsetHeight;

          const minX = CONFIG.walls.edgePadding + pw / 2;
          const maxX = w - CONFIG.walls.edgePadding - pw / 2;
          const x = maxX > minX ? rand(minX, maxX) : w / 2;

          const body = Bodies.rectangle(x, queueY - ph / 2, pw, ph, {
            restitution: CONFIG.physics.pill.restitution,
            friction: CONFIG.physics.pill.friction,
            frictionAir: CONFIG.physics.pill.frictionAir,
            density: CONFIG.physics.pill.density,
          });

          Body.setStatic(body, true);
          bodies.set(el, { body, w: pw, h: ph, stickStart: 0 });
          World.add(world, body);

          queueY -= ph + 20;
        }
      };

      const replaceBody = (el: HTMLElement, newW: number, newH: number) => {
        const rec = bodies.get(el);
        if (!rec) return;

        const old = rec.body;
        const pos = { x: old.position.x, y: old.position.y };
        const ang = old.angle;
        const vel = { x: old.velocity.x, y: old.velocity.y };
        const av = old.angularVelocity;

        Composite.remove(world, old);

        const fresh = Bodies.rectangle(pos.x, pos.y, newW, newH, {
          restitution: old.restitution,
          friction: old.friction,
          frictionAir: old.frictionAir,
          density: old.density,
        });

        Body.setAngle(fresh, ang);
        Body.setVelocity(fresh, vel);
        Body.setAngularVelocity(fresh, av);

        rec.body = fresh;
        rec.w = newW;
        rec.h = newH;

        World.add(world, fresh);
      };

      const refreshWorld = () => {
        buildBounds();
        bodies.forEach((rec, el) => {
          const nw = el.offsetWidth;
          const nh = el.offsetHeight;
          if (Math.abs(nw - rec.w) > 0.5 || Math.abs(nh - rec.h) > 0.5) {
            replaceBody(el, nw, nh);
          }
        });
      };

      // Render physics state to DOM
      const renderDOM = () => {
        bodies.forEach((rec, el) => {
          const b = rec.body;
          const x = b.position.x - rec.w / 2;
          const y = b.position.y - rec.h / 2;
          el.style.transform = `translate(${x}px, ${y}px) rotate(${b.angle}rad)`;
        });
      };

      // Prevent pills sticking to ceiling
      const antiStick = (now: number) => {
        if (!ceiling) return;
        const ceilingUnderY = ceiling.position.y + CONFIG.walls.thickness / 2;

        bodies.forEach((rec) => {
          const b = rec.body;
          if (b.isStatic) return;

          const bodyTopY = b.position.y - rec.h / 2;
          const dist = bodyTopY - ceilingUnderY;
          const inZone = dist < CONFIG.antiStick.zonePx;

          if (inZone) {
            if (rec.stickStart === 0) rec.stickStart = now;
            const held = now - rec.stickStart;
            const slow = Math.abs(b.velocity.y) < 0.25;

            if (held > CONFIG.antiStick.holdMs && slow) {
              Body.setVelocity(b, {
                x:
                  b.velocity.x +
                  (Math.random() - 0.5) * CONFIG.antiStick.nudgeSideVx,
                y: Math.max(b.velocity.y, CONFIG.antiStick.nudgeDownVy),
              });
              rec.stickStart = 0;
            }
          } else {
            rec.stickStart = 0;
          }
        });
      };

      const onAfterUpdate = () => {
        renderDOM();
        antiStick(performance.now());
      };
      Events.on(engine, "afterUpdate", onAfterUpdate);

      // Mouse/touch dragging
      const mouse = Mouse.create(arena);

      // Matter.js menahan event wheel secara default (passive: false +
      // preventDefault) sehingga halaman tidak bisa di-scroll saat kursor
      // di atas arena. Lepas agar scroll halaman tetap jalan;
      // drag pil tetap berfungsi.
      const mouseWheelHandler = (
        mouse as unknown as { mousewheel?: EventListener }
      ).mousewheel;
      if (mouseWheelHandler) {
        for (const type of ["wheel", "mousewheel", "DOMMouseScroll"] as const) {
          mouse.element.removeEventListener(type, mouseWheelHandler);
        }
      }
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: isTouch
            ? CONFIG.drag.stiffnessTouch
            : CONFIG.drag.stiffnessMouse,
          damping: isTouch
            ? CONFIG.drag.dampingTouch
            : CONFIG.drag.dampingMouse,
        },
      });
      World.add(world, mouseConstraint);

      // Jaring pengaman scroll: cegat event wheel yang masuk ke arena
      // SEBELUM sampai ke listener Matter (capture di window jalan duluan).
      // stopPropagation tidak membatalkan scroll bawaan browser — hanya
      // mencegah Matter memanggil preventDefault. Saat pil sedang ditarik,
      // event dibiarkan lewat supaya halaman tidak ikut geser.
      const onWheelCapture = (e: WheelEvent) => {
        if (!arena.contains(e.target as Node)) return;
        if (mouseConstraint.constraint.bodyB) return;
        e.stopPropagation();
      };
      window.addEventListener("wheel", onWheelCapture, {
        capture: true,
        passive: true,
      });

      // Prevent scroll while dragging
      let touchingArena = false;

      const handlePointerDown = () => {
        touchingArena = true;
      };

      const handlePointerUp = () => {
        touchingArena = false;
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (!touchingArena) return;
        const constraint = mouseConstraint.constraint;
        if (constraint.bodyB) {
          e.preventDefault();
        }
      };

      arena.addEventListener("pointerdown", handlePointerDown, {
        passive: true,
      });
      window.addEventListener("pointerup", handlePointerUp, { passive: true });
      arena.addEventListener("touchmove", handleTouchMove, { passive: false });

      // Drop sequence
      const revealPill = (el: HTMLElement) => {
        el.style.opacity = "1";
        el.style.pointerEvents = "auto";
      };

      const dropOneByOneThenClose = () => {
        pillElements.forEach((el, i) => {
          const dropAt = i * CONFIG.drop.staggerMs;

          const revealAt = Math.max(0, dropAt - CONFIG.drop.revealLeadMs);

          safeSetTimeout(() => revealPill(el), revealAt);

          safeSetTimeout(() => {
            const rec = bodies.get(el);
            if (!rec) return;

            const { w } = getArenaRect();
            const pw = rec.w;
            const ph = rec.h;

            const minX = CONFIG.walls.edgePadding + pw / 2;
            const maxX = w - CONFIG.walls.edgePadding - pw / 2;
            const x = maxX > minX ? rand(minX, maxX) : w / 2;
            const y = -(CONFIG.drop.spawnAbovePx + ph / 2);

            Body.setPosition(rec.body, { x, y });
            Body.setAngle(rec.body, (Math.random() - 0.5) * 0.35);
            Body.setStatic(rec.body, false);

            const vx = (Math.random() - 0.5) * (isTouch ? 0.7 : 1.0);
            Body.setVelocity(rec.body, { x: vx, y: 0 });
            Body.setAngularVelocity(
              rec.body,
              (Math.random() - 0.5) * (isTouch ? 0.035 : 0.05)
            );
          }, dropAt);
        });

        const totalDropTime = (pillElements.length - 1) * CONFIG.drop.staggerMs;
        safeSetTimeout(closeGate, totalDropTime + CONFIG.gate.closeAfterMs);
      };

      // Wait for stable container size before starting
      const waitForStableSize = (frames = 10, minH = 40): Promise<void> => {
        return new Promise((resolve) => {
          let stable = 0;
          let lastW = 0;
          let lastH = 0;

          const tick = () => {
            if (isCleanedUp) return;

            const { w, h } = getArenaRect();
            if (h < minH || w < 40) {
              stable = 0;
              lastW = w;
              lastH = h;
              requestAnimationFrame(tick);
              return;
            }

            const same = Math.abs(w - lastW) < 0.5 && Math.abs(h - lastH) < 0.5;
            stable = same ? stable + 1 : 0;
            lastW = w;
            lastH = h;

            if (stable >= frames) {
              resolve();
              return;
            }
            requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      };

      // Initialize
      buildBounds();
      createBodiesQueued();
      renderDOM();

      let started = false;
      const start = () => {
        if (started || isCleanedUp) return;
        started = true;

        waitForStableSize().then(() => {
          if (isCleanedUp) return;
          refreshWorld();
          Runner.run(runner, engine);
          dropOneByOneThenClose();
        });
      };

      // Start when visible
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              start();
              intersectionObserver.disconnect();
              break;
            }
          }
        },
        { threshold: 0.15 }
      );
      intersectionObserver.observe(arena);

      // Handle resize
      const resizeObserver = new ResizeObserver(() => {
        if (!started || isCleanedUp) return;
        requestAnimationFrame(refreshWorld);
      });
      resizeObserver.observe(arena);

      // Cleanup function
      const cleanup = () => {
        isCleanedUp = true;

        // Clear all pending timeouts
        for (const id of timeoutIds) {
          clearTimeout(id);
        }

        intersectionObserver.disconnect();
        resizeObserver.disconnect();

        arena.removeEventListener("pointerdown", handlePointerDown);
        window.removeEventListener("pointerup", handlePointerUp);
        window.removeEventListener("wheel", onWheelCapture, {
          capture: true,
        } as EventListenerOptions);
        arena.removeEventListener("touchmove", handleTouchMove);

        Runner.stop(runner);
        Events.off(engine, "afterUpdate", onAfterUpdate);
        World.clear(world, false);
        Engine.clear(engine);

        // Clear body references
        bodies.clear();
      };

      cleanupRef.current = cleanup;
    });

    // Effect cleanup
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [pills]);

  return (
    <div ref={arenaRef} className={styles.arena} data-pill-physics>
      <div className={styles.pillLayer} data-pill-layer>
        {pills.map((pill, index) => (
          <div
            key={`${pill.label}-${index}`}
            className={styles.pillWrap}
            data-pill-wrap
          >
            <button
              className={styles.pill}
              data-pill
              style={{
                backgroundColor: pill.background,
                color: pill.color,
              }}
            >
              <span className={styles.pillLabel}>{pill.label}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
