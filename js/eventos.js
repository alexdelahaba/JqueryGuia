const divPruebas = $('.pruebasEventos');
const inputPruebas = $('#inputPruebasEvento');
const btnPruebas = $('.pruebasEventos>button');
const formulario = $('#formularioPruebasEvento');
const selectPruebas = $('#selectPruebasEvento');

$(document).ready(console.log('El documento se ha cargado'));

//ATENCION, TODOS LOS EVENTOS ESTÁN PROGRAMADOS PARA DISPARARSE SOLO UNA VEZ CON EL METODO .off()
divPruebas.click(() => {
  console.log('click');
  divPruebas.off('click');
});

divPruebas.dblclick(() => {
  console.log('dblclick');
  divPruebas.off('dblclick');
});

divPruebas.mouseenter(() => {
  console.log('mouseenter');
  divPruebas.off('mouseenter');
});

divPruebas.mouseleave(() => {
  console.log('mouseleave');
  divPruebas.off('mouseleave');
});
divPruebas.hover(() => {
  console.log('hover');
  divPruebas.off('hover');
});

inputPruebas.keypress(() => {
  console.log('keypress');
  inputPruebas.off('keypress');
});

inputPruebas.keydown((evt) => {
  console.log('keydown');
  inputPruebas.off('keydown');
});

inputPruebas.keyup(() => {
  console.log('keyup');
  inputPruebas.off('keyup');
});

formulario.submit((evt) => {
  evt.preventDefault();
  console.log('submit');
  formulario.off('submit');
});
//especialmente indicado para combos
selectPruebas.change((evt) => {
  evt.preventDefault();
  console.log('change');
  selectPruebas.off('change');
});

inputPruebas.focus((evt) => {
  evt.preventDefault();
  console.log('focus');
  inputPruebas.off('focus');
});

inputPruebas.focusin((evt) => {
  evt.preventDefault();
  console.log('focusin');
  inputPruebas.off('focusin');
});

inputPruebas.focusout((evt) => {
  evt.preventDefault();
  console.log('focusout');
  inputPruebas.off('focusout');
});
//blur es salir del input habiendo entrado
inputPruebas.blur((evt) => {
  evt.preventDefault();
  console.log('blur');
  inputPruebas.off('blur');
});

//hay otros eventos menos comunes =>
$(window).resize();

divPruebas.on('click', (evt) => {
  console.log('Evento click añadido con .on()');
  console.log(1, evt.target);
  console.log(2, evt.timeStamp);
});

inputPruebas.keydown((evt) => {
  //letra pulsada
  console.log(3, evt.which);
});
//con el evento .one() añadimos un evento una sola vez
inputPruebas.keypress((evt) => {
  //letra pulsada
  console.log(4, evt.which);
});
