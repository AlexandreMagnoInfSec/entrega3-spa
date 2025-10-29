js/templates.js

// templates.js
export const templates = {
  home: () => `
    <section class="card">
      <h2>Bem-vindo</h2>
      <p>Projeto demonstrando SPA, templates, validação e storage local.</p>
      <p>Use o menu para navegar e testar o formulário.</p>
    </section>
  `,
  sobre: () => `
    <section class="card">
      <h2>Sobre</h2>
      <p>Entrega III - Interatividade e Funcionalidades</p>
      <ul>
        <li>Manipulação do DOM</li>
        <li>SPA básico</li>
        <li>Validação de formulários</li>
        <li>Armazenamento local</li>
      </ul>
    </section>
  `,
  form: (data = {}) => `
    <section class="card">
      <h2>Formulário de Contato</h2>
      <form id="contactForm" novalidate>
        <label>Nome
          <input type="text" name="name" id="name" value="${data.name ?? ''}" required />
          <div class="error-message" data-error-for="name"></div>
        </label>
        <label>Email
          <input type="email" name="email" id="email" value="${data.email ?? ''}" required />
          <div class="error-message" data-error-for="email"></div>
        </label>
        <label>Idade
          <input type="number" name="age" id="age" value="${data.age ?? ''}" min="1" max="120" />
          <div class="error-message" data-error-for="age"></div>
        </label>
        <label>Mensagem
          <textarea name="message" id="message" rows="4">${data.message ?? ''}</textarea>
          <div class="error-message" data-error-for="message"></div>
        </label>
        <button type="submit">Enviar</button>
        <div id="formFeedback"></div>
      </form>
      <small>Os dados enviados são salvos localmente (localStorage).</small>
    </section>
  `
};
