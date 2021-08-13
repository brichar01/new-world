import React from 'react';
import styled from "@emotion/styled";
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ArticleContainer from './ArticleContainer';
import ArticleSummaryList from './ArticleSummaryList';

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
  background: 'green',
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

const PageLayoutWrapper = () => {
  const { path } = useRouteMatch();
  console.log(path)

  return(
    <Layout> 
      <Header>
        <h1>new World();</h1>
        <h3>Hello World!</h3>
        Welcome to the new world blog the premier source for this imaginary futuristic RPG.
      </Header>
      <Body>
        <Switch>
          <Route path={`${path}/article/:id`} component={ArticleContainer}/>
          <Route path={`${path}`}>
            <ArticleSummaryList />
          </Route>
        </Switch>
      </Body>
      <Footer>
        Ben Pty Ltd.
      </Footer>
    </Layout>
  )
};

export default PageLayoutWrapper;