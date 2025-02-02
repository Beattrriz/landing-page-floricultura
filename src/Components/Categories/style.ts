import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
  background: #fff0f5;

  h2 {
    font-size: 2rem;
    color: rgb(233, 149, 173);
    margin-bottom: 30px;
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: auto;
`;

export const CategoryCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.9s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  transition: opacity 0.5s ease-in-out;
`;

export const CategoryName = styled.h3`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
`;