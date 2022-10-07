var adicionar = document.querySelector("#adicionar-paciente");
adicionar.addEventListener("click", function (){
    event.preventDefault();
    
    var form    = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = "";

});

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome:    form.nome.value,
        peso:    form.peso.value,
        altura:  form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    console.log(pacienteTr);
    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erros= [];
    if(paciente.nome.length == 0) erros.push("O nome não pode ser em branco");

    if(paciente.altura.length == 0) erros.push("A altura não pode ser em branco");
    
    if(paciente.peso.length == 0) erros.push("O nome não pode ser em branco");

    if(paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco");

    if(!validaPeso(paciente.peso)) erros.push("O peso é inválido");

    if(!validaAltura(paciente.altura)) erros.push("A altura é inválida");
    return erros;
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
       var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });


}

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}