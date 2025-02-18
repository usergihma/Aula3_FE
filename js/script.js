// Arquivo de script vazio 
function mudaNome() {
    // alert("Hello ")
    const h1 = document.getElementById('nome');

    h1.textContent = "Huuhuu foi"
}
function calcular() {
    const valor1 = document.getElementById("vl1").value;
    const valor2 = document.getElementById("vl2").value;

    let soma = parseInt(valor1) + parseInt(valor2);

    alert(soma);
    
}
// Ex1
function mostraNome(){
    const nome = document.getElementById('usuario').value;

    alert('Seja bem-vindo: '+nome);
}
//Ex2

function calcular(){

    const vl1 = document.getElementById('vl1').value;
    const vl2 = document.getElementById('vl2').value;
   
    let soma= parseInt(vl1) + parseInt(vl2);
    let sub= parseInt(vl1) - parseInt(vl2);
    let mult= parseInt(vl1) * parseInt(vl2);
    let div= parseInt(vl1) / parseInt(vl2);
   
    alert("A soma é de: " + soma + " A subtração é de: " + sub + " A multiplicação é de: " + mult + " A divisão é de: "+ div);
}

// Ex3
function converter(){

    const temp = document.getElementById('temp').value;

    let conv = (parseInt(temp) * 1.8) + 32;

    alert(conv);



}
