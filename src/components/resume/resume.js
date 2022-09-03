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
                          <p className="  twelve columns"> Graduated with GPA {item.GPA}</p>
                          
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
                          <h5>Project 1 : {item.project1}</h5>
                          <div className="row item">
                          <span className="  twelve columns under">Job Description </span>
                          <span className="  twelve columns" > 1. Build and maintain CRM Ruma.id with InfyCRM Laravel (Front-end and Back-end)</span>
                          <span className="  twelve columns"> 2. Provide API for integrating data between 3 Systems (Apps, CRM, and Wordpress)</span>
                          <span className="  twelve columns"> 3. Import and Export data in CRM System</span>
                          <span className="  twelve columns"> 4. Prepare CSV accounts data before import data in CRM System Rumaid</span>
                          <span className="  twelve columns"> 5. Update brochure and pricelist project Rumaid in CRM System</span>
                          <span className="  twelve columns"> 6. Design database structure and flow data system with Data Analyst</span>
                          </div>
                          <p></p>
                          <h5>Project 2 : {item.project2}</h5>
                          <div className="row item">
                          <span className="  twelve columns under">Job Description </span>
                          <span className="  twelve columns" > 1. Build and maintain CRM U-Lab with suiteCRM</span>
                          <span className="  twelve columns"> 2. Integrate whatsapp to CRM System by Whatsapp API Third Party</span>
                          <span className="  twelve columns"> 3. Make result test template by HTML/CSS in CRM System</span>
                          <span className="  twelve columns"> 4. Design database structure and flow data system with CEO</span>
                          <span className="  twelve columns"> 5. Collaborate with another Lab for integrating data patient test</span>
                          </div>
                          
                        
                          <br/>
                          <h3>{item.companyName2}</h3>
                          <div className="row item">
                          <h4 className="twelve columns">
                          {item.job2} 
                          | {item.year2} </h4>
                          </div>
                          <h5>Project : {item.project3}</h5>
                          <div className="row item">
                          <span className="  twelve columns under">Job Description </span>
                          <span className="  twelve columns" > 1. Made CRUD function for manage "Data Warga"</span>
                          <span className="  twelve columns"> 2. Made function for registration and login</span>
                          <span className="  twelve columns"> 3. Made CRUD function for profile page</span>
                          </div>
                          <br/>
                          <h3>{item.companyName3}</h3>
                          <div className="row item">
                          <h4 className="twelve columns">
                          {item.job3} 
                          | {item.year3} </h4>
                          </div>
                          <h5>Project : {item.project4}</h5>
                          <div className="row item">
                          <span className="  twelve columns under">Job Description </span>
                          <span className="  twelve columns" > 1. Built a SFS Law Office website using Laravel Framework</span>
                          <span className="  twelve columns"> 2. Made visitor page, user page, and admin page (backend and front-end)</span>
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
                          <span className="  twelve columns hitam">  {item.skillDb1} <br/> NoSQL (Firebase / MongoDB) (a little bit) </span>
                          </div>

                          <br/>
                          <h4>{item.skillName3}</h4>
                          <div className="row item">
                          <span className="  twelve columns hitam">   {item.skillSoftware3} <br/> {item.skillSoftware4}
                          <br/> {item.skillSoftware5}
                          </span>
                          </div>

                          <br/>
                          <h4>{item.skillName4}</h4>
                          <div className="row item">
                          <span className="  twelve columns hitam">  {item.skillChatbot1}
                          <br/>{item.skillChatbot2} <br/> {item.skillChatbot3} <br/> {item.skillChatbot4}
                          </span>
                          </div>
                          <br/>
                          <h4>{item.skillName5}</h4>
                          <div className="row item">
                          <span className="  twelve columns hitam">  {item.skillVersion1}
                          </span>
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