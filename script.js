var catalogoFilmes = [ ];
var nomesFilmes = [ ];

let listaImg = document.getElementById("listaImagens");

preencheImagensInicial();

function adicionarFilme() {
  var nomeFilmeFavorito = document.getElementById("nomeFilme").value;
  var filmeFavorito = document.getElementById("filme").value;
  
  if (filmeFavorito.endsWith(".jpg") && nomeFilmeFavorito != "") {
    verificaDuplicacao(filmeFavorito, nomeFilmeFavorito);
  } else {
    alert("Endereço de filme inválido ou campo vazio");
  }
  document.getElementById("filme").value = "";
  document.getElementById("nomeFilme").value = "";
}
function removerFilme() {
  var nomeFilmeRemover = document.getElementById("nomeFilme").value;
  if (nomeFilmeRemover == "") {
    alert("Por favor, insira o nome do filme");
  } else {
    verificaCatalogo(nomeFilmeRemover);
  }

  document.getElementById("nomeFilme").value = "";
}
function verificaCatalogo(nome) {
  var flag = false;
  for (var j = 0; j < nomesFilmes.length; j++) {
    if (nome == nomesFilmes[j]) {
      flag = true;
      catalogoFilmes.splice(j, 1);
      nomesFilmes.splice(j, 1);
      apagaImagem(j);
    }
  }
  if (flag == false) {
    alert("Esse filme não está no catálogo");
  }
}
function verificaDuplicacao(filme, nome) {
  var verificacao = false;
  for (var elemento = 0; elemento < catalogoFilmes.length; elemento++) {
    if (filme == catalogoFilmes[elemento]) {
      alert("Esse filme já está no catálogo");
      verificacao = true;
    }
  }
  if (verificacao == false) {
    nomesFilmes.push(nome);
    catalogoFilmes.push(filme);
    adicionaImagem(filme);
  }
}

function adicionaImagem(filme) {
  var indice = catalogoFilmes.indexOf(filme);

  let li = document.createElement("li");
  li.innerHTML =
    "<img src =" + catalogoFilmes[indice] + "><br>" + nomesFilmes[indice];
  listaImg.appendChild(li);
}
function apagaImagem(indice) {
  var itensLista = document.getElementsByTagName("li");

  // Removendo determinado elemento
  listaImg.removeChild(itensLista[indice]);
}
function preencheImagensInicial() {
  catalogoFilmes.forEach((filme) => adicionaImagem(filme));
}

