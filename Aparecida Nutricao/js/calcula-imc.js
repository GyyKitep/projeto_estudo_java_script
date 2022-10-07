var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);

titulo.textContent = "Alterando Titulo";

var pacientes = document.querySelectorAll(".paciente");


for(var i = 0; i < pacientes.length; i++){
    paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent ;
    console.log(tdpeso.textContent);
    
    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent ;
    console.log(tdaltura.textContent);
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    var tdImc = paciente.querySelector(".info-imc");
    
    if(!pesoEhValido){
        tdImc.textContent = "Peso Invalido";
        console.log("Peso Invalido");
        pesoEhValido = false;        
        paciente.classList.add("paciente-invalido");
    }
    
    if(!alturaEhValido){
        tdImc.textContent = "Altura Invalido";
        console.log("Altura Invalido");    
        alturaEhValido = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if( pesoEhValido && alturaEhValido){
        var imc = calculaImc(peso,altura);
        console.log(imc);        
        tdImc.textContent = imc;    
    } 
}

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
    console.log("olá eu fui clickado!")
}

titulo.addEventListener("click", function (){
    console.log("olá eu fui clickado!")
});

function calculaImc(peso, altura){
    var imc = 0;
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}
