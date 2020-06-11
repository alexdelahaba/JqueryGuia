const hide1 = $('#hide1');
const show1 = $('#show1');
const hide2 = $('#hide2');
const show2 = $('#show2');
const encadenado = $('#encadenado');
const fades = $('#fades');

hide1.click(() => {
  hide1.hide();
});

show1.click(() => {
  hide1.show();
});

//$(selector).hide(speed,callback);
//$(selector).show(speed,callback);

hide2.click(() => {
  hide2.hide(3000, alert('El elemento será ocultado al segundo 3'));
});

show2.click(() => {
  hide2.show(3000, alert('El elemento será devuelto al segundo 3'));
});

encadenado.click(() => {
  encadenado.css('color', 'black').slideUp(2000).slideDown(2000);
});

fades.click(() => {
  fades.fadeOut(1000);

  setTimeout(() => {
    fades.fadeIn(1000);
  }, 3000);

  setTimeout(() => {
    fades.fadeTo(1000, 0.6);
  }, 2000);

  setTimeout(() => {
    fades.fadeTo(1000, 0.2);
  }, 3000);
});
