var textInput = document.querySelector('input');
var labelPontos = document.querySelector('label');
var modalidades = 
    {
    redes: [
    'src/img/facebook.svg',
    'src/img/gmail.svg',
    'src/img/instagram.svg',
    'src/img/linkedin.svg',
    'src/img/twitter.svg',
    'src/img/whatsapp.svg',
    'src/img/spotify.svg',
    'src/img/youtube.svg'
        ],
    textoRedes: ['instagram', 'twitter', 'linkedin',
     'gmail', 'facebook', 'whatsapp', 'spotify', 'youtube']
    }

var i = 0
var pontos = []
const montadorTabela = modalidades.redes.forEach(row => {
    let imgs = document.querySelectorAll('img')
    imgs[i].src = row
    i++
})

textInput.addEventListener('keypress', (event) => {
    const textValue = document.querySelector('input').value;
    const verificarInput = /[^A-Za-z]/.test(textValue)
    if (event.key === 'Enter' && textValue.length <= 50 && !verificarInput) {
        
        event.preventDefault();
        // console.log(textValue)
        // const palavrasRedes = modalidades.textoRedes.filter(palavra => palavra.includes(textValue))
        const palavraRedes = modalidades.textoRedes.filter(palavra => { 
            if(pontos.includes(palavra)) {
                textInput.value = ''
             } else if (palavra == textValue.toLowerCase()) {
                    labelPontos.innerText = `${pontos.length+1}`
                    pontos.push(palavra)
                    if(pontos.length == modalidades.textoRedes.length) {
                        alert('Boa você ganhou um biscoito!')
                    }
             } else {
                 textInput.value = ''
             } 
        })  
    }
})

