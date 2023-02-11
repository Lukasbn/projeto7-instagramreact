import Post from "./Post"

export default function Posts() {
    const ListaPosts = [
        {
            perfil: "assets/img/meowed.svg",
            nome: "meowed",
            foto: "assets/img/gato-telefone.svg",
            alt: "gato-telefone",
            curtiu: "assets/img/respondeai.svg",
            curtiuNome: "respondeai",
            quantidade: 101.523
        },
        {
            perfil: "assets/img/barked.svg",
            nome: "barked",
            foto: "assets/img/dog.svg",
            alt: "dog",
            curtiu: "assets/img/adorable_animals.svg",
            curtiuNome: "adorable_animals",
            quantidade: 99.158
        },
        {
            perfil: "https://i.pinimg.com/originals/f0/af/cb/f0afcbce7ed4a7df7b822964501bf995.jpg",
            nome: "Monkey D. Luffy",
            foto: "https://i.pinimg.com/736x/10/d4/c0/10d4c05f28be2fe3668c64ea8fd250d8.jpg",
            alt: "Binks no sake",
            curtiu: "https://i.pinimg.com/564x/6c/0b/25/6c0b252b8d6c90099f71b49c201c2f60.jpg",
            curtiuNome: "Roronoa",
            quantidade: 547.158
        }
    ]

    return (
        <div class="posts">
            {ListaPosts.map((post) => <Post
                perfil={post.perfil}
                nome={post.nome}
                foto={post.foto}
                alt={post.alt}
                curtiu={post.curtiu}
                curtiuNome={post.curtiuNome}
                quantidade={post.quantidade}
            />)}

        </div>
    )
}