var textInput = document.querySelector('input');
var labelPontos = document.querySelector('label');
const sectionImg = document.querySelector('#section-img');
var modalidades = {
  textoRedes: [
    {
      id: 1,
      name: 'instagram',
      rede: 'src/img/instagram.svg',
    },
    {
      id: 2,
      name: 'twitter',
      rede: 'src/img/twitter.svg',
    },
    {
      id: 3,
      name: 'linkedin',
      rede: 'src/img/linkedin.svg',
    },
    {
      id: 4,
      name: 'gmail',
      rede: 'src/img/gmail.svg',
    },
    {
      id: 5,
      name: 'facebook',
      rede: 'src/img/facebook.svg',
    },
    {
      id: 6,
      name: 'whatsapp',
      rede: 'src/img/whatsapp.svg',
    },
    {
      id: 7,
      name: 'spotify',
      rede: 'src/img/spotify.svg',
    },
    {
      id: 8,
      name: 'youtube',
      reded: 'src/img/youtube.svg',
    },
  ],
};

//Timeout before img fade
(function initialImagesTimeout() {
  setTimeout(hideImgs, 2000);
})();

let i = 0;
const pontos = [];
const montadorTabela = modalidades.textoRedes.forEach(({ name, rede }) => {
  const divContainer = document.createElement('div');
  const img = document.createElement('img');
  divContainer.classList.add(`img-${i}`);
  img.setAttribute('src', `${rede}`);
  console.log(rede);
  divContainer.append(img);
  sectionImg.append(divContainer);
  i++;
});

(function changeImgSrc() {
  i = 0;
  modalidades.textoRedes.forEach(({ rede }) => {
    let imgs = document.querySelectorAll('img');
    imgs[i].src = rede;
    i++;
  });
  i = 0;
})();

textInput.addEventListener('keypress', (event) => {
  const textValue = document.querySelector('input').value;
  const verificarInput = /[^A-Za-z]/.test(textValue);
  if (event.key === 'Enter' && textValue.length <= 50 && !verificarInput) {
    event.preventDefault();
    if (modalidades.textoRedes.includes(textValue)) {
      labelPontos.innerText = `${pontos.length + 1}`;
      pontos.push(textValue);
      textInput = '';
      if (pontos.length == modalidades.textoRedes.length) {
        alert('Boa você ganhou um biscoito!');
        return;
      }
      return;
    } else {
      textInput.value = '';
    }
  }
});

function hideImgs() {
  const nodeListImgs = document.querySelectorAll('div');
  for (let i = 2; i < nodeListImgs.length; i++) {
    addClass(nodeListImgs[i], 'hiddenElement');
  }
  //console.log(nodeListImgs);
}

function addClass(add, classe) {
  add.classList.add(classe);
}
