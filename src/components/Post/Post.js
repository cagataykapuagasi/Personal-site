import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Container, Button } from '../' ;


export default class Post extends React.Component {

  openFull = () => {
    const { index } = this.props;
    alert('coming soon');
  }

  render() {
    const { data } = this.props;

    

    return (
      <Container>
        <Button onClick={this.openFull} style={styles.button}
          textStyle={styles.buttonText} >
          <Container className={css(styles.header)} >
            <p className={css(styles.title)}>{data.title}</p>
          </Container>

          <div className={css(styles.part)} >
            <p className={css(styles.text)}>{data.text}</p>
          </div>

          <Container className={css(styles.part2)} >
            <p className={css(styles.text)}>{data.field}</p>
            <p className={css(styles.text)}>{data.time}</p>
          </Container>
        </Button>
      </Container>
    )
  }
}


const styles = StyleSheet.create({
  title: {
    position: 'relative',
    fontFamily: 'AvenirNext-Medium',
    webkitTouchCallout: 'none',
    webkitUserSelect: 'none',
    khtmlUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    left: 20,
    fontSize: 20,
  },
  text: {
    fontFamily: 'AvenirNext-Medium',
    webkitTouchCallout: 'none',
    webkitUserSelect: 'none',
    khtmlUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  header: {
    height: '10%',
    width: '100%',
    //backgroundColor: 'red',
    alignItems: 'center',
    display: 'flex',
  },
  part: {
    height: '70%',
    width: '100%',
    //backgroundColor: 'pink',
    wordWrap: 'break-word',
    overflow: 'hidden',
  },
  part2: {
    height: '20%',
    width: '100%',
    display: 'flex',
    //backgroundColor: 'yellow',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  button: {
    height: '50vh',
    width: '108vh',
    display: 'flex',
    marginTop: 50,
    backgroundColor: '#0D8B98',
    borderRadius: 15,
    flexDirection: 'column',
    cursor: 'pointer',
    padding: 20,
  }
})