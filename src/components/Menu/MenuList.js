import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Menu from './Menu';

export default class MenuList extends React.Component {

  state = {
    selectedIndex: 0,
    mouseOverIndex: -1,
    borderStyle: '#F5515F'
  }

  onClick = (item, index) => {
    const { blog } = this.props.root;

    this.setState({
      selectedIndex: index,
    })

    blog.changeCurrentData(item);
  }

  onMouseOver = (index) => {
    this.setState({
      mouseOverIndex: index,
    })
  }

  onMouseLeave = () => {
    this.setState({
      mouseOverIndex: -1,
    })
  }



  render() {
    const { selectedIndex, mouseOverIndex, borderStyle } = this.state;
    const { data } = this.props;
    let color = 'white', background = 'transparent';

    return (
      <div className={css(styles.main)}>
        <p className={css(styles.text)}>Personal Blog</p>

        {data && data.map((item, index) => {
          if (selectedIndex === index)
            color = '#F5515F';
          else
            color = 'white';

          if (mouseOverIndex === index)
            background = '#475e6e';
          else
            background = 'transparent';

          return (
            <Menu onMouseLeave={() => this.onMouseLeave()}
              onMouseOver={() => this.onMouseOver(index)}
              onClick={() => this.onClick(item, index)}
              background={background} color={color} text={item} />
          )
        })}
      </div>
    )
  }
}


const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    position: 'absolute',
    top: 10,
    left: 50,
    fontFamily: 'AvenirNext-Italic',
    fontSize: 20,
    webkitTouchCallout: 'none',
    webkitUserSelect: 'none',
    khtmlUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
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
  }
})