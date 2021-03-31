import React from 'react';
import './Header.css';
import logo from './logo.jpg';
import PetsIcon from '@material-ui/icons/Pets';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import {Link, useHistory} from 'react-router-dom';

function Header({backButton}) {
    const history = useHistory();
    return (
        <div className="header">
{/* back arrow icon */}
        { backButton ? (
            <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon fontSize='large' className='header__icons'/>
            </IconButton>
        ) : (
            <IconButton>
                <PetsIcon fontSize='large' className='header__icons'/>
            </IconButton>
        )}
        
        {/* icon button is a circle select */}
        <Link to='/'>
            <img src={logo} alt="logo" className="header__logo"/>
        </Link>
        <Link to='/chat'>
            <IconButton>
                <QuestionAnswerIcon fontSize='large' className='header__icons'/>
            </IconButton>
        </Link>
        </div>
    );
}

export default Header;