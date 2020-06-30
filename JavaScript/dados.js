let readline = require ("readline-sync");

cantDados = readline.questionInt ("Ingrese la cantidad de dados que desea tirar: ");
prob1 = 6**cantDados;

console.log ("La probabilidad de que salgan todos en 6 es: ", (1/prob1), " %.");
