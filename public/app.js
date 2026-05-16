const dados = [
  {
    "id": 1,
    "nome": "Ilia Topuria",
    "apelido": "El Matador",
    "categoria": "Peso-Pena",
    "origem": "Espanha / Geórgia",
    "descricao": "Campeão peso-pena do UFC. Invicto nas MMA profissionais, nocauteou Alexander Volkanovski para conquistar o cinturão.",
    "conteudo": "Ilia Topuria é um dos lutadores mais empolgantes da atualidade no UFC. Nascido na Geórgia e criado na Espanha, El Matador acumulou um cartel invicto até se tornar campeão peso-pena ao nocautear o lendário Alexander Volkanovski no UFC 298, em fevereiro de 2024. Com um estilo explosivo de boxe e um jogo de finalização perigoso, Topuria rapidamente se tornou um dos rostos mais populares do esporte.",
    "altura": "1,70m",
    "alcance": "173cm",
    "cartel": "15-0-0",
    "imagem": "img/img/imageilia.png"
  },
  {
    "id": 2,
    "nome": "Charles Oliveira",
    "apelido": "Do Bronx",
    "categoria": "Peso-Leve",
    "origem": "Brasil",
    "descricao": "Ex-campeão peso-leve do UFC e maior finalizador da história da organização, com mais de 20 finalizações.",
    "conteudo": "Charles 'Do Bronx' Oliveira é um lutador brasileiro de MMA amplamente reconhecido como o maior finalizador da história do UFC. Natural de Guarujá, São Paulo, Charles superou uma infância difícil para se tornar um dos melhores atletas do mundo. Ele conquistou o cinturão peso-leve em 2021 ao finalizar Michael Chandler e defendeu o título múltiplas vezes. Seu jiu-jítsu de elite combinado com um boxe cada vez mais aprimorado o torna extremamente perigoso.",
    "altura": "1,78m",
    "alcance": "188cm",
    "cartel": "34-9-0",
    "imagem": "img/img/imagecharles.png"
  },
  {
    "id": 3,
    "nome": "Islam Makhachev",
    "apelido": "The Dagestani",
    "categoria": "Peso-Leve",
    "origem": "Rússia",
    "descricao": "Atual campeão peso-leve do UFC e número 1 do ranking libra por libra. Discípulo de Khabib Nurmagomedov.",
    "conteudo": "Islam Makhachev é considerado por muitos o melhor lutador do mundo atualmente. Treinado desde jovem ao lado de Khabib Nurmagomedov no Daguestão, Islam herdou o estilo sufocante de wrestling e grappling que tornou seu mentor famoso. Ele conquistou o cinturão peso-leve do UFC ao finalizar Charles Oliveira no UFC 280 e vem dominando todas as suas lutas com maestria técnica impressionante.",
    "altura": "1,75m",
    "alcance": "178cm",
    "cartel": "26-1-0",
    "imagem": "img/img/imageislam.png"
  },
  {
    "id": 4,
    "nome": "Alex Pereira",
    "apelido": "Poatan",
    "categoria": "Peso-Meio-Pesado",
    "origem": "Brasil",
    "descricao": "Campeão peso-meio-pesado do UFC e ex-campeão mundial de kickboxing. Possui o nocaute mais devastador do esporte.",
    "conteudo": "Alex Pereira, o 'Poatan', é um fenômeno do MMA. Antes de migrar para as artes marciais mistas, já era multicampeão mundial de kickboxing e muay thai. No UFC, escalou rapidamente as divisões: conquistou o cinturão dos médios ao nocautear Israel Adesanya e depois subiu para o peso-meio-pesado e conquistou mais um cinturão, tornando-se bicampeão do UFC. Sua potência de nocaute é considerada a mais assustadora do esporte.",
    "altura": "1,93m",
    "alcance": "203cm",
    "cartel": "12-2-0",
    "imagem": "img/img/imagealex.png"
  },
  {
    "id": 5,
    "nome": "Jon Jones",
    "apelido": "Bones",
    "categoria": "Peso-Pesado",
    "origem": "EUA",
    "descricao": "Considerado por muitos o maior lutador de todos os tempos. Campeão dos pesados e ex-campeão invicto dos meio-pesados.",
    "conteudo": "Jon 'Bones' Jones é amplamente debatido como o GOAT do MMA. Com um reinado dominante na divisão meio-pesada, Jones derrotou todos os desafiantes que encontrou, incluindo Daniel Cormier, Alexander Gustafsson e Glover Teixeira. Após anos de hiato, voltou ao octógono na divisão pesada e conquistou o cinturão ao nocautear Ciryl Gane. Sua envergadura, inteligência de luta e habilidade técnica excepcionais fazem dele um competidor único na história do esporte.",
    "altura": "1,93m",
    "alcance": "215cm",
    "cartel": "27-1-0 (1 NC)",
    "imagem": "img/img/imagejonjones.png"
  },
  {
    "id": 6,
    "nome": "Sean O'Malley",
    "apelido": "Sugar",
    "categoria": "Peso-Galo",
    "origem": "EUA",
    "descricao": "Ex-campeão peso-galo do UFC. Estilo único de boxe, carisma explosivo e um dos maiores nomes do esporte hoje.",
    "conteudo": "Sean 'Sugar' O'Malley é uma das personalidades mais marcantes do UFC atual. Com um estilo de boxe completamente fora do convencional, footwork impecável e confiança inabalável, Sugar conquistou o cinturão peso-galo ao nocautear Aljamain Sterling no UFC 292. Seu carisma, cabelos coloridos e personalidade provocadora o tornaram um dos atletas mais seguidos do esporte.",
    "altura": "1,80m",
    "alcance": "180cm",
    "cartel": "18-2-0",
    "imagem": "img/img/imagesean.png"
  }
];

function renderizarCards() {
  var container = document.getElementById("cards-container");
  if (!container) return;

  container.innerHTML = "";

  dados.forEach(function (lutador) {
    var card = document.createElement("div");
    card.classList.add("bloco");

    card.innerHTML =
      '<img src="' + lutador.imagem + '" alt="' + lutador.nome + '" style="width:100%;border-radius:8px;margin-bottom:10px;">' +
      '<h3>' + lutador.nome + '</h3>' +
      '<p><em>"' + lutador.apelido + '"</em></p>' +
      '<p><strong>' + lutador.categoria + '</strong></p>' +
      '<p>' + lutador.descricao + '</p>' +
      '<a href="detalhes.html?id=' + lutador.id + '">Ver perfil completo</a>';

    container.appendChild(card);
  });
}

function renderizarDetalhes() {
  var params = new URLSearchParams(window.location.search);
  var id = parseInt(params.get("id"));

  var lutador = dados.find(function (l) {
    return l.id === id;
  });

  var container = document.getElementById("detalhes-container");

  if (!lutador) {
    container.innerHTML = "<p>Lutador não encontrado.</p>";
    return;
  }

  document.title = "Portal MMA — " + lutador.nome;

  container.innerHTML =
    '<img src="' + lutador.imagem + '" alt="' + lutador.nome + '" style="width:250px;border-radius:10px;float:right;margin-left:20px;">' +
    '<h1>' + lutador.nome + ' — "' + lutador.apelido + '"</h1>' +
    '<p><strong>Categoria:</strong> ' + lutador.categoria + '</p>' +
    '<p><strong>Origem:</strong> ' + lutador.origem + '</p>' +
    '<p><strong>Cartel:</strong> ' + lutador.cartel + '</p>' +
    '<p><strong>Altura:</strong> ' + lutador.altura + '</p>' +
    '<p><strong>Alcance:</strong> ' + lutador.alcance + '</p>' +
    '<hr>' +
    '<p>' + lutador.conteudo + '</p>' +
    '<br style="clear:both"><a href="index.html">← Voltar para o portal</a>';
}

if (document.getElementById("cards-container")) {
  renderizarCards();
}

if (document.getElementById("detalhes-container")) {
  renderizarDetalhes();
}