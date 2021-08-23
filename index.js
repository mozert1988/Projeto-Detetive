//Projeto 01 – Projeto Detetive
//Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As
//perguntas são:
//1. "Telefonou para a vítima?"
//2. "Esteve no local do crime?"
//3. "Mora perto da vítima?"
//4. "Devia para a vítima?"
//5. "Já trabalhou com a vítima?"
//O programa deve no final emitir uma classificação sobre a participação da
//pessoa no crime.
//Se a pessoa responder positivamente a 2 questões ela deve ser classificada
//como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso
//contrário, ele será classificado como "Inocente".

//Declaração de variáveis
let sim = 0;
let resposta;

//inicio do programa
console.log("Projeto Detetive!");

//Salvando as respostas
resposta = prompt("Telefonou para vítima?");
if(resposta == "sim"){
  sim++
}

resposta = prompt("Esteve no local do crime?");
if(resposta == "sim"){
  sim++
}

resposta = prompt("Mora perto da vítima?");
if(resposta == "sim"){
  sim++
}

resposta = prompt("Devia para vítima?");
if(resposta == "sim"){
  sim++
}

resposta = prompt("Já trabalhou para vítima?");
if(resposta == "sim"){
  sim++
}

//Resolvendo a qustão
//Comparando as respostas para calcular o resultado
if(sim == 2){
  console.log("Suspeito do crime!")
} else if(sim > 2 && sim < 5){
  console.log("Cúmplice do crime!")
} else if(sim == 5){
  console.log("Você é o assassino!")
} else {
  console.log("Você é inocente!")
}
//fim do programa