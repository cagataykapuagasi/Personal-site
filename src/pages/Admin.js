import React from 'react';
import { Container, Button } from '../components';
import { StyleSheet, css } from 'aphrodite';
import { observer, inject } from 'mobx-react';


class Admin extends React.Component {

  state = {
    title: '',
    text: '',
    field: '',
  }

  getTime = () => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    const day = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
    const month = time.getMonth() + 1 < 10 ? '0' + time.getMonth() : time.getMonth();
    const year = time.getFullYear();

    return hours + ':' + minutes + ' ' + day + '/' + month + '/' + year;
  }

  createPost = () => {
    const { title, text, field } = this.state;
    const { blog } = this.props.root;

    const data = {
      title,
      text,
      field,
      time: this.getTime()
    }

    blog.addPost(data, this.props.history);
  }

  render() {
    const { title, text, field } = this.state;

    return (
      <Container className={css(styles.main)}>
        <input className={css(styles.title)} value={title} placeholder="Title"
          onChange={(event) => this.setState({ title: event.target.value })} />
        <textarea className={css(styles.text)} value={text} placeholder="Text"
          onChange={(event) => this.setState({ text: event.target.value })} />
        <Container className={css(styles.right)}>
          <input className={css(styles.field)} value={field} placeholder="Field"
            onChange={(event) => this.setState({ field: event.target.value })} />
          <Button onClick={this.createPost} text="Post"
            style={styles.button} textStyle={styles.buttonText} />
        </Container>
      </Container>
    )
  }
}

export default inject('root')(observer(Admin));

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    display: 'flex',
  },
  title: {
    height: 25,
    width: '90vh',
    margin: 10,
    borderRadius: 5,
    fontSize: 18
  },
  text: {
    height: '90vh',
    width: '90vh',
    margin: 10,
    borderRadius: 5,
    fontSize: 18
  },
  right: {
    position: 'absolute',
    height: '25vh',
    width: '25vh',
    right: 5,
    top: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  field: {
    height: 25,
    width: 160,
    margin: 10,
    borderRadius: 5,
  },
  button: {
    height: 35,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginTop: 20,
    backgroundColor: '#F5515F',
    borderRadius: 35,
  }
})