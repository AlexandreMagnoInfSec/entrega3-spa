js/router.js

// router.js
import { templates } from './templates.js';
import { mountFormHandlers } from './app.js'; // we'll export this from app

const routes = {
  '/': () => templates.home(),
  '/form': () => templates.form(),
  '/sobre': () => templates.sobre()
};

export function renderRoute() {
  const hash = location.hash.replace('#', '') || '/';
  const view = routes[hash];
  const app = document.getElementById('app');

  if (!view) {
    app.innerHTML = `<section class="card"><h2>404</h2><p>Página não encontrada.</p></section>`;
    return;
  }

  app.innerHTML = view();
  // após renderizar, disparar evento para o app anexar handlers (ex.: form)
  window.dispatchEvent(new CustomEvent('route:rendered', {detail:{path:hash}}));
}
