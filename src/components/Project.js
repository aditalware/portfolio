import React, {Component } from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardActions,Button,CardMenu,CardTitle,CardText,IconButton} from 'react-mdl'
import {Link } from 'react-router-dom';
class Project extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            activeTab:0
        };
    }

    toggleCategories()
    {
        if(this.state.activeTab==0)
        {
            return(<div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450' ,margin: 'auto'}}>
                     <CardTitle style={{color: 'black',height: '176px', background: 'url(/images/project1.jpg) center / cover'}} >
                     <img className="logo-img" src="/images/react-logo.png"></img>
                     </CardTitle>
                     <CardText>
                           <h4 style={{color:'black'}}>  <i style={{color:'lightgreen'}} className="fa fa-lg fa-check"></i>
                           Project 1</h4>
                           An Interactive and Responsive Ecommerce Web Application 
                     </CardText>

                     <CardActions>
                       <Button colored><a style={{ textDecoration:'None', color:'blue'}} href="https://github.com/aditalware/ReactJS_ShopCart"><i className="fa fa-github-square"></i>GitHub</a></Button>
                     </CardActions>

                     <CardMenu style={{color:'black'}}>
                         <IconButton name="share"/>
                     </CardMenu>



                </Card>

                <Card shadow={5} style={{minWidth: '450' ,margin: 'auto'}}>
                     <CardTitle style={{color: 'black',height: '176px', background: 'url(/images/project2.jpg) center / cover'}} >
                     
                     <img className="logo-img" src="/images/react-logo.png"></img>
                     </CardTitle>
                     <CardText>
                           <h4 style={{color:'black'}}>                           <i style={{color:'lightgreen'}} className="fa fa-lg fa-check"></i>
                           Project 2</h4>
                           Course Management Application for a learner to keep track.
                     </CardText>

                     <CardActions>
                     <Button colored><a style={{ textDecoration:'None', color:'blue'}} href="https://github.com/aditalware/TaskBlueTech"><i className="fa fa-github-square"></i>GitHub</a></Button>
                     </CardActions>

                     <CardMenu style={{color:'black'}}>
                         <IconButton name="share"/>
                     </CardMenu>



                </Card>

                <Card shadow={5} style={{minWidth: '450' ,margin: 'auto'}}>
                <CardTitle style={{color: 'black',height: '176px', background: 'url(/images/project3.jpg) center / cover'}} >
                <img className="logo-img" src="/images/react-logo.png"></img>
                </CardTitle>
                <CardText>
                      <h4 style={{color:'black'}}>  <i style={{color:'lightgreen'}} className="fa fa-lg fa-check"></i>
                      Project 3</h4>
                      Mini Restraunt Web Application 
                </CardText>

                <CardActions>
                  <Button colored><a style={{ textDecoration:'None', color:'blue'}} href="https://github.com/aditalware/React_redux_restraunt_website"><i className="fa fa-github-square"></i>GitHub</a></Button>
                </CardActions>

                <CardMenu style={{color:'black'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>
                
                </div>);
        }
        else if(this.state.activeTab==1)
        {
            return(<div></div>);
        }
    }
     render()
     {
         return(
             <div className="category-tabs">
             
               <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
                   <Tab>React</Tab>
                   <Tab>Bootstrap</Tab>
               </Tabs>

                <Grid >
                  <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                  </Cell>
                </Grid>
                 
             
             </div>
         );
     }

}
export default Project;