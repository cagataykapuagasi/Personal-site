import React from 'react';
import { FaYoutube, FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { StyleSheet, css } from 'aphrodite';
import '../App.css';


export default class Icons extends React.PureComponent {

  state = {
    color: 'white'
  }

  onMouseOver = () => {
    const { type } = this.props;
    
    if (type === 'youtube') {
      this.setState({
        color: 'red'
      })
    }
    else if (type === 'twitter') {
      this.setState({
        color: 'skyblue'
      })
    }
    else if (type === 'instagram') {
      this.setState({
        color: '#bc2a8d'
      })
    }
    else if (type === 'linkedin') {
      this.setState({
        color: '#0077b5'
      })
    }
    else {
      this.setState({
        color: '#3b5998'
      })
    }
  }

  onMouseLeave = () => {
    this.setState({
      color: 'white',
    })
  }

  onClick = () => {
    const { type } = this.props;
    
    if (type === 'youtube') {
      window.open("https://www.youtube.com/channel/UCDBeGxkRfzV4I_bffXtJ79w");
    }
    else if (type === 'twitter') {
      window.open("https://twitter.com/Jus_tect");
    }
    else if (type === 'instagram') {
      window.open("https://www.instagram.com/ccagatayk");
    }
    else if (type === 'linkedin') {
      window.open("https://www.linkedin.com/in/cagataykapuagasi");
    }
    else {
      window.open("https://www.facebook.com/profile.php?id=1114208749");
    }
  }

  Switcher = () => {
    const { type } = this.props;
    const { color } = this.state;

    if (type === 'youtube') {
      return <FaYoutube
      onMouseLeave={this.onMouseLeave}
      onMouseOver={this.onMouseOver}
      onClick={this.onClick} className="Icon"
      style={{ color }} />
    }
    else if (type === 'twitter') {
      return <FaTwitter
      onMouseLeave={this.onMouseLeave}
      onMouseOver={this.onMouseOver}
      onClick={this.onClick} className="Icon"
      style={{ color }} />
    }
    else if (type === 'instagram') {
      return <FaInstagram
      onMouseLeave={this.onMouseLeave}
      onMouseOver={this.onMouseOver}
      onClick={this.onClick} className="Icon"
      style={{ color }} />
    }
    else if (type === 'linkedin') {
      return <FaLinkedin
      onMouseLeave={this.onMouseLeave}
      onMouseOver={this.onMouseOver}
      onClick={this.onClick} className="Icon"
      style={{ color }} />
    }
    else {
      return <FaFacebook
      onMouseLeave={this.onMouseLeave}
      onMouseOver={this.onMouseOver}
      onClick={this.onClick} className="Icon"
      style={{ color }} />
    }
    
  }

  render() {
    const { Switcher } = this;

    return (
      <Switcher />
    )
  }
}
