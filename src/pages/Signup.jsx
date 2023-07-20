import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
export default function Signup() {
  return (
  <Container>
    <BackgroundImage />
    <Header />
    <div className="body flex column a-center j-center">
      <div className="text flex column">
        <h1>Unlimited movies , Tv shows and more</h1>
        <h4>Watch anywhere. cancel anytime.</h4>
        <h6>
          Ready to watch? enter your email to create a restart membership
        </h6>
      </div>
    </div>
    <div className="form">
      <input type="email" placeholder='Email Address' name="email" />
      <input type='password' placeholder='Password' name="password" />
      <button>Get Started</button>

    </div>
    <button>Log In</button>
  </Container>
  );
}
const Container = styled.div`
  position :relative;
  .content{
    position :absolute;
    top:0;
    left:0;
    
  }
`;
