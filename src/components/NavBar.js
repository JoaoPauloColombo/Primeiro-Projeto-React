import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const NavBarContainer = styled.div`
 
display: flex;
justify-content: space-around;
aling-items: center;
padding: 1em 0;

`;

const StyledLink = styled(Link)`
color: #fff;
text-decoration:none;
margin: 0 1em;
&:hover{
    text-decoration:underline;
}
`;

function NavBar() {
    return (
        <NavBarContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/personagens">Personagens</StyledLink>
            <StyledLink to="/episodios">Episódios</StyledLink>
            <StyledLink to="/contato">Contatos</StyledLink>
        </NavBarContainer>
    );
}

export default NavBar;
