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
            <div class="sugestao">
                <div class="usuario">
                    <img src={prop.img} alt={prop.nome} />
                    <div class="texto">
                        <div class="nome">{prop.nome}</div>
                        <div class="razao">{prop.razao}</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
        )
    }

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {ListaSugestao.map((sugest)=> <Sugestao nome={sugest.nome} img={sugest.img} razao={sugest.razao} />)}

        </div>
    )
}