import { Section, CategoryGrid, CategoryCard, CategoryImage, CategoryName } from  "./style";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Buquês",
    image: "/img/buque.jpg",
    hoverImage: "/img/buque2.jpg",
    link: "/buques",
  },
  {
    id: 2,
    name: "Orquídeas",
    image: "/img/orquidea.jpg",
    hoverImage: "/img/orquidea2.jpg",
    link: "/orquideas",
  },
  {
    id: 3,
    name: "Mini Jardins",
    image: "/img/jardim.jpg",
    hoverImage: "/img/jardim2.jpg",
    link: "/jardins",
  },
  {
    id: 4,
    name: "Arranjos Especiais",
    image: "/img/arranjo.jpg",
    hoverImage: "/img/arranjo2.jpg",
    link: "/arranjos",
},
{
    id: 5,
    name: "Plantas Ornamentais",
    image: "/img/plantaOrnamental.jpg",
    hoverImage: "/img/plantaOrnamental2.jpg",
    link: "/plantas-ornamentais",
},
{
    id: 6,
    name: "Flores para Eventos",
    image: "/img/eventos.jpg",
    hoverImage: "/img/eventos2.jpg",
    link: "/flores-eventos",
}
];

const CategoriesSection = () => {

  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <section id="categories">
      <Section>
      <h2>Catálogo</h2>
      <CategoryGrid>
        {products.map((category) => (
          <CategoryCard key={category.id}>
            <a href={category.link}>
              <CategoryImage
                src={hoveredImage === category.id ? category.hoverImage : category.image}
                alt={category.name}
                onMouseEnter={() => setHoveredImage(category.id)}
                onMouseLeave={() => setHoveredImage(null)}
              />
              <CategoryName>{category.name}</CategoryName>
            </a>
          </CategoryCard>
        ))}
      </CategoryGrid>
    </Section>
    </section>
  );
};

export default CategoriesSection;