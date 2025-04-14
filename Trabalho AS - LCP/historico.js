const inputPlaca = document.getElementById('placa');
const btnPesquisar = document.getElementById('pesquisar');
const tabelaResultados = document.getElementById('resultados');

btnPesquisar.addEventListener('click', () => {
    const placa = inputPlaca.value;

    
    const dadosInspecao = [
        { placa: 'ONR5400', data: '2023-11-25', recapagem: true, movimentacao: 'Rodízio' },
        { placa: 'ONR5400', data: '2023-12-10', recapagem: false, movimentacao: 'Sucateado' },
        { placa: 'ONR5400', data: '2023-12-10', recapagem: false, movimentacao: 'Estoque' },
        { placa: 'ONR5400', data: '2023-12-10', recapagem: false, movimentacao: 'Rodízio' },
     
    ];

 
    const resultados = dadosInspecao.filter(inspecao => inspecao.placa === placa);


    tabelaResultados.querySelector('tbody').innerHTML = '';

    resultados.forEach(inspecao => {
        const novaLinha = tabelaResultados.insertRow();
        const celulaPlaca = novaLinha.insertCell();
        const celulaData = novaLinha.insertCell();
        const celulaRecapagem = novaLinha.insertCell();
        const celulaMovimentacao = novaLinha.insertCell();

        celulaPlaca.textContent = inspecao.placa;
        celulaData.textContent = inspecao.data;
        celulaRecapagem.textContent = inspecao.recapagem ? 'Sim' : 'Não';
        celulaMovimentacao.textContent = inspecao.movimentacao;
    });
});