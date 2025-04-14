const botaoConfirmar = document.querySelector('.bt');
const inputPlaca = document.querySelector('.inptUser');
const tabelaBody = document.querySelector('tbody');

botaoConfirmar.addEventListener('click', () => {
    const placa = inputPlaca.value;

    if (placa === 'ONR5400') {
        
        tabelaBody.innerHTML = '';

        
        const pneus = {
            ladoA: ['1045', '1218', '1378', '1001'],
            ladoB: ['2004', '8776', '1023', '1667']
        };

       
        for (const lado in pneus) {
            const newRow = tabelaBody.insertRow();
            pneus[lado].forEach(pneu => {
                const newCell = newRow.insertCell();
                newCell.textContent = `Pneu ID ${pneu}`;
            });
        }
    } else {
        alert('Placa inválida');
    }
});