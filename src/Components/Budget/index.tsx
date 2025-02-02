import { BudgetContainer, ButtonGroup, ContactButton } from "./style";
import { FaWhatsapp } from "react-icons/fa";

export const BudgetSection = () => {
    return(
        <section id="contact">
            <BudgetContainer>
            <h2>💐 Faça seu orçamento 💐</h2>
            <p>Fale conosco e escolha o arranjo perfeito para você!</p>
            <ButtonGroup>
                <ContactButton href="https://wa.me/seu-numero" target="_blank">
                <FaWhatsapp size={24} /> WhatsApp
                </ContactButton>              
            </ButtonGroup>
        </BudgetContainer>
        </section>
    );
};

export default BudgetSection;