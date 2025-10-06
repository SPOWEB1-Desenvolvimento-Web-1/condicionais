/**
 * Exercício 1: Tarifas do Hotel Tecnoville (Foco: switch case) 
O Hotel de Tecnoville, vizinho ao armazém do robô R9, precisa de um sistema para calcular o 
valor da diária. Crie um programa que pergunta ao usuário o tipo de quarto desejado ("standard", 
"deluxe", "suite"). O sistema deve usar um switch case para definir o preço base: 
    - "standard": R$ 150,00 
    - "deluxe": R$ 250,00 
    - "suite": R$ 400,00 
Se o tipo de quarto for inválido, exiba uma mensagem de erro. Ao final, mostre o valor da diária.
 */

const tipoquarto = "suite";

switch(tipoquarto) {
    case "standard":
        console.log("Quarto Standard: R$ 150,00 por noite");
        break;
        case "deluxe":
        console.log("Quarto Deluxe: R$ 250,00 por noite");  
        break;
        case "suite":
        console.log("Quarto Suite: R$ 400,00 por noite");
        break;
        default:
        console.log("Tipo de quarto inválido");
        break;
}   
