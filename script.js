


function insert(num){

  var numero =  document.querySelector(".resultado").innerHTML;
  document.querySelector('.resultado').innerHTML = numero + num;

}


function clean(){
    document.querySelector('.resultado').innerHTML = "";
}


function calcular(){
 var resultado = document.querySelector(".resultado").innerHTML;
if(resultado){
    document.querySelector(".resultado").innerHTML = eval(resultado);
}

}