import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components'
const Main = styled.div`
width: 100%;
height: 50px;
background-color: aqua;
display: flex;
align-items: center;
justify-content: space-around;

`;
const Header = styled.h3`
color : black;
cursor: pointer;
`;

function Navbar() {
    return (
        <Main>
            <Header><Link to={'/'}>Home</Link></Header>
            <Header>Profile</Header>
            <Header><Link to={'/cart/abcd'}>Cart</Link></Header>
            <Header>Order</Header>
            <Header>Logout</Header>
        </Main>
    )
}

export default Navbar