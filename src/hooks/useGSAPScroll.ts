import { useEffect } from 'react';
import type { RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimationType = 'panel' | 'beam' | 'matrix';

export function useGSAPScrollAnimation(
  ref: RefObject<HTMLElement | null>,
  type: AnimationType = 'panel',
  options?: { delay?: number; stagger?: number; childSelector?: string }
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const targets = options?.childSelector
      ? el.querySelectorAll(options.childSelector)
      : [el];

    let fromVars: gsap.TweenVars = {};
    let toVars: gsap.TweenVars = {};

    switch (type) {
      case 'panel':
        fromVars = { opacity: 0, scale: 0.96, y: 30 };
        toVars = { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' };
        break;
      case 'beam':
        fromVars = { opacity: 0, x: -20 };
        toVars = { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' };
        break;
      case 'matrix':
        fromVars = { opacity: 0, y: 20, scale: 0.95 };
        toVars = { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out' };
        break;
    }

    if (isReducedMotion) {
      toVars = { opacity: 1, duration: 0 };
      fromVars = { opacity: 0 };
    }

    gsap.set(targets, fromVars);

    const tween = gsap.to(targets, {
      ...toVars,
      delay: options?.delay || 0,
      stagger: options?.stagger || (type === 'matrix' ? 0.06 : type === 'beam' ? 0.08 : 0),
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [ref, type, options?.delay, options?.stagger, options?.childSelector]);
}

export function useGSAPTimelineAnimation(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    gsap.set(el, { scaleY: 0, transformOrigin: 'top' });
    gsap.to(el, {
      scaleY: 1,
      duration: isReducedMotion ? 0 : 1.5,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        once: true,
      },
    });
  }, [ref]);
}
