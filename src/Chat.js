import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './chat.css';
import {Link} from 'react-router-dom';


function Chat({name, message, profilePic, timestamp}) {
    return (
        <Link to={'/chat/${name}'}>
            <div className='chat'>
            <Avatar className='chat__img' src={profilePic}/>
            <div className='chat__details'>
                <h2 className='chat__name'>{name}</h2>
                <p className='chat__masage'>{message}</p>
            </div>
            <p className='chat__timestamp'>{timestamp}</p>
            </div>
        </Link>
        
    );
}

export default Chat;