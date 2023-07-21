import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
export default function Signup() {
  return (
  <Container className='flex a-center j-between'>
    <BackgroundImage />
    <div className="content">

      <Header />
      <div className="body flex column a-center j-center">
        <div className="text flex column">
          <h1>Unlimited movies , Tv shows and more</h1>
          <h4>Watch anywhere. cancel anytime.</h4>
          <h6>
            Ready to watch? enter your email to create a restart membership
          </h6>
        </div>
      
      <div className="form">
        <input type="email" placeholder='Email Address' name="email" />
        <input type='password' placeholder='Password' name="password" />
        <button>Get Started</button>
      </div>
      <button>Log In</button>
    </div>
    </div>
  </Container>
  );
}
const Container = styled.div`
position: relative;
.content {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15vh 85vh;
  .body {
    gap: 1rem;
    .text {
      gap: 1rem;
      text-align: center;
      font-size: 2rem;
      h1 {
        padding: 0 25rem;
      }
    }
}
`;
