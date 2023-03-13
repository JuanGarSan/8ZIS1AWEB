// funcionn para invertir palabras
function invertir_(){

    var p1_input = document.getElementById('p1_input').value;
    
const string = p1_input;

function reverseString(str) {
  let arrStr = str.split("");

  return arrStr.reverse().join("");
}

reverseString(string); // esto retorna la palabra invertida
    
    
    document.getElementById('p1-output').textContent = 'La Palabra invertida es: ' + reverseString(string);
    alert("ingresaste la palabra:  " + p1_input )
    }

//vamos a obtener todos los valores por parte de los input
function problema2(){

    var p2_x1 = document.querySelector('#p2-x1').value;
    
    var p2_x2 = document.querySelector('#p2-x2').value;
    
    var p2_x3 = document.querySelector('#p2-x3').value;
    
    var p2_x4 = document.querySelector('#p2-x4').value;
    
    var p2_x5 = document.querySelector('#p2-x5').value;
    
    var p2_y1 = document.querySelector('#p2-y1').value;
    
    var p2_y2 = document.querySelector('#p2-y2').value;
    
    var p2_y3 = document.querySelector('#p2-y3').value;
    
    var p2_y4 = document.querySelector('#p2-y4').value;
    
    var p2_y5 = document.querySelector('#p2-y5').value;
    
    //construir el vector
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];
    
    //ordeno los vectores
    
    v1 = v1.sort(function (a, b){
        return b-a;
    });
    
    v2 = v2.sort(function (a, b){
        return b-a;
    });
    
    v2 = v2.reverse();
    
    //el producto escalar
    
    var p2_producto = 0;
    
    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }
    
    document.querySelector('#p2-output').textContent = 'Producto Escalar Minimo: ' + p2_producto;
    
    }

    function caract_(){

        var p3_input = document.getElementById('p3_input').value;
        


        function contarCaracteres(str) {
            //Pasamos la cadena a minusculas(por si lo necesitas)
            //str = str.toLowerCase()
            //quitamos los espacios en blanco
            str = str.replace(/\s/g, "");
            
            function cleanChar(str, char) {
                console.log('cleanChar()'); 
            while (true) {
                var result_1 = str.replace(char, '');
                if (result_1 === str) {
                    break;
                }
                str = result_1;
            }
            return str;
        }
        var str = p3_input;
        var result = cleanChar(str, ',');
        console.log('Origin: ' + str + ' | Result: ' + result);

            final = {} //Donde guardamos los resultados
            for(let char in str){ //Tomamos el indice de cada caracter
              if(str[char] in final) { //Si ya existe, simplemente aumentamos el contador
                  final[str[char]] = final[str[char]] + 1
              } else { // Si no existe, lo inicializamos a 1
                  final[str[char]] = 1
              }
          }
            //Mostar los resultados
            tmp = ``
            Object.keys(final).forEach(function(letra){
              tmp += `La cantidad de ${letra} es: ${final[letra]} \n`
            })
            return tmp
          }
          let para_contar = p3_input 
   
        document.getElementById('p3-output').textContent = contarCaracteres(para_contar);
        alert("ingresaste las palabras:  " + p3_input )
        }