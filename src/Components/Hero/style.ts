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
    position: absolute; 
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
`;

export const Menu = styled.div`
    display: flex;
    gap: 20px;
`;

export const MenuItem = styled.a`
    font-size: 1rem;
    color: rgb(233, 149, 173);;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
        color: rgb(255, 105, 180);
    }
`;

export const HeroContent = styled.div`
    max-width: 600px;

    h1 {
        font-size: 55px;
        font-family: 'Fleur De Leah', cursive;
        color: rgb(233, 149, 173);
    }

    p {
        font-size: 1.7rem;
        margin: 20px 0;
    }

    button {
        background:rgb(255, 105, 180);
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 1.2rem;
        cursor: pointer;
        transition: 0.3s;
        border-radius: 5px;

        &:hover {
            background: #d45592;
        }
    }
`;