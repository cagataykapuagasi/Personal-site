import React from 'react';
import { Container, InPopup, Button, MenuList, Icons } from '../components';
import Popup from "reactjs-popup";
import { StyleSheet, css } from 'aphrodite';
import { PostList } from '../components';
import { observer, inject } from 'mobx-react';
import { data } from '../util/strings';

class Blog extends React.Component {

  state = {
    borderStyle: '#F5515F'
  }

  componentDidMount() {
    const { blog } = this.props.root;

    blog.loadDatas();
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
    const { currentData } = this.props.root.blog;
    const { MyLoader } = this;

    return (
      <Container className={css(styles.main)} >
        <Container className={css(styles.area)}>
          <MenuList root={this.props.root} data={data} />
        </Container>

        <Popup contentStyle={{ padding: 0, borderWidth: 0, backgroundColor: 'transparent', height: 500, width: 400 }}
          modal trigger={this.popupButton} position="center center">
          <InPopup history={this.props.history} />
        </Popup>

        <Container className={css(styles.area)}>
          <PostList data={currentData ? currentData : false} />
        </Container>

        <Container className={css(styles.footer)}>
            <Icons size={25} type="youtube" />
            <Icons type="twitter" />
            <Icons type="instagram" />
            <Icons type="linkedin" />
            <Icons type="facebook" />
        </Container>
      </Container>
    )
  }
}

export default inject('root')(observer(Blog));

const styles = StyleSheet.create({
  main: {
    paddingBottom: 200,
  },
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
  },
  area: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  footer: {
    height: 150,
    width: '100%',
    backgroundColor: '#161a20',
    position: 'fixed',
    bottom: 0,
    right: 0,
    left: 0,
  }
})