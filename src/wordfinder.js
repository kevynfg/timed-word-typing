var modalidades = 
    {
        cores: ['azul', 'vermelho', 'amarelo', 'branco', 'rosa', 'branco', 'rosa', 'branco', 'rosa', 'alou']
    }


const montadorTabela =  modalidades.cores.forEach(row => {
    //const tablerow = document.querySelectorAll('tr');
    let novosDados = document.querySelectorAll('td');
    for(let i = 0; i < novosDados.length; i++){
        novosDados[i].innerHTML = row
    }
});

console.log(montadorTabela)