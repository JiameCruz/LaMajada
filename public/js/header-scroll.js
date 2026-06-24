const header = document.querySelector('.site-header');
const lightSections = document.querySelectorAll('.about, .menu, .promos, .location');

if (header) {
  const onScroll = () => {
    const pastHero = window.scrollY > 48;
    header.classList.toggle('is-scrolled', pastHero);

    let onLightSection = false;

    lightSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 72 && rect.bottom > 72) {
        onLightSection = true;
      }
    });

    if (!onLightSection && lightSections.length) {
      const firstLight = lightSections[0].getBoundingClientRect();
      onLightSection = firstLight.top <= 72;
    }

    header.classList.toggle('is-light', onLightSection);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}
