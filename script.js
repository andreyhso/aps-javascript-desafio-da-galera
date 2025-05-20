// Mensagem de boas-vindas usando alert e console.log
alert("Bem-vindo ao DESAFIO DO FUTEBOL!");
console.log("Prepare-se para mostrar que você é um camisa 10!");

// Entrada de dados via prompt()
let nome = prompt("Qual é o seu nome, craque?");
let time = prompt("Qual é o seu time do coração?");

// Uso de funções de string para formatar saída
console.log("Show de bola, " + nome.toUpperCase() + "!");
console.log("Torcendo para o " + time.toLowerCase() + ", hein? Vamos ver se manda bem no quiz...");

// Inicialização da pontuação do jogador
let pontuacao = 0;

// Vetores com perguntas e respostas corretas
let perguntas = [
    "1. Qual seleção venceu a Copa do Mundo de 2022? (a) Argentina (b) França (c) Brasil",
    "2. Quem é o maior artilheiro da história do futebol? (a) Pelé (b) Cristiano Ronaldo (c) Messi",
    "3. Quantos jogadores tem um time em campo? (a) 9 (b) 10 (c) 11",
    "4. Onde fica localizado o estádio Jornalista Mario Filho? (a) Japeri (b) Maracanã (c) Seropédica",
    "5. Qual país é conhecido como o berço do futebol? (a) Alemanha (b) Inglaterra (c) Itália"
];

let respostasCorretas = ["a", "a", "c", "b", "b"];

// Função para verificar se a resposta está correta
function verificarResposta(respostaJogador, respostaCorreta) {
    // Usa .toLowerCase() para evitar erro por maiúsculas/minúsculas
    if (respostaJogador.toLowerCase() === respostaCorreta) {
        console.log("Mandou bem! Resposta certa.");
        return 1; // adiciona ponto
    } else {
        console.log("Errou, craque! A certa era: " + respostaCorreta.toUpperCase());
        return 0; // não soma ponto
    }
}

// Loop que percorre todas as perguntas
for (let i = 0; i < perguntas.length; i++) {
    let resposta = prompt(perguntas[i]); // Coleta resposta do jogador
    pontuacao += verificarResposta(resposta, respostasCorretas[i]); // Soma pontos
}

// Função que determina o “nível” do jogador com base na pontuação
function avaliarCraque(pontuacao, nome) {
    let nivel;

    // Estrutura switch para decidir o título do jogador
    switch (pontuacao) {
        case 5:
            nivel = "Lenda do Futebol";
            break;
        case 3:
        case 4:
            nivel = "Estrela do Brasileirão";
            break;
        case 1:
        case 2:
            nivel = "Promessa da Varzea";
            break;
        default:
            nivel = "Mito da Resenha (sem pontos, mas com moral)";
    }

    // Mostra resultado final com alert e console.log
    alert(`Fim de jogo, ${nome}! Você fez ${pontuacao} ponto(s).`);
    alert(`Seu nível: ${nivel}`);
    console.log(`Parabéns, ${nome}! Você é um(a) verdadeiro(a) ${nivel}!`);
}

// Chamada da função de avaliação
avaliarCraque(pontuacao, nome);

// Mensagem final de encerramento
console.log("Obrigado por jogar o DESAFIO DO FUTEBOL! Até a próxima pelada!");
