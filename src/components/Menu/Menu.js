import React from 'react';
import { StyleSheet, css } from 'aphrodite';


export default class Menu extends React.Component {

  state = {
    color: 'white',
  }

  onClick = () => {
    this.setState({
      color: '#F5515F'
    })
  }

  render() {
    const { text, color, onClick, background, onMouseOver, onMouseLeave } = this.props;
    //const { color } = this.state;

    return (
      <div style={{ background, margin: 50, borderRadius: 50, padding: 10 }} >
        <p onMouseLeave={onMouseLeave}  onMouseOver={onMouseOver}  onClick={onClick} style={{ color, text, background }} className={css(styles.contact)} >{text}</p>
      </div>
    )
  }
}


const styles = StyleSheet.create({
  contact: {
    position: 'relative',
    fontFamily: 'AvenirNext-Italic',
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
  }
})