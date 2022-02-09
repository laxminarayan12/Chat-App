import React, { useState, useEffect } from "react"

import axios from 'axios'
import { useHistory } from "react-router-dom"
import { ChatEngine } from 'react-chat-engine'

import { useAuth } from "../contexts/AuthContext"

import { auth } from "../firebase"

const Chats = () => {
    const history = useHistory();
    const { user } = useAuth();
    const { Loading, setLoading } = useState(true);

    

    const handleLogout = async () => {
        await auth.signOut();
        
        history.push('/');

    }

    const getFile = async (url) => {

        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], "userPhoto.jpg", { type: 'image/jpeg'})


    }

    useEffect(() => {
        if(!user) {
            history.push('/');
            return;
        }

        axios.get('https://api.chatengine.io/users/me',{
            headers: {
                "project-id":"",
                "user-name":"user.email",
                "user-secret":"user.uid"
            }
        })
        .then(() => {
            setLoading(false);
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append('email', user.email);
            formdata.append('username', user.email);
            formdata.append('secret', user.uid);

            getFile(user.photoURL)
            .then((avatar) => {
                formdata.append('avatar', avatar, avatar.name);

                axios.post('https://api.chatengine.io/users',
                    formdata,
                        { headers:{"private-key":"KEY"}}
                )
                .then(() => setLoading(false))
                .catch((error) => console.log(error))
            })


        })
    }, [user, history, setLoading]);

    if(!user || Loading) return 'loading...';


    return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>
          SimpleChat
        </div>

        <div onClick={handleLogout} className='logout-tab'>
          Logout
        </div>
      </div>

      <ChatEngine 
        height='calc(100vh - 66px)'
        projectID='Project_ID'
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  )
}

export default Chats;
