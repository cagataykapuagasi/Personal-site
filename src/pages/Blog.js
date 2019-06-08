import React from 'react';
import { Container } from '../components';
import { MenuList } from '../components/Menu';


export default class Blog extends React.Component {
  render() {
    const data = ["AnaSayfa", "React", "React Native", "C#", "C", "Database"]

    return (
      <Container>
        <MenuList data={data} />
      </Container>
    )
  }
}