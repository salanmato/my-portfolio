
const Educacao = () => {

    const educacao = [
        {
            curso: "Análise e Desenvolvimento de Sistemas",
            escola: "UniFECAF",
            tempo: "Janeiro 2023 - Dezembro 2025"
        },
        {
            curso: "Produção Multimídia",
            escola: "FMU|FIAM-FAAM",
            tempo: "Janeiro 2018 - Dezembro 2019"
        }

    ]


    return (
        <div>
            <h2>EDUCAÇÃO</h2>
            {educacao && educacao.map((curso, idx) => {
                return (
                    <div key={idx}>
                        <h3>{curso.curso}</h3>
                        <h5>{curso.tempo}</h5>
                        <h4>{curso.escola}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Educacao