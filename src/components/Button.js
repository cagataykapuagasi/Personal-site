import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { fadeIn } from 'react-animations'


export default class Button extends React.Component {

  render() {
  const { borderColor, text, onClick, onMouseLeave, onMouseOver, style, textStyle } = this.props;

    return (
      <div style={{ borderColor }} onClick={onClick} onMouseLeave={onMouseLeave}
        onMouseOver={onMouseOver} className={css(style ? style: styles.button)}>
        <p className={css(textStyle ? textStyle : styles.buttonText)}>{text}</p>
      </div>
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
    marginTop: 20,
    backgroundColor: '#F5515F',
    borderWidth: 2,
    borderRadius: 35,
    borderStyle: 'solid',
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