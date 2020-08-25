import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import HomePage from './Homepage';
import Resume from './Resume';
import Project from './Project';
import Contact from './Contact';

class Main extends Component{

    constructor(props)
    {
        super(props);
        this.state={};
    }
    render()
    {
      const Home=()=>{
          return(<HomePage/>);
      }
      return(
          <>
    <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/contact" component={Contact}/>
       <Route path="/project" component={Project}/>
       <Route path="/resume" component={Resume}/>
       <Redirect to="/" />
    </Switch>
         </>
      );

    }
}

export default Main;