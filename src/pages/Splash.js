import React from 'react';
import '../App.css';
import { fadeIn } from 'react-animations'
import { StyleSheet, css } from 'aphrodite';
import { Icons } from '../components';

export default class Splash extends React.Component {

  state = {
    showIcons: false,
    showJob: false,
    showContact: false,
    showButton1: false,
    showButton2: false,
    showWords: false,
    borderStyle1: '',
    borderStyle2: '',
  }

  componentDidMount() {
    this.showItemsLater();
  }

  showItemsLater = () => {
    setTimeout(() => {
      this.setState({
        showJob: true
      })
    }, 150)

    setTimeout(() => {
      this.setState({
        showIcons: true
      })
    }, 300)

    setTimeout(() => {
      this.setState({
        showButton1: true
      })
    }, 450)

    setTimeout(() => {
      this.setState({
        showButton2: true
      })
    }, 600)

    setTimeout(() => {
      this.setState({
        showWords: true
      })
    }, 750)

    setTimeout(() => {
      this.setState({
        showContact: true
      })
    }, 1000)
  }

  

  goToBlog = () => {
    this.props.history.push('/blog');
  }

  openGitub = () => {
    window.open('https://github.com/cagataykapuagasi/Personal-site');
  }

  render() {
    const { showIcons, showJob, showContact, borderStyle1, borderStyle2, showButton1, showButton2, showWords } = this.state;

    return (
      <div>
        <div className={css(styles.main)}>
          <p className={css(styles.name)}>Çağatay Kapuağası</p>
          {showJob && <p className={css(styles.job)}>Computer Science</p>}

          {showIcons && <div className={css(styles.icon)} >
            <Icons type="youtube" />
            <Icons type="twitter" />
            <Icons type="instagram" />
            <Icons type="linkedin" />
            <Icons type="facebook" />
          </div>}

          {showButton1 && <div style={{ borderStyle: borderStyle1 }} onClick={this.goToBlog} onMouseLeave={() => this.setState({ borderStyle1: '' })} 
            onMouseOver={() => this.setState({ borderStyle1: 'solid' })} className={css(styles.button)}>
            <p className={css(styles.buttonText)}>Blog</p>
          </div>}

          {showButton2 && <div style={{ borderStyle: borderStyle2 }} onClick={this.openGitub} onMouseLeave={() => this.setState({ borderStyle2: '' })}
            onMouseOver={() => this.setState({ borderStyle2: 'solid' })} className={css(styles.button)}>
            <p className={css(styles.buttonText)}>Github</p>
          </div>}

          {showWords && <p className={css(styles.word)}>I have no special talents. I am only passionately curious.<br/>A.Einstein </p>}


        </div>

        
        {showContact && <p className={css(styles.contact)}>Contact: cagataykapuagasi@gmail.com</p>}

      </div>
    );
  }
}


const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    animationName: fadeIn,
    animationDuration: '2s',
    fontSize: 80,
    fontFamily: "AvenirNext-UltraLightItalic",
    top: 100,
    position: 'relative',
    webkitTouchCallout: 'none',
    webkitUserSelect: 'none',
    khtmlUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  job: {
    animationName: fadeIn,
    animationDuration: '2s',
    fontSize: 30,
    fontFamily: "AvenirNext-UltraLight",
    webkitTouchCallout: 'none',
    webkitUserSelect: 'none',
    khtmlUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  word: {
    animationName: fadeIn,
    animationDuration: '2s',
    fontSize: 20,
    fontFamily: "AvenirNext-UltraLight",
    webkitTouchCallout: 'none',
    webkitUserSelect: 'none',
    khtmlUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    marginTop: 150,
    display: 'flex'
  },
  icon: {
    animationName: fadeIn,
    animationDuration: '2s',
    marginBottom: 40,
  },
  button: {
    animationName: fadeIn,
    animationDuration: '2s',
    height: 40,
    width: 110,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#F5515F',
    borderWidth: 2,
    borderRadius: 35,
  },
  buttonText: {
    fontFamily: 'AvenirNext-MediumItalic',
    fontSize: 18,
    webkitTouchCallout: 'none',
    webkitUserSelect: 'none',
    khtmlUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  contact: {
    animationName: fadeIn,
    animationDuration: '2s',
    position: 'absolute',
    bottom:10,
    right:50,
    fontFamily: 'AvenirNext-Italic',
  }
})

