/**
 * Exercício 2: Custo de Frete Regional (Foco: if/else if/else) 
Uma loja online precisa calcular o valor do frete com base na região de entrega. Crie um 
programa que pergunta ao usuário para qual região do Brasil o produto será enviado ("Sul", 
"Sudeste", "Centro-Oeste", "Nordeste", "Norte"). O programa deve exibir o valor do frete 
correspondente: 
    - "Sul": R$ 25,00 
    - "Sudeste": R$ 20,00 
    - "Centro-Oeste": R$ 30,00 
    - "Nordeste": R$ 45,00 
    - "Norte": R$ 50,00 
Se a região não for nenhuma das listadas, informe que a entrega não está disponível para essa 
localidade.
 */

var regiao="sao paulo"
console.log ("Qual região do Brasil o produto será enviado?")
if (regiao=="norte"){
    console.log ("O frete será R$50,00")    
} else if (regiao=="nordeste"){
    console.log ("O frete será R$45,00")    
} else if (regiao=="centro-oeste"){
    console.log ("O frete será R$30,00")    
}  else  if (regiao=="sudeste"){
    console.log ("O frete será R$20,00")    
}  else if (regiao=="sul"){
    console.log ("O frete será R$25,00")    
}   else {
    console.log ("A entrega não está disponível para essa localidade!")
}   
 
