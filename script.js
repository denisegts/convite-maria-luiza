// 1. Mapeando os elementos do DOM que vamos manipular
const envelope = document.getElementById('envelope');
const musica = document.getElementById('musica');

// 2. Adicionando o Event Listener para escutar o clique do convidado
envelope.addEventListener('click', () => {

    //3. Executa o método para tocar a música de fundo
    musica.play().catch(error => {
        console.log("O navegador bloqueou a reprodução automática inicial:", error);
    })

    // 4. Adiciona a classe CSS aciona a animação de subida e sumiço do envelope
    envelope.classList.add('abrir');
})