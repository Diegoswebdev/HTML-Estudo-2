/*A PREFEITURA DE UMA CIDADE FEZ UMA PSQUISA ENTRE SEUS HABITANTES, COLETANDO DADOS SOVRE O SALARIO E NUEROS DE FILHOS. A PREFEITURA DESEJA SABER:

- MÉDIA DO SALÁRIO DA POPULAÇÃO;

- MÉDIA DO NÚMERO DE FILHOS;

- MEIOR SALARIO;

- O FINAL DA LEITURA DE DADOS SE DARA COM A ENTREDA DE UMA SALARIOS NEGATIVO. 

- FAÇA ISSO USANDO UMA FUNÇÃO!

*/

const pessoas = [
    {
        NumeroDeFilhos: 2,
        salario: 2000
    },
    {
        NumeroDeFilhos: 5,
        salario: 3000
    },
    {
        NumeroDeFilhos: 0,
        salario: 2500
    },
    {
        NumeroDeFilhos: 2,
        salario: 1000
    },
    {
        NumeroDeFilhos: 3,
        salario: 2300
    },
    {
        NumeroDeFilhos: 1,
        salario: 200
    },
    {
        NumeroDeFilhos: 0,
        salario: -2000
    },
]

function findAverageAndHighestSalary(pessoasInformation) {
    let i = 0
    let averageChildren = 0;
    let averageSalary = 0;
    let highestSalary = 0;

    while (pessoasInformation[i].salario > 0) {
        averageSalary += pessoasInformation[i].salario;
        averageChildren += pessoasInformation[i].NumeroDeFilhos;
        pessoasInformation[i].salario > highestSalary ? highestSalary = pessoas[i].salario : highestSalary = highestSalary;
        i++
    }

    console.log(`Média de Salário R$${(averageSalary / i).toFixed(0)}`);
    console.log(`Média de Salário R$${(averageChildren / i).toFixed(0)}`);
    console.log(`Média de Salário R$${highestSalary}`);

}

findAverageAndHighestSalary(pessoas)