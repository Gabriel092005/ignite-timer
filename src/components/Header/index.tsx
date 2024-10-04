import { HeaderContainer } from "./style";
import logoIgnite from '../../assets/logoIgnite.svg'
import Timer from '../../assets/Timer, Regular (Stroke).svg'
import Scroll from '../../assets/Scroll, Regular.png'
import { NavLink } from "react-router-dom";



export  function Header(){
      return(
        <HeaderContainer>
        <img src={logoIgnite} alt="" />
            <nav>
                <NavLink title="Timer" to="/"><img src={Timer} /></NavLink>
                <NavLink title="Historico" to="/history"><img src={Scroll}/></NavLink>
            </nav>
        </HeaderContainer>
      )
}