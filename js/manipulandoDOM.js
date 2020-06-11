const DOM1 = $('#DOM1');
const DOM2 = $('#DOM2');
const DOM3 = $('#DOM3');
const DOM4 = $('#DOM4');
const DOM5 = $('#DOM5');
const DOM6 = $('#DOM6');
const input = $('#inputPruebasDOM');

DOM1.click(() => {
  console.log(DOM1.text());
});

DOM2.click(() => {
  console.log(DOM2.html());
});

DOM3.click(() => {
  console.log(input.val());
});

DOM4.click(() => {
  DOM4.text('He sido modificado, pero solo el valor del texto');
});

DOM5.click(() => {
  DOM5.html('<p class="verde">He sido modificado, pero además como html</p>');
});

DOM6.click(() => {
  input.val('A mi tambien me puedes modificar');
});
