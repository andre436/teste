// Seleciona os elementos
const heart = document.getElementById('heart');
const progressDisplay = document.getElementById('progress');
const message = document.getElementById('message');

// Define variáveis de progresso e tamanho
let progress = 0;
let heartScale = 1;

// Função de clique para aumentar o coração e verificar a progressão
heart.addEventListener('click', () => {
    if (progress < 100) {
        progress += 10;  // Aumenta o progresso em 10%
        heartScale += 0.1;  // Aumenta a escala do coração em 10%
        
        // Atualiza o estilo e o texto de progresso
        heart.style.transform = `scale(${heartScale}) rotate(45deg)`;
        progressDisplay.innerText = progress + '%';
    }

    // Quando o progresso atinge 100%, adiciona a animação de explosão
    if (progress === 100) {
        heart.classList.add('explode');
        
        // Aguarda o fim da animação para exibir a mensagem final
        setTimeout(() => {
            heart.style.display = 'none';
            message.classList.remove('hidden');  // Exibe a mensagem
        }, 600);
    }
});
