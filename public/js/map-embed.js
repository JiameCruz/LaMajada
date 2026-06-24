(function () {
  const mapWrap = document.querySelector('.location-map-wrap');
  if (!mapWrap) return;

  const address = 'Donato Guerra 1001, Col. Centro, Torreón, Coahuila, 27140, México';
  const encodedAddress = encodeURIComponent(address);
  const apiKey = window.LA_MAJADA_MAPS_KEY;

  let embedSrc;

  if (apiKey) {
    embedSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}&language=es&zoom=16`;
  } else {
    embedSrc = `https://maps.google.com/maps?q=${encodedAddress}&hl=es&z=16&output=embed`;
  }

  const iframe = document.createElement('iframe');
  iframe.className = 'location-map';
  iframe.title = 'Mapa de La Majada en Torreón, Coahuila';
  iframe.src = embedSrc;
  iframe.loading = 'lazy';
  iframe.referrerPolicy = 'no-referrer-when-downgrade';
  iframe.allowFullscreen = true;

  mapWrap.appendChild(iframe);
})();
