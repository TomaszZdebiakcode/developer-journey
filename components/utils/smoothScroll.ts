export function smoothScrollTo(
    targetY: number,
    duration = 1200
) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // easeInOutCubic
        const eased =
            progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    };

    requestAnimationFrame(animate);
}

export function smoothScrollToSection(
    id: string,
    offset = 0,
    duration = 1200
) {
    const section = document.getElementById(id);

    if (!section) return;

    const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

    smoothScrollTo(y, duration);
}