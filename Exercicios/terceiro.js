var soma = 0;
for(var i=2; i<=process.argv.length-1;i++){
    soma += Number(process.argv[i]);
}
console.log(`Soma = ${soma}`);