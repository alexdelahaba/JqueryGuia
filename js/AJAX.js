$('#pruebasAjax').click(pruebasAjax);

function pruebasAjax() {
  //llamada ajax con .load()
  $('#respuestaAjax').load('data/datos.txt', function (
    responseTxt,
    statusTxt,
    xhr
  ) {
    console.log(1, responseTxt);
    console.log(2, statusTxt);
    console.log(3, xhr);
  });

  //llamada ajax básica sin errores con $.ajax
  $.ajax({
    url: 'data/datos2.txt',
    dataType: 'html',
    type: 'GET',
    async: true,
    success(resp) {
      console.log(4, resp);
      $('#respuestaAjax2').html(resp);
    },
    error(resp) {
      alert('Se ha producido un error');
    },
    complete(resp) {
      console.log(5, resp);
      console.log('Yo me ejecuto pase lo que pase con la llamada');
    },
  });

  //llamada ajax con respuesta JSON sin errores con $.ajax
  var url = 'https://jsonplaceholder.typicode.com/users';
  $.ajax({
    url: url,
    dataType: 'json',
    type: 'GET',
    async: true,
    success(resp) {
      console.log(6, resp);
    },
    error(resp) {
      alert('Se ha producido un error');
    },
  });

  //otra forma simplificada de hacer una llamada GET o POST es la siguiente

  $.get(url, function (data, status) {
    console.log(7, data, status);
  });
  //ejemplo con post =>
  $.post(url, function (data, status) {
    console.log(data);
    console.log(status);
  });

  //PARA MAS INFO, IR AL TXT QUE ESTÁ EN DATA
}
