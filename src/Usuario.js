import { useState } from "react"

export default function Usuario() {
    const [name , setName] = useState("Anônimo");
    const [img , setImg] = useState("assets/img/usuarioAnonimo.png")
    function AlterarNome(){
        const novoNome = prompt("insira o seu novo nome!")
        if (novoNome){
            setName(novoNome);
        }
    }
    function AlterarImg(){
        const novaImg = prompt("insira o link da sua nova foto!")
        if (novaImg){
            setImg(novaImg);
        }
    }

    return (
        <div className="usuario">
            <img data-test="profile-image" onClick={AlterarImg} src={img} alt="imagem de perfil" />
            <div className="texto">
                <span>
                    <strong data-test="name" >{name}</strong>
                    <ion-icon data-test="edit-name" onClick={AlterarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}