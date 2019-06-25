import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Container, MyLoader } from '../';
import Post from './Post';


export default class PostList extends React.Component {




  render() {
    const { data } = this.props;

    console.log(data);

    if (!data) {
      return (
        <Container className={css(styles.main)}>
          <MyLoader />
          <MyLoader />
        </Container>
      )
    }

    return (
      <Container>
        {data && data.map((item, index) => {
          return (
            <Post data={item} index={index} />
          )
        })}

      </Container>
    )
  }
}


const styles = StyleSheet.create({
  main: {
    display: 'flex',
    position: 'relative',
    height: '120vh',
    width: '113.5vh',
    flexDirection: 'column',
  }
})