import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';
import database from './firebase'


function ChatScreen(props) {
    const [input, setInput] = useState([]);
    const [message, setMessage] = useState([{
        name:'Thu Hà',
        img:'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/119201919_2804725256416944_1073747166933018211_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=8TRYGI10dI8AX8JO46v&_nc_ht=scontent.fsgn5-2.fna&oh=a86949d26d7581921a9357491e7dc40b&oe=5FDAD114',
        message:"Nhậu bạn ơi"
    },{
        img:'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/124245762_2674329589545389_3519765407924740846_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=nH3Mp8TXjIAAX-HuLpC&_nc_ht=scontent.fsgn5-2.fna&oh=92ff8d4aede534ae681e46b6c2cda39b&oe=5FDAD443',
        message:""
    }
    ]);
    
    const handleSend = e =>{
        e.preventDefault();
        setMessage([...message,{message: input}]);
        setInput("");
    }
    return (
        <div className='chatScreen'>
            {message.map((message) => (
                message.name ? (
                    <div className='chatScreen__message'>
                    <Avatar className='chatScreen__img' src={message.img}/>
                    <p className='chatScreen__text'>{message.message}</p>
                    </div>
                ):(
                    <div className='chatScreen__message'>
                    <p className='chatScreen__textUser'>{message.message}</p>
                    </div>
                )
            ))}
            <div >
                <form className='chatScreen__input'>
                    <input
                    value= {input}
                    onChange={(e) => setInput(e.target.value)} 
                    className='chatScreen__field' type='text' placeholder='type message...'/>
                    <button onClick={handleSend} type='submit' className='chatScreen__btn'>  Send</button>
                </form>
            </div>
        </div>
    );
}

export default ChatScreen;