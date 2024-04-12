import React from 'react'
import styled from 'styled-components'

const NavBarContainer = styled.div`
 
display: flex;
justify-content: space-around;
aling-items: center;
padding: 1em 0;

`;

function NavBar() {
    return (
        <NavBarContainer>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </NavBarContainer>
    );
}

export default NavBar;
