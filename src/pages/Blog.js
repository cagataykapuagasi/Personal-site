import React from "react";
import { Container, InPopup, Button, MenuList, Icons } from "../components";
import Popup from "reactjs-popup";
import { StyleSheet, css } from "aphrodite";
import { PostList } from "../components";
import { observer, inject } from "mobx-react";
import { data } from "../util/strings";

class Blog extends React.Component {
  state = {
    borderStyle: "transparent"
  };

  componentDidMount() {
    const { blog } = this.props.root;

    blog.loadDatas();
  }

  popupButton = () => {
    const { borderStyle } = this.state;

    return (
      <Button
        borderColor={borderStyle}
        onClick={this.goToBlog}
        text="Login"
        style={styles.button}
        textStyle={styles.buttonText}
        onMouseLeave={() => this.setState({ borderStyle: "transparent" })}
        onMouseOver={() => this.setState({ borderStyle: "white" })}
      />
    );
  };

  render() {
    const { root } = this.props;

    return (
      <Container className={css(styles.main)}>
        <Container className={css(styles.area)}>
          <MenuList root={root} data={data} />
        </Container>

        <Popup
          contentStyle={{
            padding: 0,
            borderWidth: 0,
            backgroundColor: "transparent",
            height: 500,
            width: 400
          }}
          modal
          trigger={this.popupButton}
          position="center center"
        >
          <InPopup history={root.history} />
        </Popup>

        <Container className={css(styles.area)}>
          <PostList data={root.blog.currentData} />
        </Container>

        <Container className={css(styles.footer)}>
          <p className={css(styles.contact)}>
            Contact: cagataykapuagasi@gmail.com
          </p>
          <div className={css(styles.footerView)}>
            <Icons size={20} type="youtube" />
            <Icons size={20} type="twitter" />
            <Icons size={20} type="instagram" />
            <Icons size={20} type="linkedin" />
            <Icons size={20} type="facebook" />
          </div>
        </Container>
      </Container>
    );
  }
}

export default inject("root")(observer(Blog));

const styles = StyleSheet.create({
  main: {
    paddingBottom: 200
  },
  button: {
    height: 40,
    width: 110,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    backgroundColor: "#0D8B98",
    borderWidth: 2,
    borderRadius: 35,
    borderStyle: "solid",
    position: "absolute",
    right: 50,
    top: 40
  },
  buttonText: {
    fontFamily: "AvenirNext-MediumItalic",
    fontSize: 16,
    webkitTouchCallout: "none",
    webkitUserSelect: "none",
    khtmlUserSelect: "none",
    mozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none"
  },
  area: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  footer: {
    display: "flex",
    width: "100%",
    backgroundColor: "#161a20",
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20
  },
  footerView: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: 40
  },
  contact: {
    fontFamily: "AvenirNext-Italic"
  }
});
