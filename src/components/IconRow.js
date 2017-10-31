import React, { Component } from 'react';
import fb_icon from './facebook_icon.png';
import li_icon from './linkedin_icon.png';
import '../App.css';

class IconRow extends Component {

  render() {
    return (
      <div className="footer-icons">
        <a href="https://www.facebook.com/sunnsui" className="icon">
          <img src={fb_icon} className="icon" alt="fb_icon"   />
        </a>
        <a href="https://www.linkedin.com/in/tborresen/" className="icon">
          <img src={li_icon} className="icon" alt="li_icon" />
        </a>
      </div>
    );
  }
}

export default IconRow;
