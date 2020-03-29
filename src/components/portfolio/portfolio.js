import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns ">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className=" column portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl1}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name1}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <br/>

                  <div className="item-wrap">
                    <a href="#modal-02">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <br/>
                  <div className="item-wrap">
                    <a href="#modal-03">
                      <img src={`${item.imgurl2}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name2}</h5>
                          <p>{item.description2}</p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <br/>
                  <div className="item-wrap">
                    <a href="#modal-04">
                      <img src={`${item.imgurl3}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name3}</h5>
                          <p>{item.description3}</p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <br/>
                  <div className="item-wrap">
                    <a href="#modal-05">
                      <img src={`${item.imgurl4}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name4}</h5>
                          <p>{item.description4}</p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <br/>
                  <div className="item-wrap">
                    <a href="#modal-06">
                      <img src={`${item.imgurl5}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name5}</h5>
                          <p>{item.description5}</p>
                        </div>
                      </div>
                    </a>
                  </div>

                  </div>
                
              )
            })
          }
          </div>
                    
        </div>
      </div>
      
      
      <div id="modal-01" class="popup-modal mfp-hide">
      <div class="sliders">
	    	<figure>
        <div class="slide">
		      <img class="scale-with-grid" src="images/portfolio/sfs.png" alt="" />
        </div>
        <div class="slide">
		      <img class="scale-with-grid" src="images/portfolio/sfs1.png" alt="" />
        </div>
        </figure>
        </div>
		      <div class="description-box">
			      <h4>SFS Law Office Website</h4>
			      <p>This website is a SFS Law Office website located in Depok. 
              The main feature on this website is client scheduling where clients can make schedules with lawyers.
            </p>
               <span class="categories"><i class="fa fa-tag"></i>Website, Laravel, Law</span>
		      </div>

            <div class="link-box">
		         <a class="popup-modal-dismiss">Close</a>
            </div>
          
	      </div>

        <div id="modal-02" class="popup-modal mfp-hide">

		      <img class="scale-with-grid" src="images/portfolio/service.JPG" alt="" />

		      <div class="description-box">
			      <h4>Service Car Website</h4>
			      <p>
            This website is a website for car service. The main feature on this website is scheduling of car services.
            </p>
               <span class="categories"><i class="fa fa-tag"></i>Website, Laravel</span>
		      </div>

            <div class="link-box">
		         <a class="popup-modal-dismiss">Close</a>
            </div>

	      </div>

        <div id="modal-03" class="popup-modal mfp-hide">

		      <img class="scale-with-grid" src="images/portfolio/pkk.jpg" alt="" />

		      <div class="description-box">
			      <h4>Management Information System Website for PKK Kota Depok</h4>
			      <p>
            This website is a website for managing data contained in Depok City PKK. 
            </p>
               <span class="categories"><i class="fa fa-tag"></i>Website, Government</span>
		      </div>

            <div class="link-box">
		         <a class="popup-modal-dismiss">Close</a>
            </div>

	      </div>
        
        <div id="modal-04" class="popup-modal mfp-hide">
        <div class="sliders">
	    	<figure>
        <div class="slide">
        <img class="scale-with-grid" src="images/portfolio/fisika.png" alt="" />
        </div>
        <div class="slide">
        <img class="scale-with-grid" src="images/portfolio/fisika1.png" alt="" />
        </div>
        </figure>
        </div>
		      <div class="description-box">
			      <h4>Physics Learning Application</h4>
			      <p>
            This application is a physics learning application for Class VIII Junior High School. 
            This application has 4 menus namely basic competencies, materials, quizzes, and exams. 
            </p>
               <span class="categories"><i class="fa fa-tag"></i>Desktop Application, Learning, Adobe Animate</span>
		      </div>

            <div class="link-box">
		         <a class="popup-modal-dismiss">Close</a>
            </div>

        </div>

        <div id="modal-05" class="popup-modal mfp-hide">
        <div class="sliders">
	    	<figure>
        <div class="slide">
        <img class="scale-with-grid" src="images/portfolio/gaji.jpg" alt="" />
        </div>
        <div class="slide">
        <img class="scale-with-grid" src="images/portfolio/gaji1.jpg" alt="" />
        </div>
        </figure>
        </div>
		      <div class="description-box">
			      <h4>Employee Payroll Information System Application</h4>
			      <p>
            This application is a desktop-based payroll system application. 
            This application can add employee data, view absences, and calculate employee salaries. 
            </p>
               <span class="categories"><i class="fa fa-tag"></i>Desktop Application, Employee Payroll, VB.NET</span>
		      </div>

            <div class="link-box">
		         <a class="popup-modal-dismiss">Close</a>
            </div>

        </div>

        <div id="modal-06" class="popup-modal mfp-hide">
        <div class="sliders">
	    	<figure>

			    <div class="slide">
            <img class="scale-with-grid" src="images/portfolio/kredit.jpg" alt="" />
          </div>

          <div class="slide">
          <img class="scale-with-grid" src="images/portfolio/kredit1.jpg" alt="" />
          </div>

        </figure>
        </div>
		      <div class="description-box">
			      <h4>Car Loan Transaction Application</h4>
			      <p>
            This application is a car loan transaction application. 
            The main feature of this application is calculating credit transactions. 
            This application is a desktop based application. 
            </p>
               <span class="categories"><i class="fa fa-tag"></i>Desktop Application, Car Loan, C++</span>
		      </div>

            <div class="link-box">
		         <a class="popup-modal-dismiss">Close</a>
            </div>

        </div>
        

  </section>
        );
  }
}
