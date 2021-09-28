import React from "react"

import { GoogleOutlined, MessageOutlined  } from '@ant-design/icons'

import firebase from "firebase/app"

import { auth } from "../firebase"


export default function Login() {
  return (
    <div id='login-page'>
      <div id='login-card'>
        <h2 className='Label'>Welcome to SimpleChat</h2>
        <h5 className='Login-label'>Login with just one click</h5>

        <div
          className='login-button google'
        onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >

        
          <GoogleOutlined /> Sign In with Google
        </div>
        <br />
        <br />
        <div className='admin-button'>
          <a href="mailto:moahntylaxminarayan120@gmail.com" >
          <MessageOutlined />Contact Admin</a>
          
        </div>

        </div>
      </div>
    
  )
}