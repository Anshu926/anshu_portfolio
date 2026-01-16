import Lenis from "@studio-freight/lenis";

export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,       // smoothness speed
    easing: (t) => 1 - Math.pow(1 - t, 4), // smooth easing
    smooth: true,
    smoothTouch: true,
    touchMultiplier: 1.8,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
