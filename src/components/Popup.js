import React from 'react';
import { Container, Button } from './';
import { observer, inject } from 'mobx-react';
import { StyleSheet, css } from 'aphrodite';

class InPopup extends React.Component {

  state = {
    username: '',
    password: '',
    borderStyle: '#F5515F'
  }

  onMouseLeave = () => {
    this.setState({ borderStyle: '#F5515F' })
  }

  onMouseOver = () => {
    this.setState({ borderStyle: 'white' })
  }

  loginClick = () => {
    const { blog } = this.props.root;
    const { password, username } = this.state;
    blog.loginAdmin(username, password);
  }

  render() {
    const { borderStyle, password, username } = this.state;
    
    return (
      <Container className={css(styles.container)}>
        <p className={css(styles.text)}>Only Admin</p>
        <input className={css(styles.input)} value={username} placeholder="username" onChange={(event) => this.setState({ username: event.target.value })} />
        <input className={css(styles.input)} value={password} placeholder="password" onChange={(event) => this.setState({ password: event.target.value })} />
        <Button borderColor={borderStyle} onClick={this.loginClick} text="Login" style={styles.button} textStyle={styles.buttonText}
          onMouseLeave={this.onMouseLeave} onMouseOver={this.onMouseOver}
        />
      </Container>
    )
  }
}

export default inject('root')(observer(InPopup));

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: 400,
    backgroundColor: '#1d1d1d',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    height: 20,
    width: 200,
    margin: 10,
    borderRadius: 5
  },
  text: {
    fontSize: 60,
    fontFamily: "AvenirNext-UltraLight",
    webkitTouchCallout: 'none',
    webkitUserSelect: 'none',
    khtmlUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
})