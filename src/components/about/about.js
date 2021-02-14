import React, { Component } from 'react';
export default class About extends Component {
  render() {
  let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/15115364.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.email}</span>
       					   </p>
                  </div>
                  <div className="columns download">
            <p>
            <a href="https://drive.google.com/file/d/1wd1frjtA0Ir5wCOhn-RFToVyqyJXSf26/view?usp=sharing" className="button"><i className="fa fa-download" />Download CV</a>
          </p>
        </div>
               </div>
            </div>
         </div>
      </section>

     
      </React.Fragment>
    );
  }
}