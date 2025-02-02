import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  padding: 250px 20px;
  text-align: center;
  background-color: #fff0f5;

  h2 {
    font-family: 'Fleur De Leah', cursive;
    font-size: 4rem;
    color: rgb(233, 149, 173);
    margin-bottom: 20px;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    align-items: center;
  }

  .text-container {
    max-width: 600px;
    text-align: left; 
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  .slider-container {
    width: 300px;
    height: 500px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 10px;
    }
  }


  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      text-align: center;
    }

    .slider-container {
      width: 100%;
      max-width: 400px;
      height: 500px;
    }
  }
`;