import React from 'react';
import { Container, InPopup, Button } from '../components';
import { MenuList } from '../components/Menu';
import Popup from "reactjs-popup";
import { StyleSheet, css } from 'aphrodite';


export default class Blog extends React.Component {

  state = {
    borderStyle: '#F5515F'
  }

  popupButton = () => {
    const { borderStyle } = this.state;

    return (
      <Button borderColor={borderStyle} onClick={this.goToBlog} text="Login" style={styles.button} textStyle={styles.buttonText}
        onMouseLeave={() => this.setState({ borderStyle: '#F5515F' })} onMouseOver={() => this.setState({ borderStyle: 'white' })}
      />
    )
  }

  render() {
    const data = ["Dashboard", "React", "React Native", "C#", "C", "Database"]

    return (
      <Container>
        <MenuList data={data} />
        <Popup contentStyle={{ padding: 0, borderWidth: 0, backgroundColor: 'transparent', height: 500, width: 400 }} modal trigger={this.popupButton} position="center center">
          <InPopup />
        </Popup>
      </Container>
    )
  }
}


const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: '#F5515F',
    borderWidth: 2,
    borderRadius: 35,
    borderStyle: 'solid',
    position: 'absolute',
    right: 50,
    top: 40,
  },
  buttonText: {
    fontFamily: 'AvenirNext-MediumItalic',
    fontSize: 16,
    webkitTouchCallout: 'none',
    webkitUserSelect: 'none',
    khtmlUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  }
})