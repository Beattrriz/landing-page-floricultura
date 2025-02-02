import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  color: #333;

  @media (max-width: 768px) {
    padding: 20px 10px; 
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  color: #e1306c;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    color:rgb(240, 129, 166);
  }

  @media (max-width: 768px) {
    font-size: 16px; 
  }
`;

export const Locationn = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 14px; 
  }
`;
