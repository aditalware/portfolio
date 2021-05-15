import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';


function Feedback(props){
    return(
        <Card style={{ width: '18rem' }} className={"col col-5"}>
        <div className="arrow-right" style={{borderLeftColor:'#'+Math.floor(Math.random()*16777215).toString(16)}}>

        </div>
        <Card.Body>
            <Card.Title>{props.fullname}</Card.Title>
            <StarRatingComponent value={props.rating} className="rating-star"/>
            <Card.Text>{props.feedback}</Card.Text>
        </Card.Body>
     </Card>
    )
}

class ContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            fullname:"",
            feedback:"",
            email:"",
            rating:1,
            status:'Please send your Feedback',
            cards:[]
        };
        this.changeFullName=this.changeFullName.bind(this);
        this.changeFeedback=this.changeFeedback.bind(this);
        this.changeEmail=this.changeEmail.bind(this);
        this.setDefault=this.setDefault.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);


    }

    async componentDidMount(){
      await axios.get('https://aditalware-backend-portfolio.herokuapp.com/fetchlist')
        .then((data)=>{
            this.setState({cards:data.data})
        })
        .catch((err)=>{this.setState({cards:[]})})
    }
    

    changeFullName=(e)=>{
        this.setState({fullname:e})
    }
    changeFeedback=(e)=>{
        this.setState({feedback:e})
    }
    changeEmail=(e)=>{
        this.setState({email:e})
    }
    

    handleSubmit=(event)=>{
        event.preventDefault();
        const user={
            fullname:this.state.fullname,
            rating:this.state.rating,
            feedback:this.state.feedback,
            email:this.state.email,
        }

        axios.post('https://aditalware-backend-portfolio.herokuapp.com/feedback',user)
        .then((data)=>{this.setDefault();
            this.props.setflag(true)
            setTimeout(()=>{
                this.props.setflag(false)

            },4000)
        })
        .catch((err)=>console.log(err))

    }

    setDefault=()=>{
        this.setState({fullname:''})
   
        this.setState({feedback:''})
    
        this.setState({email:''})
  
        

        this.setState({status:"Thank You So much for your feedback"})

        setTimeout(()=>{
            this.setState({status:"Please Send your feedback"})
        },2000)
    
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }

    render() {
        return (
            <div className="fade" style={{textAlign:"center"}}>
               
                <div className="container">

                    <div className="row">

                    <div className={"col col-6 col-xs-12"}>

                    <h3 >Feel free to contact and give Feedback</h3>
                    <div className="form-div">
                    <form onSubmit={this.handleSubmit}>
                        <label>Full Name</label>
                        <input
                        type="text"
                        placeholder="Full Name"
                        onChange={(e)=>{this.changeFullName(e.target.value)}}
                        value={this.state.fullname}
                        className="form-control form-group"
                        />
                       
                        <label>Email ID</label>

                        <input
                        type="text"
                        placeholder="Email"
                        onChange={(e)=>{this.changeEmail(e.target.value)}}
                        value={this.state.email}
                        className="form-control form-group"
                        />

                        

                        <label>FeedBack</label>
                        <textarea
                        type="text"
                        rows={5}
                        cols={5}
                        placeholder="Give your valuable feedback"
                        onChange={(e)=>{this.changeFeedback(e.target.value)}}
                        value={this.state.feedback}
                        className="form-control form-group"
                        />

                       <label>Rating</label>
                        <br></br>
                        <StarRatingComponent 
                        className="form-group "
                        style={{border:"0px"}}
                        name="rate1" 
                        starCount={5}
                        editing={true}
                        value={this.state.rating}
                        onStarClick={this.onStarClick.bind(this)}
                        />
                        <br></br>


                        <input type="submit" className="btn btn-success btn-block" value="Submit"/>

                        <input  className="btn btn-primary btn-block" value={this.state.status}/>

                    </form>

                </div>
            </div>

            <div className={"col col-6 col-xs-12 hiddenbar"} >

            <div className="row">

                     {
                         this.state.cards.map((card,i)=>
                         <Feedback
                         fullname={card.fullname}
                         email={card.email}
                         rating={card.rating}
                         feedback={card.feedback}
                         key={i}
                         />
                         )
                     }
                      
                      


            </div>

             
            </div>
                    </div>
                    {/* row */}
            </div>
           
         </div>
        );
    }
}


export default ContactMe;
