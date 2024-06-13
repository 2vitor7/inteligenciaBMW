
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual você prefere?",
        alternativas: [
            {
                texto: "BMW Serie 1 2024",
                afirmacao: "Boa."
            },
            {
                texto: "BMW Serie 1 128ti 2024?",
                afirmacao: "Aí sim."
            }
        ]
    },
    {
        enunciado: "Qual e melhor?",
        alternativas: [
            {
                texto: "BMW Série 3 Sedã",
                afirmacao: "boa"
            },
            {
                texto: "BMW M340i xDrive",
                afirmacao: "Simmm "
            }
        ]
    },
    {
        enunciado: "Qual mais lindo?",
        alternativas: [
            {
                texto: " BMW SERIE 4 COUPÉ ?",
                afirmacao: "boa."
            },
            {
                texto: "BMW SERIE 4 COUPÉ M",
                afirmacao: "Muito."
            }
        ]
    },
    {
        enunciado: "Qual e melhor?",
        alternativas: [
            {
                texto: "BMW Serie 4 Gran Coupé",
                afirmacao: "bom."
            },
            {
                texto: "BMW M440i xDrive Gran Coupé",
                afirmacao: "Claro né."
            }
        ]
    },
    {
        enunciado: "Mais lindo?",
        alternativas: [
            {
                texto: "BMW SERIE 4 CONVERTIBLE",
                afirmacao: "Bonito."
            },
            {
                texto: "BMW M4 Convertible.",
                afirmacao: "Lindo."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();