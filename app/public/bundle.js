(function () {
'use strict';

const buildRequest = ($target) => {

  const url = $target.getAttribute('action');
  const method = $target.getAttribute('method');
  const body = {};

  Array.from($target.elements).forEach($el => {

    if($el.hasAttribute('name')) {
      let property = $el.getAttribute('name');
      let value = $el.value;
      body[property] = value;
      console.log(body);
    } else {
      return;
    }

  });

  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(body)
  };

  const request = new Request(url, options);

  return request;

};

const sendForm = ($request) => {

  console.log('send form');
  console.log($request);

};
 
const initStart = ($form) => {

  $form.addEventListener('submit', function(e) {

    e.preventDefault();
    sendForm(buildRequest(e.target));

  });

};

const startForm = document.getElementById('startShift');

if(startForm) initStart(startForm);

}());
//# sourceMappingURL=bundle.js.map
