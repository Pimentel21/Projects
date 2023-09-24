document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("mymodal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var descriptions = {
        "mixuruca": "<h1>Tudo começou quando a Julia encontrou esse gato mixuruca da foto</h1>.<p>Ela precisava achar um dono para ele e, graças ao destino, eu fui o escolhido.</p><p>Ps: Até os seus 3 meses de idade, Mixuruca era uma mulher</p>",
        "uniform":  "<h1>Ela está trabalhando na DaVitta</h1><p>Observem como ela fica gostosa de uniforme",
        "kayn": "<h1>Ela tem um gato safado</h1><p>O nome desse safado é Kayn, ele é um gato preto muito sapeca e que possui um comportamento questionável.</p><p>Ps: Ninguém sabe se esse gato tem depressão.</p>",
        "exo": "<h1>O grupo de KPOP favorito dela é o EXO</h1><p>Ela gosta muito desses minin de papai e já me fez ouvir algumas músicas deles</p>",
        "we": "<h1>Nós samos lindus</h1><p>Essa é a deusa rei do meu coraçãozinho"
    };

    // Quando clicar na imagem
    document.querySelector(".container").addEventListener("click", function (event) {
        if (event.target.tagName === "IMG") {
            modal.style.display = "block";
            modalImg.src = event.target.src;
            captionText.innerHTML = descriptions[event.target.id];
        }
    });

    // Quando clicar no 'x' para fechar
    document.querySelector(".close").addEventListener("click", function () {
        modal.style.display = "none";
    });
});


