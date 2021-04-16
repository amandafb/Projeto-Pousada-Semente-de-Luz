//****** REQUISITO BOTÃO VOLTAR AO TOPO (JQUERY)******//
window.onscroll = function () {
  scrollFunction()
};

$(window).scroll(function () {
  if ($(document).scrollTop() > 220) {
    $("#myBtn").css({
      display: 'block'
    });
  } else {
    $("#myBtn").css({
      display: 'none'
    });
  }
});

//****** REQUISITO - VALIDAÇÃO DE CNPJ (JAVASCRIPT) ******//
function validarCNPJ(cnpj) {

  cnpj = document.getElementById('cnpj').value;
  var inputCnpj = document.getElementById("cnpj");

  if (cnpj == '') {
    inputCnpj.style.border = "1px solid red";
    return false;
  }

  if (cnpj.length != 14) {
    inputCnpj.style.border = "1px solid red";
    return false;
  }

  // Elimina CNPJs invalidos conhecidos
  if (cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999") {
    inputCnpj.style.border = "1px solid red";
    return false;
  }

  // Valida DVs
  tamanho = cnpj.length - 2
  numeros = cnpj.substring(0, tamanho);
  digitos = cnpj.substring(tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
      pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0))
    return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
      pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1)) {
    inputCnpj.style.border = "1px solid red";
    return false;
  }

  $('#cnpj').css("border", "");
  return true;

}

// ************ VALIDAÇÕES OPCIONAIS ************ //

//******VALIDAÇÃO CAMPO: NOME******//
function validaNome() {
  let num = $("#nome").val();
  if (num == '') {
    $('#nome').css("border", "1px solid red");
  } else {
    $('#nome').css("border", "");
  }
}

//******VALIDAÇÃO CAMPO: ASSUNTO******//
function validaAssunto() {
  let num = $("#assunto").val();
  if (num == '') {
    $('#assunto').css("border", "1px solid red");
  } else {
    $('#assunto').css("border", "");
  }
}

//******VALIDAÇÃO CAMPO: MENSAGEM******//
function validaMensagem() {
  let num = $("#mensagem").val();
  if (num == '') {
    $('#mensagem').css("border", "1px solid red");
  } else {
    $('#mensagem').css("border", "");
  }
}

//******VALIDAÇÃO CAMPO: CPF******//
function VerificaCPF() {
  let strCpf = $("#cpf").val();

  var soma = 0;
  var resto;
  if (strCpf == '') {
    $('#cpf').css("border", "1px solid red");
    return false
  }

  if (strCpf == "00000000000" || strCpf.length != 11) {

    $('#cpf').css("border", "1px solid red");
    return false;
  }

  for (i = 1; i <= 9; i++) {
    soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
  }

  resto = soma % 11;

  if (resto == 10 || resto == 11 || resto < 2) {
    resto = 0;
  } else {
    resto = 11 - resto;
  }

  if (resto != parseInt(strCpf.substring(9, 10))) {

    return false;
  }

  soma = 0;

  for (i = 1; i <= 10; i++) {
    soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
  }

  resto = soma % 11;

  if (resto == 10 || resto == 11 || resto < 2) {
    resto = 0;
  } else {
    resto = 11 - resto;
  }

  if (resto != parseInt(strCpf.substring(10, 11))) {

    $('#cpf').css("border", "1px solid red");
    return false;
  }

  $('#cpf').css("border", "");
  return true;
}

//******VALIDAÇÃO: EMAIL******//
function validaEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
  if ((usuario.length >= 1) &&
    (dominio.length >= 3) &&
    (usuario.search("@") == -1) &&
    (dominio.search("@") == -1) &&
    (usuario.search(" ") == -1) &&
    (dominio.search(" ") == -1) &&
    (dominio.search(".") != -1) &&
    (dominio.indexOf(".") >= 1) &&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
    $('#email').css("border", "");

  } else {
    $("#email").css("border", "1px solid red");

  }
}

//******VALIDAÇÃO TELEFONE******//
function validaTel() {
  let num = $("#tel").val();
  if (num == '' || num.length < 10) {
    $('#tel').css("border", "1px solid red");
  } else {
    $('#tel').css("border", "");
  }
}

//******VALIDAÇÃO CEP******//
function validaCep() {
  let num = $("#cep").val();
  if (num == '' || num.length < 8) {
    $('#cep').css("border", "1px solid red");
  } else {
    $('#cep').css("border", "");
  }
}

//******VALIDAÇÃO ENDEREÇO******//
function validaEndereco() {
  let num = $("#rua").val();
  if (num == '') {
    $('#rua').css("border", "1px solid red");
  } else {
    $('#rua').css("border", "");
  }
}

//******VALIDAÇÃO CIDADE ******//
function validaCidade() {
  let num = $("#cidade").val();
  if (num == '') {
    $('#cidade').css("border", "1px solid red");
  } else {
    $('#cidade').css("border", "");
  }
}

//******VALIDAÇÃO ESTADO******//
function validaEstado() {
  let num = $("#estado").val();
  if (num == '0') {
    $('#estado').css("border", "1px solid red");
  } else {
    $('#estado').css("border", "");
  }
}

//******VALIDAÇÃO IDADE - PRINCIPAL HÓSPEDE******//
function validaIdade() {

  var hoje = new Date();
  var data = document.getElementById("data").value;
  var separados = data.split("-");
  var ano = parseInt(separados[0]);
  var idade = hoje.getFullYear() - ano;
  var mes = parseInt(separados[1]);
  var dia = parseInt(separados[2]);

  if (data == '') {
    $('#data').css("border", "1px solid red");
  } else {
    $('#data').css("border", "");
  }

  if (ano < 1891 || ano > hoje.getFullYear()) {
    alert("Informe um ano entre 1891 a 2021");
    $('#data').css("border", "1px solid red");
  }

  if (idade < 18) {
    alert("O hóspede principal deve ter mais de 18 anos");
    $('#data').css("border", "1px solid red");
  }
}

if (
  mes > hoje.getMonth() + 1 ||
  (mes == hoje.getMonth() + 1 && dia > hoje.getDate())
) {
  idade--;
} else {
  idade = idade;
}

//  Validação Campo Cadastrar CNPJ   
function validaCadastroCnpj() {
  let num = $("#cadastrarCnpj").val();
  if (num == 0) {
    $('#cadastrarCnpj').css("border", "1px solid red");
    $('#cnpj').prop("disabled", true);
    $('#cnpj').val("");
    $('#cnpj').css("border", "");
  } else if (num == 1) {
    $('#cadastrarCnpj').css("border", "");
    $('#cnpj').prop("disabled", false);
  } else if (num == 2) {
    $('#cadastrarCnpj').css("border", "");
    $('#gcnpj').prop("disabled", true);
    $('#cnpj').val("");
  }
}

// Acomodações 
function validaQuarto() {
  var quarto = $("#quartos").val();

  if (quarto == 0) {
    $('#quartos').css("border", "1px solid red");

  } else if (quarto > 0) {
    $('#quartos').css("border", "");
    $('#qtdadePessoas').prop("disabled", false);
  }
}

// Adicionar Acompanhante
function dadosAcompanhante(){
  var qtdadePessoas = $("#qtdadePessoas").val();

  if(qtdadePessoas == 2){
    $('#addPessoa').css("display", "block");
    $('#nome1').prop("disabled", false);
    $('#data1').prop("disabled", false);
    $('#rg1').prop("disabled", false);
  }

  if(qtdadePessoas == 3){
    $('#addPessoa').css("display", "block");
    $('#nome1').prop("disabled", false);
    $('#data1').prop("disabled", false);
    $('#rg1').prop("disabled", false);
    $('#nome2').prop("disabled", false);
    $('#data2').prop("disabled", false);
    $('#rg2').prop("disabled", false);
  }

  if(qtdadePessoas == 4){
    $('#addPessoa').css("display", "block");
    $('#nome1').prop("disabled", false);
    $('#data1').prop("disabled", false);
    $('#rg1').prop("disabled", false);
    $('#nome2').prop("disabled", false);
    $('#data2').prop("disabled", false);
    $('#rg2').prop("disabled", false);
    $('#nome3').prop("disabled", false);
    $('#data3').prop("disabled", false);
    $('#rg3').prop("disabled", false);
  }

  if(qtdadePessoas == 5){
    $('#addPessoa').css("display", "block");
    $('#nome1').prop("disabled", false);
    $('#data1').prop("disabled", false);
    $('#rg1').prop("disabled", false);
    $('#nome2').prop("disabled", false);
    $('#data2').prop("disabled", false);
    $('#rg2').prop("disabled", false);
    $('#nome3').prop("disabled", false);
    $('#data3').prop("disabled", false);
    $('#rg3').prop("disabled", false);
    $('#nome4').prop("disabled", false);
    $('#data4').prop("disabled", false);
    $('#rg4').prop("disabled", false);
  }

}

function addAcompanhante(){
  $('#dadosAcompanhantes').css("display", "block");
}

