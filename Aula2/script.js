// let a = 5, b = 5;

// console.log(a == b);   // false (igualdade)
// console.log(a === b);  // false (igualdade estrita)
// console.log(a != b);   // true (diferente)
// console.log(a !== b);  // true (diferente estrito)
// console.log(a < b);    // true (menor que)
// console.log(a > b);    // false (maior que)
// console.log(a <= b);   // true (menor ou igual)
// console.log(a >= b);   // false (maior ou igual)

// let idade = 25;
// let temCarteira = false;

// // AND (&&) - ambas condições devem ser verdadeiras
// if (idade >= 18 && temCarteira) {
//   console.log("Pode dirigir");
// }

// // OR (||) - pelo menos uma condição deve ser verdadeira
// if (idade < 18 || !temCarteira) {
//   console.log("Não pode dirigir");
// }

// // NOT (!) - inverte o valor booleano
// if (!temCarteira) {
//   console.log("Precisa de carteira");
// }

// let tarefaConcluida = false;

// if (tarefaConcluida) {
//     console.log("A tarefa está concluída!");
// } else {
//     console.log("A tarefa não está concluída!");
// }

// let prioridade = 2; // 1: baixa, 2: média, 3: alta

// if (prioridade === 3) {
//     console.log("Prioridade alta")
// } else if (prioridade === 2) {
//     console.log("Prioridade média")
// } else if (prioridade === 1) {
//     console.log("Prioridade baixa")
// } else if (prioridade === 4) {
//     console.log("Prioridade Altíssima")
// } else {
//     console.log("Prioridade desconhecida")
// } 

// let diaSemana = new Date().getDay()

// console.log(diaSemana)

// switch (diaSemana) {
//     case 0:
//         console.log("Domingo")
//         break;
//     case 1:
//         console.log("Segunda")
//         break;
//     case 2:
//         console.log("Terça")
//         break;
//     case 3:
//         console.log("Quarta")
//         break;
//     case 4:
//         console.log("Quinta")
//         break;
//     case 5:
//         console.log("Sexta")
//         break;
//     case 6:
//         console.log("Sábado")
//         break;

//     default:
//         console.log("Dia inválido")
//         break;
// }

// for (let i = 0;i < 5;i++){
//     console.log("Contagem: "+ i)
// }

// let i = 0

// while (i < 5) {
//     console.log("Contagem: "+ i)
//     i++
// }

// let numero = 5;

// do {
//   console.log("Número é:", numero);
//   numero--;
// } while (numero >= 0);