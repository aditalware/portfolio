import React, {Component } from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
class Contact extends Component{

     render()
     {
         return(
             <div className="contact-body fade">
             <Grid className="contact-grid">
                <Cell col={6}>
                    
                <h2>
                  Adit Alware
                </h2>

                <img src="images/myprofile.png"
                alt="avatar"
                style={{height:'250px'}}
                />

                <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>
                 I am an extremely enthusiastic and hardworking engineering undergraduate specialising in Computer Science.
                 Hardworking ,Creative and reliable Frontend Developer with strong ability in communication, critical thinking, time management and a team player. Offering Good Hands in ReactJs Frontend Development.Highly organized, proactive and punctual with team-oriented mentally.4 months of good experience as an intern in a startup .Committed to provide high level solutions that drive technology and provide outstanding performance
                </p>


                </Cell>

                <Cell col={6}>
                  <h2>Contact Me</h2>
                  <hr/>
                  <div className="contact-list">
                       <List>
                        <ListItem>
                            <ListItemContent style={{fontSize:'25px'}}><i className="fa fa-phone-square" aria-hidden="true"></i><a href="tel:6264595529" style={{textDecoration:'none' ,color: 'black'}}> (+91) 6264595529</a></ListItemContent>
                        
                        </ListItem>
                      
                        <ListItem>
                        <ListItemContent style={{fontSize:'25px'}}><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:alwareadit@gmail.com" style={{textDecoration:'none' ,color: 'black'}}> alwareadit@gmail.com</a></ListItemContent>
                    
                        </ListItem>

                        <ListItem>
                        <ListItemContent style={{fontSize:'25px'}}><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:201851006@iiitvadodara.ac.in" style={{textDecoration:'none' ,color: 'black'}}> 201851006@iiitvadodara.ac.in</a></ListItemContent>
                    
                        </ListItem>
                    
                        </List>
                  </div>
                  
                </Cell>
             </Grid>
             </div>
         );
     }

}
export default Contact;