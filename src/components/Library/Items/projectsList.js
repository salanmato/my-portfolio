
const projectsList = [
    {
        title: 'RandoMovie',
        status: 'Em Andamento',
        image: `./images/RandoMovie-image.jpg`,
        description: 'Aplicativo que te ajuda a escolher um filme.\nVocê decide o gênero e o streaming, e o filme é sorteado para você.',
        links: {
            site: '',
            github: 'https://github.com/salanmato/randomovie'
        },
        tags: ["React Native", 'JavaScript']
    },
    {
        title: '5movies',
        status: 'Concluído',
        image: '',
        description: 'Aplicativo que te ajuda a escolher um filme.\nVocê escolhe um  ator/diretor/produtor ou filme, e ele te retorna 5 filme relacionados a sua busca.',
        links: {
            site: 'https://5movies.vercel.app/',
            github: 'https://github.com/salanmato/5movies'
        },
        tags: ['React.JS', 'JavaScript', 'HTML', 'CSS', 'UI']
    },
    {
        title: 'researchbc',
        status: 'Concluído',
        image: '',
        description: 'Aplicativo desenvolvido como trabalho para a disciplina Data Center.\n Nosso objetivo era criar algo que alimentasse e consumisse um banco de dados no servidor.\n Utilizamos JavaScript, HTML e CSS para construir uma página contendo um formulário, um gráfico para visualização rápida das respostas e uma tabela com todas as respostas. Para comunicação entre a página e o banco de dados MySQL, usamos Node.js + Express.',
        links: {
            site: 'https://researchbc.vercel.app/',
            github: 'https://github.com/salanmato/researchbc'
        },
        tags: ['JavaScript', 'HTML', 'CSS', 'UI', 'MySQL']
    }
]

export {projectsList}