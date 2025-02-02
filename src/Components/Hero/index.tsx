import { FaWhatsapp } from "react-icons/fa";
import { HeroContainer, HeroContent, NavbarContainer, Logo, MenuItem, Menu } from "./style";

const Hero: React.FC = () =>{
    return(
        <section id="home">
            <HeroContainer>
            <NavbarContainer>
                <Logo>Gardening</Logo>
                <Menu>
                <MenuItem href="#home">Inicio</MenuItem>
                <MenuItem href="#categories">Produtos</MenuItem>
                <MenuItem href="#contact">Contato</MenuItem>
                </Menu>
            </NavbarContainer>

            <HeroContent>
                <h1>Bem-vindo à nossa Floricultura</h1>
                <p>Flores encantadoras para todos os momentos</p>
                <a href="#categories">
                <button>Ver Catálogo</button>
                </a>
            </HeroContent>
        </HeroContainer>
        </section>
    );
};

export default Hero;