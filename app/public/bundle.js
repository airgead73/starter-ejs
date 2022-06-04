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

const apiFetch = ($target) => {
  console.log($target.getAttribute('action'));
};

const initForms = ($formsArr) => {

  console.log('Forms on this page:', $formsArr.length);
  $formsArr.forEach($form => {
    $form.addEventListener('submit', function(e) {
      e.preventDefault();
      apiFetch(e.target);
    });
  });
  
};

const forms = Array.from(document.querySelectorAll('form'));

initMenu();
if(forms.length) initForms(forms);

}());
//# sourceMappingURL=bundle.js.map
