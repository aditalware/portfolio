import React from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';
import axios from 'axios';
function App() {

  const[colorArray,setColor]=React.useState([]);
  const[visits,setVisit]=React.useState(0);
  React.useEffect(()=>{
    let arr=[];
    for(var i=0;i<150;i++){
      arr.push('#'+Math.floor(Math.random()*16777215).toString(16));

    }
    setColor(arr)
  },colorArray)

  React.useEffect(()=>{
   axios.get('https://aditalware-backend-portfolio.herokuapp.com/visits')
    .then((data)=>{setVisit(data.data)})
    .catch((err)=>console.log(err))

  },visits)
  
  const[flag,setflag]=React.useState(false);


  return (
    <div className="App">
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Welcome"  scroll>
            <Navigation>
                <p>Total Visits : {visits}</p>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">About</Link>
                <Link to="/contactme">Contact</Link>
                <Link to="/internship">Internships</Link>


            </Navigation>
        </Header>
        <Drawer title="Adit Alware">
              <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/project">Projects</Link>
              <Link to="/contact">About</Link>
              <Link to="/contactme">Contact</Link>
              <Link to="/internship">Internships</Link>

          </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <div className="c">
        {
           colorArray.map((color)=>
           <div className={flag?"colordot"+String(Math.floor(Math.random()*10)%5):""} style={{backgroundColor:color}}></div>)
        }
    </div>
            <Main setflag={setflag}/>
        </Content>
    </Layout>
    </div>
    
    </div>
  );
}

export default App;
