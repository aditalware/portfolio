import React, {Component } from 'react';
import {Grid,Cell} from 'react-mdl';
class Education extends Component{

     render()
     {
         return(
             <div>
             <Grid >
             <Cell col={4}>
               <p>{this.props.year1} - {this.props.year2}</p> 
             </Cell>

             <Cell col={8}>
             <h4 style={{marginTop:'0px'}}>{this.props.schoolname}</h4>
             <p>{this.props.type}</p>
             <p>{this.props.resulttype} : {this.props.credits}</p>
             </Cell>
               
             </Grid>
             </div>
         );
     }

}
export default Education;