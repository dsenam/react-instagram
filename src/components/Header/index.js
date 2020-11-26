import React from 'react';
import {Link} from 'react-router-dom'
import { Container, Content } from './styles';

import logo from '../../assets/logo.svg'
import camera from '../../assets/camera.svg'

function Header() {
  return (
      <>
      <Container>
          <Content>
              <Link to="/">
                <img src={logo} alt="Instagram"/>
              </Link>
              <Link to="/new">
                <img src={camera} alt="Enviar Publicação"/>
              </Link>
              
          </Content>
      </Container>
      </>
  );
}

export default Header;