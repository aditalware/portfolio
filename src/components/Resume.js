import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './Education';
import Training from './Training';
import Accompolishment from './Accompolishment';
class Resume extends Component{

     render()
     {
         return(
             <div>
             <Grid>
               <Cell col={4}>
                   <div style={{textAlign: 'center'}}>
                         <img
                         src="/images/myprofile.png"
                         alt="avatar"
                         style={{height:'200px'}}
                         />
                   </div>

                   <h2 style={{paddingTop:'2em'}}>
                    Adit Alware
                   </h2>
                
                   <h4 style={{color:'grey'}}>
                    C++ Programmer | Web Developer
                   </h4>
                   <hr style={{borderTop:'3px solid #833fb2',width:"50%"}}/>


                   <p>
                   Hardworking and Enthusiastic Computer Science Undergraduate
                   </p>

                   <hr style={{borderTop:'3px solid #833fb2',width:"50%"}}/>

                   
                   <p>
                   <strong>Skills :</strong> C++ Intermediate, ReactJs, NodeJs Basics, Bootstrap,Html ,CSS ,SQL , Python Basics
                   </p>

                   <hr style={{borderTop:'3px solid #833fb2',width:"50%"}}/>


                   <h5>
                   Address
                   </h5>
                   <p>
                   107 Vidhya Nagar ,Ujjain , M.P
                   </p>



               </Cell>

               <Cell col={8} className="resume-right-col">
                  <h2>Education</h2>

                  <Education
                  year1={2004}
                  year2={2016}
                  schoolname="Christu Jyoti Convent Senior Secondary School"
                  type="Secondary Science"
                  resulttype="CGPA"
                  credits="10/10"
                  />

                  <Education
                  year1={2016}
                  year2={2018}
                  schoolname="IBS Global Academy"
                  type="Higher Secondary"
                  resulttype="CGPA"
                  credits="10/10"
                  />

                  <Education
                  year1={2018}
                  year2={2022}
                  schoolname="Indian Institute of Information Technology Vadodara"
                  type="BTECH Computer Science"
                  resulttype="CPI"
                  credits="9.61/10"
                  />

                  <hr style={{borderTop:'3px solid #833fb2',width:"50%"}}/>


                  <h2>
               Trainings
               </h2>

               <Training
               time="Apr 2020 - Jun 2020"               
               Course="ReactJS Frontend Development"
               certified="Coursera"

               />
               <Training
               time="Apr 2020 - Jun 2020"               
               Course="Front End Web UI Framework-Bootstrap4"
               certified="Coursera"

               />
               <Training
               time="Mar 2020 - Apr 2020"               
               Course="Python Programming"
               certified="Coursera"

               />
               <Training
               time="Dec 2019 - Jan 2020"               
               Course="Structured Query Language" 
               certified="Coursera"

               />
               <Training
               time="Jun 2019 - Jul 2019"               
               Course="C++ Programming"
               certified="Thinking Machines Pvt Lmtd."
               />

               <h2>
               Accompolishments
               </h2>

               <Accompolishment
               time="October 2019"
               name="HACKIIITV 2019 RUNNER_UP"
               description="About Presenting Technical Solutions for Public Needs and Problems"
               />

               <Accompolishment
               time="March 2019"
               name="IIITV Cerebro Vision Winner"
               description="Presentation of Basics of UI/UX for University Improvement System"
               />

               <Accompolishment
               time="February 2020 - March 2020"
               name="Internshala Student Partner"
               description="Helping out students to learn about internships and their importance"
               />
               
              
               </Cell>

               

             </Grid>
             </div>
         );
     }

}
export default Resume;