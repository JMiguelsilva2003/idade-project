function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector("div#res");
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 5) {
                //Criança
                img.setAttribute('src', 'imagens/M-BB.jpg');
            } else if (idade <= 0) {
                //Adolescente
                img.setAttribute('src', 'imagens/feto.jpg');
            } else if (idade < 14) {
                //Adolescente
                img.setAttribute('src', 'imagens/M-jovem.jpg');
            } else if (idade < 18) {
                //Adolescente
                img.setAttribute('src', 'imagens/M-adole.jpg');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/M-adulto.jpg');
            } else if (idade > 50 && idade < 90) {
                //Adulto
                img.setAttribute('src', 'imagens/M-velho.jpg');
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/esqueleto.jpg');
            }   
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 5) {
                //Criança
                img.setAttribute('src', 'imagens/F-BB.jpg');
            } else if (idade < 0) {
                //Adolescente
                img.setAttribute('src', 'imagens/feto.jpg');
            } else if (idade < 14) {
                //Adolescente
                img.setAttribute('src', 'imagens/F-jovem.jpg');
            } else if (idade < 18) {
                //Adolescente
                img.setAttribute('src', 'imagens/F-adole.jpg');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/F-adulto.jpg');
            } else if (idade > 50 && idade < 90) {
                //Adulto
                img.setAttribute('src', 'imagens/F-velho.jpg');
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/esqueleto.jpg');
            }
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }