
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true


setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}



var textos =[
    "SEJA BEM VINDO, FIQUE A VONTADE.",
    "PROMOÇÃO DE DESCONTOS NAS COMPRAS APARTIR DE R$20,00",
    "ENVIAMOS PARA TODA FORTALEZA VIA UBER MOTO.",
];

var indice = 0;
var elementoTexto = document.getElementById("texto-mudante");

setInterval(function(){
    elementoTexto.innerHTML = textos[indice];
    indice = (indice + 1) % textos.length;
},2000);

