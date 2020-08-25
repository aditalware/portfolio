import React from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Welcome"  scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="project">Projects</Link>
                <Link to="contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Adit Alware">
              <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="project">Projects</Link>
              <Link to="contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
    </div>
    </div>
  );
}

export default App;
