const abuelo = $('#NAV1');
const padre = $('#NAV2');
const nieto = $('#NAV3');
const nieta = $('#NAV4');
const btnResultados = $('#obtenerPruebas');

btnResultados.click(() => {
  //ANCESTROS
  //muestra el padre del elemento
  console.log(1, padre.parent().text());
  //muesta el todos los elemento que contienen un elemento hasta el body
  console.log(2, nieto.parents().toArray());
  //todos los elementos hasta el indicado
  console.log(3, nieta.parentsUntil(abuelo).toArray());

  //DESCENDIENTES
  //muestra todos los hijos de un elemento
  console.log(4, abuelo.children().toArray());
  //buscar entre los hijos el que cumpla la condicion
  console.log(5, abuelo.find('p').text());
  console.log(6, padre.find('*').toArray());

  //JERARQUICAMENTE IGUALES
  //devuelve los iguales en la jerarquia
  console.log(7, nieto.siblings().toArray());

  //metodos para navegar por los iguales:
  //// siblings();
  //// next();
  //// nextAll();
  //// nextUntil();
  //// prev();
  //// prevAll();
  //// prevUntil();
  //ejemplo
  console.log(8, nieto.next().text());
  console.log(9, nieta.prev().text());

  //metodos para filtrar
  //primero
  console.log(10, abuelo.first().html());
  //ultimo
  console.log(11, padre.last().html());
  //elemento n
  console.log(12, $('ol>li>ol>li').eq(1).html());
  console.log(13, $('ol>li>ol>li').eq(2).html());
  console.log(14, $('ol>li>ol>li').eq(3).html());
  //elementos que no cumplen el criterio
  console.log(
    15,
    $('ol>li>ol').not('#parrafoNav').css('background-color', 'grey')
  );
});
