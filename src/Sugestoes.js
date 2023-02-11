export default function Sugestoes() {
    const ListaSugestao = [
        {
            img: "assets/img/bad.vibes.memes.svg",
            nome: "bad.vibes.memes",
            razao: "Segue você"
        },
        {
            img: "assets/img/chibirdart.svg",
            nome: "chibirdart",
            razao: "Segue você"
        },
        {
            img: "assets/img/razoesparaacreditar.svg",
            nome: "razoesparaacreditar",
            razao: "Novo no Instagram"
        },
        {
            img: "assets/img/smallcutecats.svg",
            nome: "smallcutecats",
            razao: "Segue você"
        },
        {
            img: "https://i.pinimg.com/564x/6c/0b/25/6c0b252b8d6c90099f71b49c201c2f60.jpg",
            nome: "Roronoa",
            razao: "Novo no Instagram"
        }
    ]

    function Sugestao(prop){
        return(
            <div className="sugestao">
                <div className="usuario">
                    <img src={prop.img} alt={prop.nome} />
                    <div className="texto">
                        <div className="nome">{prop.nome}</div>
                        <div className="razao">{prop.razao}</div>
                    </div>
                </div>

                <div className="seguir">Seguir</div>
            </div>
        )
    }

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {ListaSugestao.map((sugest)=> <Sugestao key={sugest.nome} nome={sugest.nome} img={sugest.img} razao={sugest.razao} />)}

        </div>
    )
}