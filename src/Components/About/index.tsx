import { Section } from "./style";
import Slider from "react-slick";

const images = [
    "/img/about.jpg",
    "/img/about2.jpg",
    "/img/buque2.jpg",
    "/img/about3.jpg",
  ];

const AboutSection: React.FC = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000, 
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        fade: true,
      };

    return (
      <Section id="about">
      <div className="content">
        <div className="text-container">
        <h2>Sobre nós</h2>
          <p>
            Na nossa floricultura, oferecemos uma grande variedade de flores
            frescas e arranjos personalizados para todas as ocasiões. Com anos de
            tradição, garantimos qualidade, beleza e rapidez na entrega. Seja para
            um buquê especial ou para transformar seu ambiente com plantas
            decorativas, estamos aqui para ajudar a tornar seus momentos ainda
            mais especiais.
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Imagem ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Section>
    );
};

export default AboutSection;