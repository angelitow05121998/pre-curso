

    if (letra === a || letra === e || letra === i || letra === o || letra === u ){
        return "Es vocal"
  } else if (letra.lenthg === 1){
    return " Dato incorrecto"

  }else {
    return "dato incorrecto"
  }


   
  var numerodia = prompt ("ingresa el dia de la semana: ");
  switch (numerodia){
      case '1':
      document.write ("El dia de hoy es <br> LUNES")
          break;
      case '2':
      document.write ("El dia de hoy es <br> MARTES")
          break;
      case '3':
      document.write ("El dia de hoy es <br> MIERCOLES")
          break;
      case '4':
       document.write("El dia de hoy es <br> JUEVES")
          break;
      case '5':
      document.write ("El dia de hoy es <br> VIERNES")
          break;
      case '6':
      document.write ("El dia de hoy es <br> SABADO")
          break;
      case '7':
      document.write ("El dia de hoy es <br> DOMINGO")
          break;
      default:
      document.write ("El dia de hoy es <br> desconocido")
      
}


function horario(numerodia){
  switch (numerodia){
      case '1':
      return "El dia de hoy es  LUNES"
          break;
      case '2':
      return "El dia de hoy es  MARTES"
          break;
      case '3':
      return "El dia de hoy es  MIERCOLES"
          break;
      case '4':
       return "El dia de hoy es  JUEVES"
          break;
      case '5':
      return "El dia de hoy es  VIERNES"
          break;
      case '6':
      return "El dia de hoy es  SABADO"
          break;
      case '7':
      return "El dia de hoy es  DOMINGO"
          break;
      default:
      return "El dia de hoy es  desconocido"
      
 }
}

function obtenerMayor(x, y) {
     
    if (4 < 6){
        return (6)
    }else (Number === 4 || Number === 6)
    return "desconocido"
}


  

// devolviendo el numero mayor:
// "x" e "y" son números enteros (int).
    // Devuelve el número más grande
    // Si son iguales, devuelve cualquiera de los dos
    // Tu código:
    
    function obtenerMayor(x, y) {
        // "x" e "y" son números enteros (int).
        // Devuelve el número más grande
        // Si son iguales, devuelve cualquiera de los dos
        // Tu código:
        if(x > y){
          return "x"
        }else{
          return "y"
        }
      }


var numero = [[1,2,3],[4,5,6]]

numero[1][1]
      
function numero2(){
    return numero[1][1]
    
}





var nuevoArray = [];
function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    
    for (var i = 0; i < array.length; i++){
     resultado[i] = array[i] + 1;
    }  
    return resultado
  }


  function dePalabrasAfrase 