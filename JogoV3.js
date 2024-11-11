const readline = require("readline-sync");

let secreto = ["viagem","Futebol","computador","natureza","musica"];
let modelos = [
['Destino', 'Aeroporto', 'Passagem', 'Bagagem', 'Turismo', 'Hoteis', 'Praia', 'Montanha', 'Cidade', 'Pais', 'Cultura', 'Monumento', 'Aventura', 'Guia', 'Excursao', 'Carro', 'Navio', 'Trem', 'Estacao', 'Roteiro'],

['Gol', 'Jogador', 'Partida', 'Estadio', 'Chuteira', 'Torcida', 'Treinador', 'Arbitro', 'Campeonato', 'Equipe', 'Copa', 'Defesa', 'Ataque', 'Finta', 'Penalti', 'Cartao', 'Drible', 'Escanteio', 'Cancha','Goleiro'],

['Teclado', 'Mouse', 'Tela', 'CPU', 'Disco', 'Memoria', 'Software', 'Hardware', 'Monitor', 'Sistema operacional', 'Programa', 'Internet', 'Conexao', 'WiFi', 'Bluetooth', 'USB', 'Porta', 'Periferico', 'Mousepad', 'Tecnologia'],

['Floresta', 'Montanha', 'Rio', 'Mar', 'Oceano', 'Praia', 'Cachoeira', 'Planicie', 'Deserto', 'Selva', 'Animais', 'Plantas', 'Ceu', 'Estrelas', 'Sol', 'Lua', 'Fauna', 'Arvore', 'Rochas', 'Ecossistema'],

['Melodia', 'Ritmo', 'Cancao', 'Instrumento', 'Cantor', 'Banda', 'Concerto', 'Palco', 'Nota', 'Composicao', 'Letra', 'Dança', 'Jazz', 'Rock', 'Classico', 'Pop', 'Folk', 'Blues', 'Eletronica', 'Harmonia']
]
let escolhatema = ''
//5 classes e 20 palavras
console.log("###############################");
console.log("         JOGO DA FORCA            ");
console.log("###############################");
console.log("\nBem-vindo ao jogo da forca!\n\n\nO Bob morrera se voce errar 6 vezes\n");
console.log("\n------------------------------------------\n");

const comprimento = 0;
let receba = true, contador_bob = 0, letra = "", contador_erro = false, verifica = "", contagem = 0;
let contagem_bob = 0, encerrar = false, tema = true, palavrasecreta = '', mudartema_talvez = 3, rapido = -1;
let sorteio =0, tentativas = [], modelosorteio = '', mudartema ='', colocarpalavra = '', vouficarmaluco = true

let descoberta = '';

do{
    let sairdaqui = true
    while(tema != false){
        sorteio = Math.floor(Math.random()* secreto.length);
        modelosorteio = modelos[sorteio];
        numeropalavra = Math.floor(Math.random()* modelosorteio.length)
        if(modelos[sorteio].length === 1){
            palavrasecreta = modelos[sorteio]
        }else{
            palavrasecreta = modelos[sorteio][numeropalavra];
            descoberta = '_'.repeat(palavrasecreta.length).split('');
            mudartema_talvez = 3
            tema = false;
        }
    }
    receba = true
    console.log('TEMA:',secreto[sorteio].toUpperCase());
    
    switch (contador_bob){
        case 0:
            console.log("  ____\n |    |\n |\n |\n |\n |\n");
            break;
        case 1:
            console.log("  ____\n |    |\n |    O\n |\n |\n |\n");
            break;
        case 2:
            console.log("  ____\n |    |\n |    O\n |    |\n |\n |\n");
            break;
        case 3:
            console.log("  ____\n |    |\n |    O\n |   /|\n |\n |\n");
            break;
        case 4:
            console.log("  ____\n |    |\n |    O\n |   /|\\\n |\n |\n");
            break;
        case 5:
            console.log("  ____\n |    |\n |    O\n |   /|\\\n |   /\n |\n");
            break;
        case 6:
            console.log("  ____\n |    |\n |    O\n |   /|\\\n |   / \\\n |\n");
            break;
    }
    console.log(descoberta.join(" ").toUpperCase( ));
    console.log('Palavras tentadas:',tentativas.join(' ').toUpperCase())
    while(receba == true){
        let contador_erro = 0
        letra = readline.question('Tente uma letra: ');
        if(letra.length != 1){
            console.log("So e permitido uma letra!");
        }else if(!isNaN(letra)){
            console.log("So e permitio letra e sem espaco!");
        }else if(verifica.toLowerCase() === letra.toLowerCase()){
            console.log('Essa letra ja foi');
        }else{
            for(let z = 0; z < palavrasecreta.length;z++){
                if(descoberta[z].toLowerCase() === letra.toLowerCase()){
                    console.log('Essa letra ja foi');
                    contador_erro++
                    break;
                }
           }if(contador_erro === 0){
            receba = false
            tentativas.push(letra);
        }
        }
    }
    console.clear()
    for(let x = 0; x<palavrasecreta.length;x++){
        if(palavrasecreta.toLowerCase().charAt(x) === letra.toLowerCase()){
            descoberta[x] = letra;
            contagem++
        }
    }
    if(contagem == contagem_bob && verifica != letra){
        contador_bob++
    }
    contagem_bob = contagem;
    verifica = letra;
    if(contador_bob === 6){
        console.clear();
        console.log("  ____\n |    |\n |    O\n |   /|\\\n |   / \\\n |\n");
        console.log(descoberta.join(" ").toLowerCase(),'\n');   
        console.log("\nVoce matou o Bob!");
        console.log('A palavra era:',palavrasecreta.toLowerCase(),'\n')
        console.log('\n------------------------------------\n')  
    }else if(contagem >= palavrasecreta.length){
        console.log('\n------------------------------------\n')
        console.log('A palavra era:',descoberta.join(" ").toLowerCase(),'\n');   
        console.log("Parabens, voce nao deixou o bob morrer!\n");    
    }
    if(contagem >=palavrasecreta.length || contador_bob === 6){
        let pergunta_ence = readline.question('Deseja jogar novamente?: ');
        if(pergunta_ence.toLowerCase() === 'sim'){
            rapido = -1
            contagem = 0;
            contador_bob = 0;
            tema = true;
            verifica = '';
            tentativas = []
            console.clear();
            while(mudartema_talvez < 0 || mudartema_talvez > 2){
                mudartema_talvez = parseInt(readline.question('Voce dejesa colocar um tema novo?(Digite 1 para sim ou 2 para nao!)\n:'));
                if(mudartema_talvez < 0 || mudartema_talvez > 2){
                    console.log('Valor invalido!')
                }
            }
            while(sairdaqui == true){
                if(mudartema_talvez === 1){
                    let nao_quanto_mais_contagem = 0
                    mudartema = readline.question('Entao digite o nome do seu novo tema: ');
                    for(let g =0; g < secreto.length;g++){
                        if(secreto[g].toLowerCase() === mudartema.toLowerCase()){
                            console.log('Esse tema ja existe!');
                            console.log('Tente colocar outro tema.');
                            nao_quanto_mais_contagem++
                            break;
                        }
                    }
                    if(nao_quanto_mais_contagem === 0 ){
                        console.clear();
                        secreto.push(mudartema);
                        colocarpalavra = readline.question('Como voce adicinou um tema novo voce tera que colocar uma palavra nele: ');
                        modelos.push([colocarpalavra]);
                        sairdaqui = false
                    }
        
                }else if(mudartema_talvez === 2){
                    mudartema = readline.question('Voce dejesa adicionar alguma palavra em um tema ja existente?(1 para sim ou 2 para nao)');
                    if(mudartema == 1){
                        console.clear()
                        for( let k = 0; k < secreto.length;k++){
                            console.log(k+1,'-',secreto[k]);
                        }
                        console.log('Esses sao os temas ja existentes, apenas digite o numero do tema q voce deseja!');
                        while(rapido < 1 || rapido > secreto.length){
                            rapido = parseInt(readline.question(':'));
                            if(rapido < 1 || rapido > secreto.length){
                                console.log('Valor invalido!');
                                console.log('Digite novamente');
                            }
                        }
                        for(let h = 0; h < secreto.length;h++){
                            if(rapido > secreto.length){
                                console.log('Valor invalido!')
                                break;
                            }
                            else if(h === rapido - 1){
                                colocarpalavra = readline.question('Digite a palavra que voce deseja colocar: ');
                                modelos[h].push(colocarpalavra);
                                sairdaqui = false;
                            }
                        }
                    }
                    else if(mudartema == 2){
                        sairdaqui = false
                    }
                }else{
                    console.log('Digite um valor valido!');
                    mudartema_talvez = parseInt(readline.question('Voce dejesa colocar um tema novo?(Digite 1 para sim ou 2 para nao!)'));
                }

            }
            
        }
    else if(pergunta_ence.toLowerCase() === 'nao' || pergunta_ence.toLowerCase() === 'não'){
        encerrar = true;
    }
    }
    
}while(encerrar != true)

