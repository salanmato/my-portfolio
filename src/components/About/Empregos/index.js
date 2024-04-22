
const Empregos = () => {

    const empregos = [
        {
            cargo: "Programador Júnior ",
            empresa: "Construtivo.com do Brasil",
            local: "São Paulo - SP",
            tempo: "Janeiro 2024 - Fevereiro 2024 ",
            atividades: ["Uso da biblioteca Joint.js para criação de visualizadores de Workflow - js, html e css", "Criação de templates para documentos - js, html e css - js, html e css", "Correção de bugs na plataforma colaborativo - js, html e css"]
        },
        {
            cargo: "Designer Gráfico",
            empresa: "Freelancer",
            local: "Taboão da Serra - SP",
            tempo: "Agosto 2019 - Julho 2023 ",
            atividades: ["Criação de Identidades Visuais", "Criação de apresentações de projetos.", "Edição de vídeo e motion design."]
        },
        {
            cargo: "Editor de Vídeos ",
            empresa: "UniFECAF",
            local: "Taboão da Serra - SP",
            tempo: "Abril 2019 - Julho 2023 ",
            atividades: ["Edição de videoaulas de graduação, pós-graduação e cursos livres.", "Filmagem e decupagem de videoaulas ", "Pesquisa de imagens, vídeos e conteúdos em bancos de dados"]
        }
    ]


    return (
        <div>
            <h2>EXPERIÊNCIA PROFISSIONAL</h2>
            {empregos && empregos.map((emprego, idx) => {
                return (
                    <div key={idx}>
                        <h3>{emprego.cargo}</h3>
                        <h5>{emprego.tempo}</h5>
                        <h4>{emprego.empresa}</h4>

                        {emprego.atividades.map((atividade, key) => {
                            return (
                                <p key={key}>• {atividade}</p>)
                        })}
                    </div>
                )
            })}
        </div>
    )
}


export default Empregos