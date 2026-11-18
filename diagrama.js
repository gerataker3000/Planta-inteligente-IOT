(() => {
  'use strict';

  const board = document.getElementById('iot-board');
  const filters = [...board.querySelectorAll('[data-view-button]')];
  const offline = document.getElementById('iot-offline');
  const status = document.getElementById('iot-status');
  const detailsTitle = document.getElementById('iot-detail-title');
  const details = document.getElementById('iot-detail');
  const nodes = [...board.querySelectorAll('.iot-node')];
  const descriptions = {
    all: 'Vista completa. Verde indica control local, azul telemetría y ámbar alertas.',
    local: 'Ruta local resaltada. Sensores → ESP32 → etapa de potencia → actuadores.',
    cloud: 'Ruta HTTPS resaltada. ESP32 → red → ThingSpeak → visualización y alertas.'
  };

  function announceView() {
    status.textContent = board.classList.contains('is-offline')
      ? 'Corte simulado. El ESP32 mantiene el control local y se interrumpe la telemetría nueva.'
      : descriptions[board.dataset.view];
  }

  for (const filter of filters) {
    filter.addEventListener('click', () => {
      board.dataset.view = filter.dataset.viewButton;
      for (const option of filters) option.setAttribute('aria-pressed', String(option === filter));
      announceView();
    });
  }

  offline.addEventListener('click', () => {
    const disconnected = board.classList.toggle('is-offline');
    offline.setAttribute('aria-pressed', String(disconnected));
    announceView();
  });

  for (const node of nodes) {
    node.addEventListener('click', () => {
      for (const option of nodes) option.setAttribute('aria-pressed', String(option === node));
      detailsTitle.textContent = node.querySelector('strong').textContent;
      details.textContent = node.dataset.detail;
      const panel = detailsTitle.parentElement;
      if (panel.getBoundingClientRect().bottom < 0) panel.scrollIntoView({ block: 'center' });
    });
  }
})();
