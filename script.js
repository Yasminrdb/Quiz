const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o maior oceano do mundo",
        alternativas: [ 
            {
                texto: "Atlântico",
                afirmacao: "Que pena, não foi dessa vez que você acertou",
            },
            {
                texto: "Pacifíco",
                afirmacao: "Muito bem, você acertou a resposta",
            },
        {
            texto: "Índico",
            afirmacao: "Que pena, não foi dessa vez que você acertou",
        }
            
     ]
    },
    {
        enunciado: "Qual é o maior animal terrestre do mundo?",
        alternativas: [
            {
                texto: "Girafa",
                afirmacao: "Que pena, não foi dessa vez que você acertou", 
            },
            {
            texto: "Urso-polar",
            afirmacao: "Que pena, não foi dessa vez que você acertou",
            },
            {
                texto: "Elefante-Africano",
                afirmacao: "Muito bem, você acertou a resposta",
            }
            
        ]
    },
    {
        enunciado: "Qual é o maior animal aquático do mundo",
        alternativas: [
            {
                texto: "Orca",
                afirmacao: "Que pena, não foi dessa vez que você acertou",
            },
                
                {
                    texto: "Tubarão-branco", 
                    afirmacao: "Que pena, não foi dessa vez que você acertou",
                },

                    {
                        texto: "Baleia-azul",
                        afirmaçao: "Muito bem, você acertou a resposta",
                    }
                    
        ]
    },
{
    enunciado: "Por qual oceano o Brasil é banhado?",
    alternativas: [ {

        texto: "Atlântico",
        afirmacao: "Muito bem, você acertou a resposta",
    },
        {
            texto: "Ártico",
            afirmacao: "Que pena, não foi dessa vez que você acertou",
        },
        {
            texto: "Antártico",
            afirmacao: "Que pena, não foi dessa vez que você acertou",
        }
    ]
},
{
    enunciado: "Qual é a maior floresta tropical do mundo",
    alternativas: [ {
        texto:"Floresta Taiga",
        afirmacao: "Que pena, não foi dessa vez que você acertou",
    },
    {
        texto: "Floresta Daintree",
        afirmacao: "Que pena, não foi dessa vez que você acertou",
    },
    {
        texto: "Floresta Amazônica",
        afirmacao: "Muito bem, você acertou a resposta",
    }

    ]
},
]

 
     
 let atual = 0;
 let perguntaAtual;

 function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
 }

 function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
    }
 }

 mostraPergunta();