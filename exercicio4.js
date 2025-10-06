/**
 Desafio Final: A Poção da Jovem Alquimista (A "Historinha") 
Em uma clareira iluminada pela lua, a jovem alquimista Elara precisa preparar uma poção da 
vitalidade. O sucesso da poção depende da combinação exata de dois ingredientes e da fase da 
lua. 
Crie um programa que simule a preparação da poção. Ele deve perguntar à Elara (ao usuário): 
1. O primeiro ingrediente. 
2. O segundo ingrediente. 
3. A fase da lua ("nova", "crescente" ou "cheia"). 
A lógica da poção é a seguinte: 
    - A combinação de "raiz de dragão" com "orvalho da manhã" cria a poção com sucesso. 
    - A combinação de "pó de fada" com "lágrima de fênix" também cria a poção com sucesso. 
    - Qualquer outra combinação resulta em falha. 
Além disso, a fase da lua afeta a potência da poção: 
    - Um switch case deve ser usado para a fase da lua. Se for "cheia", a potência é dobrada. 
    - Se for "crescente", a potência é normal. Se for "nova", a potência é reduzida pela metade. 
O programa deve exibir um dos seguintes resultados: 
    - Se a combinação falhar: "A mistura explode em uma fumaça colorida! A poção falhou." 
    - Se a combinação for bem-sucedida: "Sucesso! Você criou uma Poção da Vitalidade com 
potência [metade/normal/dobrada]!"
 */

var pingr = "orvalho da manhã";
var singr = "orvalho da manhã";
var faselua = "lua";

if (pingr=="raiz de dragão" && singr=="orvalho da manhã"){
    console.log("Poção criada com sucesso")
} else if (pingr=="pó de fada" && faselua=="lágrima de fênix"){  
    console.log("Poção criada com sucesso")
 } else console.log("A mistura explode em uma fumaça colorida! A poção falhou.")

switch(faselua){
    case "cheia":
        console.log("A potência é dobrada \n Sucesso! Você criou uma Poção da Vitalidade com potência dobrada!");
        break;
        case "crescente":
        console.log("A potência é normal \n Sucesso! Você criou uma Poção da Vitalidade com potência normal!");  
        break;  
        case "nova":   
        console.log("A potência é reduzida pela metade \n Sucesso! Você criou uma Poção da Vitalidade com potência reduzida pela metade!");
        break;
        default:
        console.log("Fase lunar inválida");
        break;
}