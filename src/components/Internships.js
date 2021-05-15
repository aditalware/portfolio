import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
class Internships extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container fade" style={{textAlign:"center"}}>
                <h1>INTERNSHIPS</h1>
                <div className="row">
                    <div className="col col-3 col-md-2 col-sm-1 d-xs-none">

                    </div>
                    <div className="col col-6 col-md-8 col-sm-12">
                        <Card>
                            <Card.Img src="/images/internship.jpg"/>
                            <Card.Title>Frontend Developer Intern</Card.Title>
                            <Card.Subtitle>Company : Plaqsha</Card.Subtitle>
                            <Card.Body style={{textAlign:"left"}}>
                                <Card.Text>
                                • Developed Admin Panel for managing users
                                
                                </Card.Text>
                                <Card.Text>
                                • Developed Module management panel for managing learning paths
                                </Card.Text>

                                <Card.Text>
                                • Integrated API’s forjoint functionality

                                </Card.Text>
                            </Card.Body>
                        </Card>


                    </div>
                    <div className="col col-3 col-md-2 col-sm-1 d-xs-none">

                   </div>

                </div>
                
            </div>
        );
    }
}

Internships.propTypes = {};

export default Internships;
