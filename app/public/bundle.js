(function () {
'use strict';

const initMenu = () => {
  const menuBtn = document.getElementById('nav__btn');
  const navList = document.getElementById('nav__list');
  
  menuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    navList.classList.toggle('hide');
  });
  
};

const initForms = () => {
  const forms = Array.from(document.querySelectorAll('[data-form]'));
  forms.forEach(form => {
    assignForm(form.getAttribute('data-form'));
  });
};

const assignForm = ($formType) => {  
  console.log('form type:', $formType);
};

initMenu();
initForms();

}());
//# sourceMappingURL=bundle.js.map
