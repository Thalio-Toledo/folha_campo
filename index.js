
class CampoSemana{
    constructor(dia, horario, local, dirigente){
        this.dia = dia,
        this.horario = horario,
        this.local = local,
        this.dirigente = dirigente
    }
}


var campoSemanal = [
    new CampoSemana('Terça-feira', '09:00', 'Casa do Benigno', 'Benigno Conceição'),
    new CampoSemana('Quarta-Feira', '16:00', 'Salão do Reino', 'Jonathan Robles'),
    new CampoSemana('Quinta-feira', '16:00', 'Salão do Reino', 'Murilo Conceição'),
    new CampoSemana('Sexta-feira', '09:00', 'Salão do Reino', 'William'),
]

var tabelaProgramacaoSemanal = document.getElementById('programacao-semanal-table')

for (let index = 0; index < campoSemanal.length ; index++) {

    var linha = document.createElement('tr')
    
    var valores = Object.values(campoSemanal[index])

    for (let index = 0; index < valores.length; index++) {
        var coluna = document.createElement('td')
        coluna.innerText = valores[index]
        linha.appendChild(coluna)
    }

    tabelaProgramacaoSemanal.appendChild(linha)
}
