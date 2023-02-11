export default function Story(prop) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={prop.img} alt={prop.nome} />
            </div>
            <div class="usuario">
                {prop.nome}
            </div>
        </div>
    )
}