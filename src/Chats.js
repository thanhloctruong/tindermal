import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name='ACan'
                message='Chào m'
                timestamp='4 minute ào'
                profilePic='https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/124245762_2674329589545389_3519765407924740846_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=nH3Mp8TXjIAAX-HuLpC&_nc_ht=scontent.fsgn5-2.fna&oh=92ff8d4aede534ae681e46b6c2cda39b&oe=5FDAD443'
            />
            <Chat 
                name='Hà'
                message='Ghét Nhất Ông Thầyn'
                timestamp='1 hour ago '
                profilePic=''
            />
            <Chat 
                name='Thu Hà'
                message='Nhậu Bạn ơi'
                timestamp='32 minute ago'
                profilePic='https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/119201919_2804725256416944_1073747166933018211_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=8TRYGI10dI8AX8JO46v&_nc_ht=scontent.fsgn5-2.fna&oh=a86949d26d7581921a9357491e7dc40b&oe=5FDAD114'
            />
            <Chat 
                message='Vãi lồn luôn'
                timestamp='a second ago '
                profilePic=''
            />
        </div>
    );
}

export default Chats;