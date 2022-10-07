var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; //Tr = paciente = remover
    event.target.parentNode.classList.add("fadeOut")

    setTimeout(function(){
        paiDoAlvo.remove();
    },500)
    
})

//pacientes.forEach(function(paciente){
//    paciente.addEventListener("dblclick", function(){   //adicionar o evento de duplo click
//        console.log("fui clicado");
//        this.remove();                                  //this se refere ao dono do evento
//    });                                                 //event.target se refere a quem foi o alvo da acao
//});