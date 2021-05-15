import React,{Component} from 'react';

import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class CarouselComponent extends Component {

     constructor(props){
         super(props);
         this.state={
             
         }
         
     }

    
    render() {
        return (
        
                   <Carousel indicators={true} defaultActiveIndex={0} >
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/hackiiitv.png"
                        alt="First slide"
                       
                        />
                        <Carousel.Caption>
                        <h3>HACK IIITV 2019</h3>
                        <p>Runner Up</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/hackiiitv2020.png"
                        alt="First slide"
                       
                        />
                        <Carousel.Caption>
                        <h3>HACK IIITV 2029</h3>
                        <p>Winner</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/internshala.jpg"
                        alt="First slide"
                       
                        />
                        <Carousel.Caption>
                        <h3>Internshala Talk</h3>
                        <p>Student Partner</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/googlecloud.png"
                        alt="First slide"
                        height="550"
                       
                        />
                        <Carousel.Caption>
                        <h3 style={{color:"black"}}>30 Days Google Cloud</h3>
                        <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        
        );
    }
};