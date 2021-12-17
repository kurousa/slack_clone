import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../lib/firebase-v8';

function Login() {
  const signInWithGoogle = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img 
          src="slacklogo.png" 
          alt=""
        />
        <h1>Welcome to the Slack.</h1>
        <p>kurousa.slack.com</p>

        <Button onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);


  > img { 
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > Button {
    margin-top: 50px;
    text-transform: inherit;
    background-color: #0a8d48;
    color:white;
  }

`;