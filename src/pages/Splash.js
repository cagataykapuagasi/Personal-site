import React from "react";
import "../App.css";
import { fadeIn } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import { Icons, Container, Button } from "../components";
import { observer, inject } from "mobx-react";

class Splash extends React.Component {
  state = {
    showIcons: false,
    showJob: false,
    showContact: false,
    showButton1: false,
    showButton2: false,
    showWords: false,
    borderStyle1: "transparent",
    borderStyle2: "transparent"
  };

  componentDidMount() {
    this.showItemsLater();
  }

  showItemsLater = () => {
    const data = [
      { name: "showJob", ms: 150 },
      { name: "showIcons", ms: 300 },
      { name: "showButton1", ms: 450 },
      { name: "showButton2", ms: 600 },
      { name: "showWords", ms: 750 },
      { name: "showContact", ms: 900 }
    ];

    data.forEach(item => {
      setTimeout(() => {
        this.setState({
          [item.name]: true
        });
      }, item.ms);
    });
  };

  goToBlog = () => {
    this.props.history.push("/blog");
  };

  openGitub = () => {
    window.open("https://github.com/cagataykapuagasi/Personal-site");
  };

  render() {
    const {
      showIcons,
      showJob,
      showContact,
      borderStyle1,
      borderStyle2,
      showButton1,
      showButton2,
      showWords
    } = this.state;

    return (
      <Container>
        <div className={css(styles.main)}>
          <p className={css(styles.name)}>Çağatay Kapuağası</p>
          {showJob && <p className={css(styles.job)}>Computer Science</p>}

          {showIcons && (
            <div className={css(styles.icon)}>
              <Icons size={40} type="youtube" />
              <Icons size={40} type="twitter" />
              <Icons size={40} type="instagram" />
              <Icons size={40} type="linkedin" />
              <Icons size={40} type="facebook" />
            </div>
          )}

          {showButton1 && (
            <Button
              borderColor={borderStyle1}
              onClick={this.goToBlog}
              text="Blog"
              style={styles.button}
              textStyle={styles.buttonText}
              onMouseLeave={() =>
                this.setState({ borderStyle1: "transparent" })
              }
              onMouseOver={() => this.setState({ borderStyle1: "white" })}
            />
          )}

          {showButton2 && (
            <Button
              borderColor={borderStyle2}
              onClick={this.openGitub}
              text="Github"
              style={styles.button}
              textStyle={styles.buttonText}
              onMouseLeave={() =>
                this.setState({ borderStyle2: "transparent" })
              }
              onMouseOver={() => this.setState({ borderStyle2: "white" })}
            />
          )}

          {showWords && (
            <p className={css(styles.word)}>
              I have no special talents. I am only passionately curious.
              <br />
              A.Einstein{" "}
            </p>
          )}
        </div>

        {showContact && (
          <p className={css(styles.contact)}>
            Contact: cagataykapuagasi@gmail.com
          </p>
        )}
      </Container>
    );
  }
}

export default inject("root")(observer(Splash));

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },
  name: {
    animationName: fadeIn,
    animationDuration: "2s",
    fontSize: 80,
    fontFamily: "AvenirNext-UltraLightItalic",
    top: 100,
    position: "relative",
    webkitTouchCallout: "none",
    webkitUserSelect: "none",
    khtmlUserSelect: "none",
    mozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none"
  },
  job: {
    animationName: fadeIn,
    animationDuration: "2s",
    fontSize: 30,
    fontFamily: "AvenirNext-UltraLight",
    webkitTouchCallout: "none",
    webkitUserSelect: "none",
    khtmlUserSelect: "none",
    mozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none"
  },
  word: {
    animationName: fadeIn,
    animationDuration: "2s",
    fontSize: 20,
    fontFamily: "AvenirNext-UltraLight",
    webkitTouchCallout: "none",
    webkitUserSelect: "none",
    khtmlUserSelect: "none",
    mozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
    marginTop: 150,
    display: "flex"
  },
  icon: {
    animationName: fadeIn,
    animationDuration: "2s",
    marginBottom: 40
  },
  button: {
    animationName: fadeIn,
    animationDuration: "2s",
    height: 40,
    width: 110,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: 20,
    backgroundColor: "#0D8B98",
    borderWidth: 2,
    borderRadius: 35,
    borderStyle: "solid"
  },
  buttonText: {
    fontFamily: "AvenirNext-MediumItalic",
    fontSize: 18,
    webkitTouchCallout: "none",
    webkitUserSelect: "none",
    khtmlUserSelect: "none",
    mozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none"
  },
  contact: {
    animationName: fadeIn,
    animationDuration: "2s",
    position: "absolute",
    bottom: 10,
    right: 50,
    fontFamily: "AvenirNext-Italic"
  }
});
