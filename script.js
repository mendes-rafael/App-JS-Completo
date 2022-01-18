let display = document.getElementById('display');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let teste   = document.getElementById('teste');

let comecar = document.getElementById('comecar');

let cronometroSeg;
let minutoAtual;
let segundoAtual;

let interval;


for(var c = 0; c <= 60; c++){
    minutos.innerHTML+='<option value="'+c+'">'+c+'</option>';
}

for(var c = 1; c <= 60; c++){
    segundos.innerHTML +='<option value="'+c+'">'+c+'</option>';
}

comecar.addEventListener('click', function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;
    
    display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;
   
      interval = setInterval(function(){
        segundoAtual--;
        if(segundoAtual <= 0){
            if(minutoAtual > 0){
                minutoAtual--;
                segundoAtual = 59;                
            }else{
                document.getElementById("sound").play();
                clearInterval(interval);
                alert("Acabou!");
            }
        }

        display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;
    },1000);


})

