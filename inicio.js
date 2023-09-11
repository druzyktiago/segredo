//TELA DE CARREGAMENTO

setTimeout(function() {
    var loadingScreen = document.querySelector(".loading-screen");
    if (loadingScreen) {
        loadingScreen.style.display = "none";
    }
}, 3000);

// Simulando o progresso da barra de carregamento
var progressBar = document.querySelector(".progress-bar");
var progress = 0;
var duration = 2000; // Reduzi o tempo para 2 segundos para fins de demonstração
var intervalTime = 50;
var increment = (100 * intervalTime) / duration;

var interval = setInterval(function() {
    progress += increment;
    progressBar.style.width = progress + "%";
    if (progress >= 85) {
        clearInterval(interval);

        var loadingScreen = document.querySelector(".loading-screen");
        if (loadingScreen) {
            loadingScreen.classList.add("hidden");
        }
    }
}, intervalTime);


document.addEventListener("DOMContentLoaded", function() {
  const botaoEndereco = document.getElementById("botaoEndereco");

  botaoEndereco.addEventListener("click", scrollToBottom);

  function scrollToBottom() {
    const enderecoElement = document.getElementById("endereco");
    if (enderecoElement) {
      enderecoElement.scrollIntoView({
        behavior: "smooth", // Adiciona uma animação de rolagem suave
        block: "end", // Rola para o final do elemento
      });
    }
  }
});


//MENU


var menu = document.querySelector(".menu"); // Seleciona o elemento com a classe "menu"

function openMenu() {
  menu.style.display = "block";
  var openingHeight = 0; // Altura inicial do menu abrindo (em pixels)
  var interval = setInterval(function() {
    if (openingHeight < 100) {
      menu.style.clipPath = `polygon(0 0, 100% 0, 100% ${openingHeight}%, 0 ${openingHeight}%)`;
      openingHeight += 5; // Aumenta a altura gradualmente
    } else {
      clearInterval(interval); // Limpa o intervalo quando o menu estiver totalmente aberto
      menu.style.clipPath = "none"; // Restaura o clipPath para a forma original
    }
  }, 20); // Intervalo de tempo em milissegundos entre cada movimento
}


function closeMenu() {
  var closingHeight = 100; // Altura inicial do menu fechando (em pixels)
  var interval = setInterval(function() {
    if (closingHeight > 0) {
      menu.style.clipPath = `polygon(0 0, 100% 0, 100% ${closingHeight}%, 0 ${closingHeight}%)`;
      closingHeight -= 5; // Diminui a altura gradualmente
    } else {
      clearInterval(interval); // Limpa o intervalo quando o menu estiver totalmente fechado
      menu.style.display = "none";
      menu.style.clipPath = "none"; // Restaura o clipPath para a forma original
    }
  }, 20); // Intervalo de tempo em milissegundos entre cada movimento
}

document.querySelector(".buttonstart").addEventListener("click", openMenu);
document.querySelector("#buttonclose").addEventListener("click", closeMenu);


