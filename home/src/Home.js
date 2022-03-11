import React from 'react';
import { Container } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <Container>
        <h1 className='display-3'>Olá Fretebras!</h1>
        <hr className='my-2' />
        <p>Esse component foi juntado com Module Federation e é uma aplicação separada do host</p>
      </Container>
    </div>
  )
}

export default Home;