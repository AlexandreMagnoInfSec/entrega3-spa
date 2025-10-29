js/validation.js

// validation.js
export function validateForm(formData) {
  const errors = {};

  // nome obrigatório e >= 2 caracteres
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Nome deve ter ao menos 2 caracteres.';
  }

  // email obrigatório e formato simples
  const email = formData.email ?? '';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'Informe um e-mail válido.';
  }

  // idade opcional mas se preenchida precisa ser número entre 1 e 120
  if (formData.age) {
    const age = Number(formData.age);
    if (!Number.isInteger(age) || age < 1 || age > 120) {
      errors.age = 'Idade inválida.';
    }
  }

  // mensagem mínima
  if (formData.message && formData.message.length > 500) {
    errors.message = 'Mensagem muito longa (max 500 caracteres).';
  }

  return errors;
}
