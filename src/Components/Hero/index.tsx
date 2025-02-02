import { HeroContainer, HeroContent, NavbarContainer, Logo, MenuItem, Menu } from "./style";

const Hero: React.FC = () =>{
    return(
        <HeroContainer>
            <NavbarContainer>
                <Logo>Sorriso de Flor</Logo>
                <Menu>
                    <MenuItem href="#home">Início</MenuItem>
                    <MenuItem href="#products">Produtos</MenuItem>
                    <MenuItem href="#contact">Contato</MenuItem>
                </Menu>
            </NavbarContainer>

            <HeroContent>
                <h1>Bem-vindo à nossa Floricultura</h1>
                <p>Flores encantadoras para todos os momentos</p>
                <button>Ver Produtos</button>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;