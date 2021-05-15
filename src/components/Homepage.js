import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import CarouselComponent from './CarouselComponent';

class HomePage extends Component{

    constructor(props){
        super(props);
    }
     render()
     {
         return(
             <div style={{width: '100%',margin:'auto'}}>
                   
                   <div className="square1">

                   </div>
                   <div className="square4">

</div>
                   <div className="square2">

                   </div>
                   <div className="square3">

                   </div>

                   <div className="square5">

                  </div>
                  <div className="square6">

                  </div>


               <Grid className="home-grid">
                   

                   <Cell col={12} className="fade">
                       <img
                       src='/images/myprofile.png'
                       alt="avatar"
                       className="avatar-img"/>

                       <div className="banner-text">
                        <h1 className="shiny">Adit Alware</h1>
                       <h1 >
                        MERN Stack Developer
                       </h1>
                       
                       <hr style={{ borderTop:'1px solid' }}/>
                       <p> HTML | CSS | Bootstrap | NodeJs| ReactJs | MySql |Mongodb| Express</p>
                       
                       <div className="social-links col col-12" >
                       
                       <a href="https://www.linkedin.com/in/adit-alware-756652176/"  rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"/></a>
                 
                       <a href="https://github.com/aditalware"  rel="noopener noreferrer"><i className="fa fa-github-square" aria-hidden="true"/></a>

                       <a href="http://www.facebook.com/aditalware"  rel="noopener noreferrer"><i className="fa fa-facebook-square" aria-hidden="true"/></a>

                       <a href="https://www.instagram.com/_adit_alware.world_/" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"/></a>
  
                       <a href="https://auth.geeksforgeeks.org/user/alwareadit/profile" rel="noopener noreferrer"><i className="fa fa-code" aria-hidden="true"/></a>

                        </div>
                       </div>
                   </Cell>
                   <Cell col={8} className="mx-auto">
                   <CarouselComponent/>

                   </Cell>

                    
               </Grid>

               

                
             </div>
         );
     }

}
export default HomePage;