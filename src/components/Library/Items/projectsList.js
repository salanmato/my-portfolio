
const projectsList = [
    {
        title: 'Meu Portfólio',
        slug: 'meu-portfolio',
        status: 'Em Andamento',
        description: 'O portfólio que você está vendo :D',
        links: {
            site: 'https://salanmato.vercel.app/',
            github: 'https://github.com/salanmato/myportfolio'
        },
        tags: ["React JavaScript", 'JavaScript', 'HTML', 'CSS']
    },
    {
        title: 'RandoMovie',
        slug: 'randomovie',
        status: 'Em Andamento',
        image: 'randomovie',
        description: 'Aplicativo que te ajuda a escolher um filme.\nVocê decide o gênero e o streaming, e o filme é sugerido para você.',
        links: {
            site: '',
            github: 'https://github.com/salanmato/randomovie'
        },
        tags: ["React Native", 'JavaScript']
    },
    {
        title: '5movies',
        slug: '5movies',
        status: 'Concluído',
        image: '5movies',
        description: 'Aplicativo que te ajuda a escolher um filme.\nVocê escolhe um  ator/diretor/produtor ou filme, e ele te retorna 5 filmes relacionados a sua busca.',
        links: {
            site: 'https://5movies.vercel.app/',
            github: 'https://github.com/salanmato/5movies'
        },
        tags: ['React.JS', 'JavaScript', 'HTML', 'CSS', 'UI']
    },
    {
        title: 'researchbc',
        slug: 'researchbc',
        status: 'Concluído',
        image: 'researchbc',
        description: 'Aplicativo desenvolvido como trabalho para a disciplina Data Center.\n A proposta era criar algo que alimentasse e consumisse um banco de dados no servidor.\n Utilizamos JavaScript, HTML e CSS para construir uma página contendo um formulário, um gráfico para visualização rápida das respostas e uma tabela com todas as respostas. Para comunicação com o banco de dados MySQL, no BackEnd usamos Node.js + Express. E no FrontEnd, utilizamos JavaScript, HTML e CSS',
        links: {
            github: 'https://github.com/salanmato/researchbc'
        },
        tags: ['JavaScript', 'HTML', 'CSS', 'UI', 'MySQL', 'Node.js', 'Express.js']
    }
]

export {projectsList}