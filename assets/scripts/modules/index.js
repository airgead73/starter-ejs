import initMenu from './menu/index';

const initForms = () => {
  const forms = Array.from(document.querySelectorAll('[data-form]'));
  forms.forEach(form => {
    assignForm(form.getAttribute('data-form'));
  });
}

const assignForm = ($formType) => {  
  console.log('form type:', $formType);
}

export {
  initMenu,
  initForms
}