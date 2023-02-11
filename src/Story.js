export default function Story(prop) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={prop.img} alt={prop.nome} />
            </div>
            <div className="usuario">
                {prop.nome}
            </div>
        </div>
    )
}