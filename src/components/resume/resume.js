import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <div className="row item">
                          <h4 className="twelve columns">
                          {item.specialization} 
                          | {item.GradYear} </h4>
                          </div>
                          <div className="row item">
                          <p className="  twelve columns"> Graduated with GPA {item.GPA} <br/> {item.active}</p>
                          
                          </div>
                          
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>

        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work Experiences</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.experiences.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.companyName1}</h3>
                          <div className="row item">
                          <h4 className="twelve columns">
                          {item.job1} 
                          | {item.year1} </h4>
                          </div>
                          <div className="row item">
                          <p className="  twelve columns">  {item.jobDesc1} </p>
                          
                          </div>
                          <br/>
                          <h3>{item.companyName2}</h3>
                          <div className="row item">
                          <h4 className="twelve columns">
                          {item.job2} 
                          | {item.year2} </h4>
                          </div>
                          <div className="row item">
                          <p className="  twelve columns">  {item.jobDesc2} </p>
                          
                          </div>
                          <br/>
                          <h3>{item.companyName3}</h3>
                          <div className="row item">
                          <h4 className="twelve columns">
                          {item.job3} 
                          | {item.year3} </h4>
                          </div>
                          <div className="row item">
                          <p className="  twelve columns">  {item.jobDesc3} </p>
                          
                          </div>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>

         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

               {
                resumeData.skills && resumeData.skills.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h4>{item.skillName1}</h4>
                          <div className="row item">
                          <span className="  twelve columns hitam">  {item.skillWeb1}
                          <br/>{item.skillWeb2} <br/> {item.skillWeb3} <br/> {item.skillWeb4} 
                          <br/> {item.skillWeb5} <br/> {item.skillWeb6}
                          </span>
                          </div>

                          <br/>
                          <h4>{item.skillName2}</h4>
                          <div className="row item">
                          <span className="  twelve columns hitam">  {item.skillDb1} </span>
                          </div>

                          <br/>
                          <h4>{item.skillName3}</h4>
                          <div className="row item">
                          <span className="  twelve columns hitam">  {item.skillSoftware1}
                          <br/>{item.skillSoftware2} <br/> {item.skillSoftware3} <br/> {item.skillSoftware4}
                          <br/> {item.skillSoftware5}
                          </span>
                          </div>

                          <br/>
                          <h4>{item.skillName4}</h4>
                          <div className="row item">
                          <span className="  twelve columns hitam">  {item.skillChatbot1}
                          <br/>{item.skillChatbot2} <br/> {item.skillChatbot3} <br/> {item.skillChatbot4}
                          </span>

                          <br/>
                          <h4>{item.skillName5}</h4>
                          <div className="row item">
                          <span className="  twelve columns hitam">  {item.skillVersion1}
                          </span>
                          </div>
                          
                          </div>
                       </div>
                    </div>
                  )
                })
              }

   				
   			</div>

         </div>

      </section>
     
      </React.Fragment>
    );
  }
}