var nMaterias = 62;

class materia {
  constructor(n,c,u)  {
    this.nombre = n;
    this.codigo = c;
    this.unidadC = u;
  }
}

var materias = [];
materias.push (new materia ("LENGUAJE Y COMUNICACION",             1121, 2));
materias.push (new materia ("METODOLOGIA DE LA INVESTIGACION",     3121, 2));
materias.push (new materia ("MATEMATICAS 1",                       1141, 4));
materias.push (new materia ("ACTIVIDA DE ORIENTACION",             2121, 2));
materias.push (new materia ("EDUC. SALUD FISICA Y DEPORTES 1",     2111, 1));
materias.push (new materia ("ACTIVIDAD DE FORMACION CULTURAL",     1111, 1));
materias.push (new materia ("INTROD. A LA INGENIERIA ELECTRONICA", 1221, 2));
materias.push (new materia ("QUIMICA",                             1241, 4));



function crearTablas()  {
  var tbl = document.getElementById("tabla");
  var tblBody = document.createElement("tbody");

  for (var i = 0 ; i < materias.length ; i++) {
    var fila = document.create("tr");

    var columna = document.create("td");
    var textoCelda = document.createTextNode();
  }
}
