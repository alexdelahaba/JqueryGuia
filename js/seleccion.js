$('#selectoresJquery').on('click', verSelectores);
//Referencia a elemento por id
const titulo = $('#titulo');
const imagenLogoUniversidad = $('#logo');
const buscador = $('#buscador');
const tituloAprendeAlgoNuevo = $('#tituloAprendeAlgoNuevo');
//Referencia a elemento por class
const subtitulo = $('.subtitulo');
const icono1 = $('.icono1');
const icono2 = $('.icono2');
const icono3 = $('.icono3');
const card1 = $('.card1');
const card2 = $('.card2');
const card3 = $('.card3');
const card4 = $('.card4');
const divBarraIconos = $('.barra');
//Referencia genérica por cualquier atributo del tag
const subsubtitulo = $('[atributoArbitrario="subsubtitulo"]');
//Referencia por el tipo de tag
const parrafos = $('p');

function verSelectores() {
  //Seleccion COMPLEJA de elementos
  //Seleccion de todo con *
  console.log('1-Seleccion', $('*'));
  //Seleccion de el elemento actual con this
  console.log('2-Seleccion', $(this).html());
  //multicriterio
  console.log(
    '3-Seleccion',
    $('#hero>.container>.row>.six>.contenido-hero>h2').html()
  );
  //devuelve el primer p del documento
  console.log('4-Seleccion', $('p:first').html());
  //devuelve el primer elemento de un determinado conteniente
  console.log('5-Seleccion', $('ol li:first').html());
  //devuelve todos los primeror¡s elementos de un determinado conteniente
  console.log('6-Seleccion', $('ol li:first-child').html());
  //devuelve todos los elementos que contienen un determinado atributo
  console.log('7-Seleccion*', $('[alt]'));
  console.log('8-Seleccion', $('[atributoArbitrario]').html());
  //todos los elementos que tienen un atributo igual al indicado
  console.log('9-Seleccion', $("a[target='_blank']").html());
  //todos los elementos que tienen un atributo DISTINTO al indicado
  console.log('10-Seleccion', $("a[target!='_blank']").html());
  //selecciona todos los elementos que contienen el atributo especificado
  console.log('11-Seleccion', $(':button').html());

  //selecciona todos los tr pares e impares de una tabla
  console.log('12-Seleccion', $('tr:even').html());
  console.log('13-Seleccion', $('tr:odd').html());
  $('tr:even').css('background-color', 'yellow');
}
