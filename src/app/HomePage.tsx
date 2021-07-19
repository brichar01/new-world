import React from 'react';
import styled from "@emotion/styled";

const Layout = styled.div({
    display: 'grid',
    justifyItems: 'stretch',
    gridTemplateColumns: '0.75fr 1fr 3fr 1fr',
    gridTemplateRows: '200px 1fr 100px'
    });
const Header = styled.div({
  background: 'red',
  gridColumnStart: '1',
  gridColumnEnd: 5,
  gridRow: 1
});
const Body = styled.div({
  background: 'blue',
  gridColumn: '2 / span 2',
  gridRow: 2
});
const Footer = styled.div({
  background: 'grey',
  fontSize: '0.5 em',
  fontStyle: 'italics',
  gridColumnStart: 1,
  gridColumnEnd: 5,
  gridRow: 3
});

const HomePage = () => {
  return(
    <Layout> 
      <Header>
        <h1>new World();</h1>
        <h3>Hello World!</h3>
      </Header>
      <Body>
        Welcome to the new world blog the premier source for this imaginary futuristic RPG.
      </Body>
      <Footer>
        Ben Pty Ltd.
      </Footer>
    </Layout>

  )
};

export default HomePage;