import { useState } from "react"

export default function Post(prop) {

    const [salvo, setSalvo] = useState("bookmark-outline")
    const [curtido, SetCurtido] = useState("heart-outline")
    const [classe, SetClasse] = useState("")
    const [numero , SetNumero] = useState(prop.quantidade)

    function salvar() {
        { salvo === "bookmark-outline" ? setSalvo("bookmark") : setSalvo("bookmark-outline") }
    }

    function Curtir() {

        if (curtido === "heart-outline") {
            SetCurtido("heart")
            SetClasse("vermelho")
            SetNumero((((numero*1000)+1)/1000).toFixed(3))
        } else {
            SetCurtido("heart-outline")
            SetClasse("")
            SetNumero((((numero*1000)-1)/1000).toFixed(3))
        }
    }

    function CurtirPost() {
        if (curtido === "heart-outline"){
            SetCurtido("heart")
        SetClasse("vermelho")
        SetNumero((((numero*1000)+1)/1000).toFixed(3))
        }
    }

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
                <img onDoubleClick={CurtirPost} src={prop.foto} alt={prop.alt} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={classe} onClick={Curtir} name={curtido}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={salvar} name={salvo}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={prop.curtiu} alt={prop.curtiuNome} />
                    <div class="texto">
                        Curtido por <strong>{prop.curtiuNome}</strong> e <strong>outras {numero} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}