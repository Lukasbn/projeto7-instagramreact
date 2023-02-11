import Posts from "./Posts"
import SideBar from "./SideBar"
import Stories from "./Storeis"

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories/>
                <Posts/>
            </div>
            <SideBar/>
        </div>
    )
}