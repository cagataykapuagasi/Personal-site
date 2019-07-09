import React from 'react';
import { Container, Button } from './';
import { observer, inject } from 'mobx-react';
import { StyleSheet, css } from 'aphrodite';
import { photoUri } from '../util/strings';



class InPopup extends React.Component {

  state = {
    username: '',
    password: '',
    borderStyle: 'transparent',
  }

  onMouseLeave = () => {
    this.setState({ borderStyle: 'transparent' })
  }

  onMouseOver = () => {
    this.setState({ borderStyle: 'white' })
  }

  loginClick = () => {
    const { password, username } = this.state;
    const { blog } = this.props.root;
    const { history } = this.props;

    blog.buttonText = 'Loading..';
    blog.loginAdmin(username, password, history);
  }

  render() {
    const { borderStyle, password, username } = this.state;
    const { buttonText } = this.props.root.blog;
    
    return (
      <Container className={css(styles.container)}>
        <img className={css(styles.image)} src={photoUri} />
        <input className={css(styles.input)} value={username} placeholder="Email" onChange={(event) => this.setState({ username: event.target.value })} />
        <input type='password' className={css(styles.input)} value={password} placeholder="Password" onChange={(event) => this.setState({ password: event.target.value })} />
        <Button borderColor={borderStyle} onClick={this.loginClick} text={buttonText}
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
    backgroundColor: '#161a20',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    height: 25,
    width: 200,
    margin: 10,
    borderRadius: 5,
    borderColor: 'gray',
    backgroundColor: '#d4d4d4',
    borderWidth: 4
  },
  image: {
    height: 90,
    width: 90,
    marginBottom: 30,
    position: 'relative',
    borderRadius: 45
  }
})