js/app.js

// app.js
import { renderRoute } from './router.js';
import { validateForm } from './validation.js';
import { storage } from './storage.js';

function attachNavHandlers() {
  document.querySelectorAll('a[data-link]').forEach(a => {
    a.addEventListener('click', (e) => {
      // comportamento padrão do hash já navega, mas podemos prevenir se quiser
      // e.target.href;
    });
  });
}

function showErrors(errors) {
  // limpar mensagens antigas
  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
  document.querySelectorAll('input,textarea').forEach(i => i.classList.remove('error'));

  Object.entries(errors).forEach(([field, msg]) => {
    const msgEl = document.querySelector(`.error-message[data-error-for="${field}"]`);
    const input = document.getElementById(field);
    if (msgEl) msgEl.textContent = msg;
    if (input) input.classList.add('error');
  });
}

function clearFormErrors() {
  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
  document.querySelectorAll('input,textarea').forEach(i => i.classList.remove('error'));
}

function bindForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    clearFormErrors();

    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      age: form.age.value.trim(),
      message: form.message.value.trim()
    };

    const errors = validateForm(data);
    if (Object.keys(errors).length) {
      showErrors(errors);
      document.getElementById('formFeedback').innerHTML = '<p class="error-message">Corrija os campos em vermelho.</p>';
      return;
    }

    // sem erros -> salvar e mostrar sucesso
    storage.save(data);
    form.reset();
    document.getElementById('formFeedback').innerHTML = '<p class="success">Enviado com sucesso! Dados salvos localmente.</p>';
  });
}

// exportado para router.js caso precise
export function mountFormHandlers() {
  bindForm();
}

// Inicialização
function init() {
  attachNavHandlers();
  // renderizar rota inicial
  renderRoute();

  // renderizar quando hash mudar
  window.addEventListener('hashchange', renderRoute);

  // quando rota foi renderizada, anexar handlers (form)
  window.addEventListener('route:rendered', () => {
    mountFormHandlers();
  });
}

document.addEventListener('DOMContentLoaded', init);
