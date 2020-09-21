import * as React from 'react';

import Card from '../../components/Card';
import Container from '../../components/Container';
// import Input from '../../components/Input';
import Button from '../../components/Button';
import Title from '../../components/Title';
//import Link from '../../components/Link';
import Center from '../../components/Center';

import { Link } from 'react-router-dom';

export default class Register extends React.Component {

    public render() {
        return(
            <Container center={true}>

            <Card>
              <Title>Registro</Title>
              {/*
              <Input placeholder='Correo' label='Correo' />
              <Input placeholder='Contraseña' label='Contraseña' />
              */}
              <Button block={true} >Enviar</Button>
              <Center>
                <Link to='/'>Iniciar Sesión</Link>
              </Center>
            </Card>
      
          </Container>
        )
    }

}