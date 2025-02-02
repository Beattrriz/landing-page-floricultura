import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;  
  padding: 200px 60px; 
  text-align: center;
  background: #fff0f5; 

  h2 {
    font-family: 'Fleur De Leah', cursive; 
    font-size: 4rem;
    color: rgb(233, 149, 173); 
    margin-top: 90px; 
    margin-bottom: 90px; 
  }

  
  @media (max-width: 768px) {
    padding: 100px 20px; 
    
    h2 {
      font-size: 2.5rem; 
      margin-top: 230px; 
      margin-bottom: 30px;
    }
  }
`;

export const Card = styled.div`
  background-color: #fff; 
  border-radius: 10px; 
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  text-align: center; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px; 
  width: 25%; 
  margin: 0 auto; 
  position: relative; 
  
  p {
    font-size: 1rem;
    color: #555; 
    margin-bottom: 15px;
    font-style: italic;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: bold;
    color: rgb(233, 149, 173); 
  }

  
  @media (max-width: 768px) {
    width: 80%; 
    height: auto; 
    margin-bottom: 20px; 

    p {
      margin-top: 20px;
      font-size: 0.9rem; 
    }

    h4 {
      font-size: 1rem; 
    }
  }
`;

export const Rating = styled.div`
  position: absolute;
  top: 10px; 
  left: 25px; 
  display: flex;
  align-items: center;
  margin-top: 10px;

  .stars {
    color: #FFD700; 
    margin-left: 5px; 
  }

  .rating-text {
    font-size: 1rem;
    font-weight: bold;
    color: #333;
  }

  @media (max-width: 768px) {
    margin-top: 5px;
    .rating-text {
      font-size: 0.9rem; 
    }
  }
`;