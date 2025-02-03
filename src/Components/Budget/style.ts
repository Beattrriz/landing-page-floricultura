import styled from "styled-components";

export const BudgetContainer = styled.section`
    background: url("/img/flor2.jpg") center/cover no-repeat;
    height: 110vh;  
    padding: 200px 90px;
    text-align: center;
    color: #fff; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
    font-family: 'Fleur De Leah', cursive;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
    font-size: 3.9rem;
    margin-bottom: 15px;
    }

    p {
    font-size: 1.7rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
    margin-bottom: 25px;
    }

    @media (max-width: 768px) {
    padding: 150px 30px; 
    height: auto; 
    
    h2 {
      font-size: 2.5rem; 
    }

    p {
      font-size: 1rem; 
    }
  }

  @media (max-width: 480px) {
    padding: 120px 20px; 
    
    h2 {
      font-size: 2rem; 
    }

    p {
      font-size: 0.9rem; /
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }
`;

export const ContactButton = styled.a`
  background: rgba(255, 255, 255, 0.8);
  color: #e595aa;
  padding: 12px 24px;
  font-size: 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #e595aa;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px; 
  }
`;