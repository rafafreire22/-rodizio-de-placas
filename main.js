function Carro(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const placa = document.querySelector('#placa').value;
    const dia = document.querySelector('#dia').value;


    if ((placa == 1 || placa == 2) && (dia == "Segunda" || dia == "segunda" || dia == "Segunda-feira" || dia == "segunda-feira")){
        texto.innerHTML = "Não Permitido🚫";
        imagem.setAttribute("src","./img/pare.png");
        imagem.setAttribute("width","300px");
    }

    else if ((placa == 3 || placa == 4) && (dia == "Terça" || dia == "terça" || dia == "Terça-feira" || dia == "terça-feira")){
        texto.innerHTML = "Não Permitido🚫";
        imagem.setAttribute("src","./img/pare.png");
        imagem.setAttribute("width","300px");
    }

    else if ((placa == 5 || placa == 6) && (dia == "Quarta" || dia == "quarta" || dia == "Quarta-feira" || dia == "quarta-feira")){
        texto.innerHTML = "Não Permitido🚫";
        imagem.setAttribute("src","./img/pare.png");
        imagem.setAttribute("width","300px");
    }

    else if ((placa == 7 || placa == 8) && (dia == "Quinta" || dia == "quinta" || dia == "Quinta-feira" || dia == "quinta-feira")){
        texto.innerHTML = "Não Permitido🚫";
        imagem.setAttribute("src","./img/pare.png");
        imagem.setAttribute("width","300px");
    }

    else if ((placa == 9 || placa == 0) && (dia == "Sexta" || dia == "sexta" || dia == "Sexta-feira" || dia == "sexta-feira")){
        texto.innerHTML = "Não Permitido🚫";
        imagem.setAttribute("src","./img/pare.png");
        imagem.setAttribute("width","300px");
    }
    else {
        texto.innerHTML = "Permitido ✔";
    }

}