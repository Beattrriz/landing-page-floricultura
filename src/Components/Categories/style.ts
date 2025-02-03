import styled from "styled-components";

export const Section = styled.section`
  height: 120vh;  
  padding: 200px 60px;
  text-align: center;
  background: #fff0f5;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;

  h2 {
    font-size: 5rem;
    color: rgb(233, 149, 173);
    margin-bottom: 30px;
    font-family: 'Fleur De Leah', cursive;
  }

   @media (max-width: 768px) {
    padding: 150px 20px; 
    height: auto; 
    
    h2 {
      font-size: 3rem;
      margin-top: 280px; 
    }
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr; 
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; 
  }
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

  @media (max-width: 768px) {
    height: 150px; 
  }
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

  @media (max-width: 768px) {
    font-size: 1rem; 
  }
`;