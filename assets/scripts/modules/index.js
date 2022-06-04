import initMenu from './menu/index';

const initForms = () => {
  const forms = Array.from(document.querySelectorAll('[data-form]'));
  forms.forEach(form => {
    assignForm(form);
  });
}

const assignForm = ($form) => {
  const formType = $form.getAttribute('data-form');
  console.log('form type:', formType);
}

export {
  initMenu,
  initForms
}