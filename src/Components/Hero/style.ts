import styled from "styled-components";

export const HeroContainer = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    background-image: url('/img/flor1.jpg'); 
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
`;

export const NavbarContainer = styled.nav`
    position: fixed; 
     z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    backdrop-filter: blur(5px); 
    background: rgba(255, 255, 255, 0.1); 
    border-bottom: 3px solid rgb(233, 149, 173);
`;

export const Logo = styled.div`
    color:rgb(233, 149, 173);
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Fleur De Leah', cursive;

    @media (max-width: 768px) {
        font-size: 1.5rem; 
    }
`;

export const Menu = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
        display: none; 
    }
`;

export const MenuItem = styled.a`
    font-size: 1rem;
    color: rgb(233, 149, 173);;
    text-decoration: none;
    padding: 5px 10px;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
        border: 2px solid rgb(233, 149, 173); 
        border-radius: 10px;
        padding: 5px 15px; 
    }
`;

export const HeroContent = styled.div`
     max-width: 600px;
     margin-top: 100px;

    h1 {
        font-size: 55px;
        font-family: 'Fleur De Leah', cursive;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
        color: rgb(233, 149, 173);
    }

    p {
        font-size: 1.7rem;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
        margin: 20px 0;
    }

    button {
        background:rgba(255, 255, 255, 0.8);
        color: #e595aa; //
        border: none;
        padding: 10px 20px;
        font-size: 1.2rem;
        cursor: pointer;
        transition: 0.3s;
        border-radius: 5px;

        &:hover {
            background: #e595aa;
            color: white;
        }
    }

    @media (max-width: 768px) {
        max-width: 100%;
        margin-top: 80px; /* Ajusta o espaço em cima */
    }
`;

