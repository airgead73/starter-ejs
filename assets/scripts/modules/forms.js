import apiFetch from './fetch';

const initForms = ($formsArr) => {

  console.log('Forms on this page:', $formsArr.length);
  $formsArr.forEach($form => {
    $form.addEventListener('submit', function(e) {
      e.preventDefault();
      apiFetch(e.target);
    });
  });
  
}

export default initForms;