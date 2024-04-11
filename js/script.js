const btn = document.getElementsByClassName("btn")[0];

btn.addEventListener('click', function (){
    window.location = "login.html";
});

const historia = document.getElementById("projeto-historias");

historia.addEventListener('click', function (){
    alert("Isso aqui ainda não está funcionando! (T _ T)");
})


var poema1 = {text:"CASCA VAZIA:\nTenho medo dessa solidão\nEsse profundo pecado não tem perdão\nJurei que não tentaria\nMas não aguento essa agonia\nSinceramente quero desistir\nE na calada da noite ir\nNão aguento mais mentir\nMas vou ter de sorrir\nNão há garantia\nMeu corpo não tem serventia\nSou uma casca vazia\nSem nenhuma alegria\nQuando irá parar de doer?\nQuantas unhas terei de roer?\nQuando vai parar essa aflição?\nQuantos dias ainda em depressão?"}

var poema2 = {text2:"ALVIAR:\nEstou sozinho\nSem carinho\nNinguém me responde mais\nQuanto tempo faz?\nQue recebi um bom dia...\nQue tive alguma companhia...\nQue me deram um pouco de alegria...\nNão tenho mais serventia...\nJá não sei Tanto tempo em solidão\nQuantos cortes farei?\nQuero aliviar\nlogo minha depressão..."
}

var poema3 = {text3:"COMPLICAÇÕES:\nEstou irritado\nMeu coração está acelerado\nNão pode ficar no passado\nTem de ser planejado\nMenos chances de falhar\nMas me sinto aflito\nComo pode vir a calhar?\nEu ainda vivo esse conflito\nVai dar errado\nEu sei que vai acabar assim\nEstou frustrado\nEsse é o fim"}

const poema = document.getElementById("poema");
var texto = document.getElementById("conteudo-poemas");



texto.addEventListener('click', function(e) {
    texto = (e.target.id);
});


texto.addEventListener("click", function trocaPoema (){
    
    poema.innerText = "";

    if (texto === "poema-casca-vazia")
    {
        poema.innerText = poema1.text;
    }

    else if (texto === "poema-aliviar")
    {
        poema.innerText = poema2.text2;
    }

    else if (texto === "poema-complicacoes")
    {
        poema.innerText = poema3.text3;
    }
});


