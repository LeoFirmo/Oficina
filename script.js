const numClientesAtendidos = document.querySelector('.num-clientes-atendidos');
const numServicos = document.querySelector('.num-servicos');

// Função para iniciar o contador ao ser verificado
function iniciarContador(elemento, valorFinal) {
    let i = 0;
    let intervalo = setInterval(() => {
        if (i < valorFinal) {
            elemento.textContent = ++i;
        } else {
            clearInterval(intervalo);
        }
    }, 30);
}
iniciarContador(numServicos, 35);


// verifica visibilidade Atendimentos
function verificarVisibilidade() {
    const rect = document.getElementById('atendimentos').getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        iniciarContador(numClientesAtendidos, 144);
    } else {
        setTimeout(verificarVisibilidade, 50);
    }
}
verificarVisibilidade();




// Header scroll
const header = document.querySelector('header');
let scrollPrevio = 0; // Variável para guardar o scroll anterior

window.addEventListener('scroll', () => {
    const scrollAtual = window.scrollY; // Pega o scroll atual

    if (scrollAtual < scrollPrevio) { // Verifica se o scroll diminuiu (rolou para cima)
        header.classList.add('show'); // Adiciona a classe "show" ao header
    } else if (scrollAtual > scrollPrevio && scrollAtual > 0) { // Verifica se o scroll aumentou (rolou para baixo) e é maior que 0
        header.classList.remove('show'); // Remove a classe "show" do header
    }

    scrollPrevio = scrollAtual; // Atualiza o scroll anterior com o valor atual
});


// MenuToogle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open'); // Adiciona ou remove a classe 'open'
    nav.classList.toggle('open-nav'); // Adiciona ou remove a classe 'open'
}); 