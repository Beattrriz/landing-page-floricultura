import { FaInstagram, FaMapMarkerAlt  } from "react-icons/fa";
import { FooterContainer, Locationn, SocialLink } from "./style";


export const Footer = () => {
    return(
        <FooterContainer>
        <SocialLink href="https://www.instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
          Siga-nos no Instagram
        </SocialLink>
        
        <Locationn>
          <FaMapMarkerAlt size={24} />
           Estamos localizados na Av. Rua Matildes, 123 - São Sebastião do Passé, Bahia.
        </Locationn>
      </FooterContainer>
    );
};

export default Footer;
