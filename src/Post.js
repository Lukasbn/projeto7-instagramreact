import { useState } from "react"

export default function Post(prop) {

    const [salvo, setSalvo] = useState("bookmark-outline")
    const [curtido, SetCurtido] = useState("heart-outline")
    const [classe, SetClasse] = useState("")
    const [numero, SetNumero] = useState(prop.quantidade)

    function salvar() {
        { salvo === "bookmark-outline" ? setSalvo("bookmark") : setSalvo("bookmark-outline") }
    }

    function Curtir() {

        if (curtido === "heart-outline") {
            SetCurtido("heart")
            SetClasse("vermelho")
            SetNumero((((numero * 1000) + 1) / 1000).toFixed(3))
        } else {
            SetCurtido("heart-outline")
            SetClasse("")
            SetNumero((((numero * 1000) - 1) / 1000).toFixed(3))
        }
    }

    function CurtirPost() {
        if (curtido === "heart-outline") {
            SetCurtido("heart")
            SetClasse("vermelho")
            SetNumero((((numero * 1000) + 1) / 1000).toFixed(3))
        }
    }

    return (
        <div data-test="post" className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={prop.perfil} alt={prop.nome} />
                    {prop.nome}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img data-test="post-image" onDoubleClick={CurtirPost} src={prop.foto} alt={prop.alt} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon data-test="like-post" class={classe} onClick={Curtir} name={curtido}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={salvar} name={salvo}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={prop.curtiu} alt={prop.curtiuNome} />
                    <div className="texto">
                        Curtido por <strong>{prop.curtiuNome}</strong> e <strong data-test="likes-number">outras {numero} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}