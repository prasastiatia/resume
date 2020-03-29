import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {/*generated code*/}
      <footer id="contactus">
  <div className="row">
    <div className="twelve columns">
      <ul className="social-links">
        <li><a href="mailto:prasastiaas@gmail.com"><i className="fa fa-google-plus" /></a></li>
        <li><a href="https://www.linkedin.com/in/prasastia-aryani-saliha"><i className="fa fa-linkedin" /></a></li>
        <li><a href="https://www.github.com/prasastiatia"><i className="fa fa-github" /></a></li>
      </ul>
      <ul className="copyright">
        <li>© Copyright 2020 Prasastia Resume</li>   
      </ul>
    </div>
    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
  </div>
</footer> {/* Footer End*/}

     
      </React.Fragment>
    );
  }
}