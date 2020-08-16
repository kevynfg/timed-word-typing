var modalidades = 
    {
    redes: [
    'src/img/facebook.svg',
    'src/img/gmail.svg',
    'src/img/instagram.svg',
    'src/img/linkedin.svg',
    'src/img/twitter.svg'
        ]
    }

var i = 0

const montadorTabela = modalidades.redes.forEach(row => {
    let imgs = document.querySelectorAll('img');  
    imgs[i].src = row
    i++
})

