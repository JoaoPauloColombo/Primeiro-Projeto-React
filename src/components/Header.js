import React from 'react'
import NavBar from './NavBar';
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0047ba;
  color: #fff;
  font-weight: bold;
  padding: 10px 20px;
`;

function Header() {
    return (
        <HeaderContainer>
            <div>
                Doofenshmirtz
            </div>
            <NavBar />
        </HeaderContainer>
    );
}

export default Header;
