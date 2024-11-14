// Função principal para validar CPF
function validaCpf(cpf) {
    // Remove caracteres não numéricos e cria um array
    const cpfArray = Array.from(cpf.replace(/\D+/g, ''));  

    if (cpfArray.length !== 11) {
        console.log('CPF inválido!');
        return;
    }

    try {
        const primeiroDigito = calculaDigitoVerificador(cpfArray, 10, 8);
        const segundoDigito = calculaDigitoVerificador(cpfArray, 11, 9);

        if (primeiroDigito === Number(cpfArray[9]) && segundoDigito === Number(cpfArray[10])) {
            console.log('CPF validado com sucesso!');
        } else {
            throw new Error('CPF inválido');
        }
    } catch (e) {
        console.error(e.message);
    }
}

// Função para calcular dígitos verificadores
function calculaDigitoVerificador(cpfArray, multiplicadorInicial, limite) {
    let soma = cpfArray.slice(0, limite + 1).reduce((acc, num, index) => {
        return acc + num * (multiplicadorInicial - index);
    }, 0);

    let digito = 11 - (soma % 11);
    return digito > 9 ? 0 : digito;
}

// Testes com CPFs
validaCpf('705.484.450-52');
validaCpf('070.987.720-03');