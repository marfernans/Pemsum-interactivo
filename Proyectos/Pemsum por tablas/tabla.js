var columnas=new Array();
columnas[0]=1;
columnas[1]=2;
columnas[2]=3;
columnas[3]=4;
columnas[4]=5;
columnas[5]=6;

var filas=new Array();
filas[0]=1;
filas[1]=2;
filas[2]=3;
filas[3]=4;
filas[4]=5;
filas[5]=6;
filas[6]=7;
filas[7]=8;
var tabla=new Array();
tabla[0]=columnas;
tabla[1]=filas;



function crearTabla() {
    var tbl = document.getElementById("tabla");
    var tblBody = document.createElement("tbody");

    for (var i = 0; i < columnas.length; i++) {
        var fila = document.createElement("tr");

        for (var j = 0; j < filas.length; j++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(i+"-"+j);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
        }
        tblBody.appendChild(fila);
    }
    tbl.appendChild(tblBody);

    tbl.setAttribute("border", "2");
}
