export default function Post(prop) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={prop.perfil} alt={prop.nome} />
                    {prop.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={prop.foto} alt={prop.alt} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={prop.curtiu} alt={prop.curtiuNome} />
                    <div class="texto">
                        Curtido por <strong>{prop.curtiuNome}</strong> e <strong>outras {prop.quantidade} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}