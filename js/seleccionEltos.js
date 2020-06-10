//Referencia a elemento por id
const titulo = $('#titulo');
const imagenLogoUniversidad = $('#logo');
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

//Eventos para ver los resultados
$('#consolesLogs').on('click', verConsolesLogs);
$('#efectosCssHtml').on('click', verEfectos);

function verConsolesLogs() {
  //usando el método attr podemos acceder a cualquier atributo de un elemento para recuperarlo o para sobreescribirlo
  //devolver valor del atributo
  console.log(1, imagenLogoUniversidad.attr('src'));

  //el metodo hasClass sirve para saber si un elemento tiene una determinada clase
  console.log(2, icono3.hasClass('icono', 'four'));

  //el .heigth() devuelve la altura de un elemento html
  console.log(3, imagenLogoUniversidad.height());

  //el metodo .html() sirve para devolver el tetxo html de un elemento
  console.log(4, subsubtitulo.html());

  //los metodos innerHeight y innerWidth devuelven los valores interiores de un elemento, es decir, excluye el borde
  console.log(5, imagenLogoUniversidad.innerHeight());
  console.log(6, imagenLogoUniversidad.innerWidth());

  //los metodos outerHeight y outerWidth devuelven los valores exteriores de un elemento, es decir, incluye el borde
  console.log(7, imagenLogoUniversidad.outerHeight());
  console.log(8, imagenLogoUniversidad.outerWidth());

  //el método offset() devuelve las coordenadas top y left relativas de un elemento html
  console.log(9, imagenLogoUniversidad.offset());

  //el método offsetParent() devuelve el primer padre hacia arriba en la jerarquia
  console.log(10, subtitulo.offsetParent());

  //el metodo position() devuelve la posicion relativa(top y left) respecto al padre de un elemento
  console.log(11, subtitulo.position());

  //el metodo prop setea o devuelve una propiedad de un elemento
  console.log(12, imagenLogoUniversidad.prop('width'));

  //el metodo scrollLeft() y scrollTop() devuelven la positcion de la barra de scroll para un elto concreto
  console.log(13, titulo.scrollLeft());
  console.log(14, titulo.scrollTop());

  //el metodo .tetx() devuelve el texto de un elemento html
  console.log(15, titulo.text());
}

function verEfectos() {
  //MANIPULAR HTML Y CSS

  //añadir valor de clase a un elemento
  titulo.addClass('verde');
  subtitulo.addClass('azul');
  subsubtitulo.addClass('rojo');

  //añadir un elemento html despues de otro
  subsubtitulo.after(
    '<p>Estás probando a añadir un elemento html desde jquery con .after</p>'
  );

  //añadir contenido html al final del elemento referenciado
  subtitulo.append('<p>Estás usando el método .append</p>');

  //la diferencia entre after y append es que con after insertamos un tag despues del seleccionado y con append insertamos DENTRO del seleccionado

  //usando el método appendTo() para insertar un elemento igual que en append pero con una sintaxis diferente, ver ejemplo =>
  $('<p>He sido insertado con appendTo()</p>').appendTo(titulo);

  //setear el atributo
  imagenLogoUniversidad.attr('width', '600px');

  //con el método before hacemos algo muy parecido a after pero, evidentemente, antes del elemento html
  subsubtitulo.before('<p>Estás usando .before()</p>');

  //con el metodo .clone() clonamos un elemento html y hacemos con el lo que queramos
  //con el siguiente codigo, cogemos la imagen del logo y la insertamos en el titulo
  imagenLogoUniversidad.clone().appendTo(titulo);

  //con el método css podemos setear valores del css de un elemento
  titulo.css('font-size', '40px');

  //con el metodo .detach() se puede eliminar un elemento de manera provisional
  icono1.detach();

  //con el metodo .empty() se elimina un elemento y su contenido
  icono2.empty();

  //el método insertAfter() extrae el elemento y lo inserta despues del especificado
  titulo.insertAfter(subsubtitulo);

  //el método insertBefore() extrae el elemento y lo inserta antes del especificado
  imagenLogoUniversidad.insertBefore(subtitulo);

  //el método prepend() inserta contenido al inicio del elemento indicado
  //con el se puede revertir el efecto de detach()
  titulo.prepend(icono3);

  setTimeout(() => {
    divBarraIconos.prepend(icono1);
  }, 2000);

  //prepentTo() sirve para insertar un elemento html antes de otro
  imagenLogoUniversidad.prependTo(divBarraIconos);

  //el metodo prop setea o devuelve una propiedad de un elemento
  imagenLogoUniversidad.prop('style', 'border:solid black 90px');

  //el metodo .remove() elimina un elto por completo
  card1.remove();

  //el metodo removeAttr() sirve para eliminar atributos html de un objeto
  setTimeout(() => {
    subtitulo.removeAttr('class');
    imagenLogoUniversidad.removeAttr('style');
  }, 2000);

  //el metodo removeClass() elimina una o varias clases de un elemento seleccionado
  setTimeout(() => {
    titulo.removeClass('verde');
    card2.removeClass('card');
  }, 2000);

  //el metodo removePop() sirve para quitar propiedades aplicadas con el metodo prop()
  card3.prop('style', 'border:solid black 20px');

  setTimeout(() => {
    card3.removeProp('class');
  }, 3000);

  //el metodo replaceAll() sirve para reemplazar un elemento html con otro

  setTimeout(() => {
    $('<p>He sido modificado con replaceAll()</p>').replaceAll('.card');
  }, 3000);

  //el metodo replaceWith() sirve para reemplazar un elemento con otro

  setTimeout(() => {
    imagenLogoUniversidad.replaceWith(titulo);
  }, 5000);

  //el metodo toggleClass aplica y desaplica una clase a un elemento

  setTimeout(() => {
    subtitulo.toggleClass('negrita');
  }, 2000);
  setTimeout(() => {
    subtitulo.toggleClass('negrita');
  }, 5000);
}
