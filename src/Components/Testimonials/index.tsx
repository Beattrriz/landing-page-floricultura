import { Card, Rating, Section } from "./style";
import Slider from "react-slick";

const testimonials = [
    { id: 1, name: "Maria Brito de Souza", text: "As flores são lindas e o serviço foi perfeito! Muito obrigada.", rating: 5 },
    { id: 2, name: "João da Cunha", text: "Comprei um buquê para minha esposa e ela amou! Recomendo!", rating: 5 },
    { id: 3, name: "Carlos de Melo", text: "A entrega foi rápida e a qualidade das flores é incrível. Vou comprar mais!", rating: 5 },
    { id: 4, name: "Claudia Maria Souza", text: "Comprei Cactos para meu jardim, vieram em perfeito estado e lindos!", rating: 5 },
    { id: 5, name: "Miguel Figueiredo", text: "Comprei um arranjo de dia das mães para a minha mãe, ela amou!!", rating: 5 },
    { id: 6, name: "Lucia da Conceição", text: "A qualidade das flores é incrível. As órquideas então são maravilhosas!", rating: 5 }, 
];


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
};

const TestimonialSection = () => {
    return(
        <Section>
        <h2>Veja o que nossos clientes dizem</h2>
        <Slider {...settings}>
            {testimonials.map((testimonial) => (
                <div key={testimonial.id}>
                    <Card>
                    <Rating>
                        <span className="rating-text">{testimonial.rating},0</span>
                        <span className="stars">
                            {"★".repeat(testimonial.rating)} 
                            {"☆".repeat(5 - testimonial.rating)} 
                        </span>
                    </Rating>
                        <p>"{testimonial.text}"</p>
                        <h4>- {testimonial.name}</h4>
                    </Card>
                </div>
            ))}
        </Slider>
    </Section>
    );
};

export default TestimonialSection;