function enviarDados() {
    // Obter valores dos inputs
    const preco = document.getElementById('precoInput').value;
    const marca = document.getElementById('marcaInput').value;
    const tipo = document.getElementById('tipoInput').value;
    const quantidade = document.getElementById('quantidadeInput').value;

    // Verificar se todos os campos estão preenchidos
    if (!preco || !marca || !tipo || !quantidade) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Construir objeto com os dados
    const dados = {
        preco,
        marca,
        tipo,
        quantidade
    };

    // Enviar dados para a API usando Axios
    axios.post('http://localhost:3000/beer', dados)
        .then(response => {
            console.log('Dados enviados com sucesso!', response.data);
            // Aqui você pode realizar outras ações após o envio bem-sucedido
        })
        .catch(error => {
            console.error('Erro ao enviar dados:', error);
        });
    }