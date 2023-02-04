/*Para começar nosso projeto da escola, vamos criar as três entidades que a constroem:

* Cursos - temos três cursos disponíveis: HTML e CSS, JavaScript, e APIs REST;
* Turmas;
* Estudantes;
Crie um array de turmas, um array de estudantes e outro de cursos. Estes arrays devem conter apenas os nomes dos cursos, turmas e estudantes.*/


/*const cursos = ["HTML e CSS", "JavaScript", "APIs REST"]*/

/*const turmas = ["HC1", "JS1", "JS2", "REST1", "REST2"]*/

/*const nomes = ["Carlos", "Ingrid", "Ísis", "Henrique", "Danyel"]*/

//Turma

const turmas = [
    {
        turma: "Hipátia",
        curso: "JavaScript,",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numeroDeAlunos: "150",
        periodo: "noturno",
        concluida: false,
    },
    {
        turma: "Sibyla",
        curso: "JavaScript,",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numeroDeAlunos: "200",
        periodo: "integral",
        concluida: false,
    },
    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numeroDeAlunos: "180",
        periodo: "integral",
        concluida: "não",
    },
    {
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numeroDeAlunos: "200",
        periodo: "noturno",
        concluida: "sim",
    },
    {
        turma: "Clarke",
        curso: "HTML e CSS",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numeroDeAlunos: "100",
        periodo: "integral",
        concluida: "sim",
    },
    {
        turma: "Elion",
        curso: "APIsRest",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numeroDeAlunos: "200",
        periodo: "noturno",
        concluida: "sim",
    },
    {
        turma: "Burnell",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numeroDeAlunos: "90",
        periodo: "integral",
        concluida: "não",
    },

];

const cursos = [

    {
        curso: "HTML e CSS",
        descricao: "Aprenda HTML e CSS do básico ao avançado!",
        duracao: "1 mês",
        valor: "500",
    },
    {
        curso: "JavaScript",
        descricao: "Aprenda JavaScript do básico ao avançado!",
        duracao: "2 meses",
        valor: "900",
    },
    {
        curso: "APIs REST",
        descricao: "Aprenda APIs REST do básico ao avançado!",
        duracao: "6 meses",
        valor: "2000",
    }
];
const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: 900,
        nParcelas: 9,
        desconto: false,
        parcelas: 100,

    },
    {
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: 2000,
        nParcelas: 4,
        desconto: false,
        parcelas: 500,

    },
    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: 500,
        nParcelas: 0,
        desconto: true,
        parcelas: 0,

    }

]

const parcelarCurso = (carrinhoCursos, parcelas) => {

    let valorTotal = 0
    let valorParcela = 0
    let desconto = 0

    switch (carrinhoCursos.length) {

        case 3:
            desconto = 0.15
            break;
        case 2:
            desconto = 0.10
            break;
        default:
            desconto = 0
    }
    for (let valor of carrinhoCursos) {

        valorTotal = valorTotal + valor

    }
 
                                                                                                    if (parcelas <= 2) {
  
      n     valorTotal = cursos[0].valor - (cursos[0].valor * 0.2)
        valorParcela = valorTotal / parcelas

        console.log(`O curso ${cursos[0].curso} ficou no valor total de R$ ${valorTotal}, em ${parcelas} x de  ${valorParcela} reais. Foi concedido desconto de 20%`)

    } else {

        valorTotal = cursos[0].valor
        valorParcela = valorTotal / parcelas

        console.log(`O curso ${cursos[0].curso} ficou no valor de R$ ${valorTotal}. Em ${parcelas} x de ${valorParcela} reais.`)
    }
}
parcelarCurso(2)

//para percorrer array usar for of ou for in
const buscarCurso = (nomeCurso) => {

    for (cadaCurso of cursos) {
        if (cadaCurso === nomeCurso) {
            return cadaCurso
        }

    }
}

const buscarTurma = (nomeTurma) => {
    for (cadaTurso of turmas) {
        if (cadaTurma.turma === nomeTurma) {
            return cadaTurma
        }
    }
}
//cadaCurso é equivalente a cada objeto
const buscarEstudante = (nomeEstudante) => {
    for (cadaEstudante of estudantes) {
        if (cadaEstudante.estudante === nomeEstudante) {
            return cadaEstudante
        }

    }
}

const matricular = (nome, curso, turma, numParcela) => {

    let valorCurso = buscarCurso(curso)
    let valorTotal = 0
    let valorPorParcela = 0
    let desconto = false

    if (numParcela > 0 && numParcela <= 2) {

        desconto = true
        valorTotal = valorCurso.valor - (valorCurso.valor * 0.2)
        valorPorParcela = valorTotal / numParcela

    }

    const novoAluno = {

        estudante: nome,
        turma: turma,
        curso: curso,
        valor: valorCurso.valor,
        nParcelas: numParcela,
        desconto: desconto,
        parcela: valorPorParcela,


    }
    estudante.push(novoAluno)

    console.log(estudantes)

    console(`Aluno Matriculado \n Nome:${nome} \n Turma:${turma}`)
}
matricular("Carlos", "JavaScript", "Hipátia", 2)