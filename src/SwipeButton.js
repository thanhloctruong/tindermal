
import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import './SwipeButton.css';
import { IconButton } from '@material-ui/core';

function SwipeButton() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButton__Replay">
                <ReplayIcon fontSize='large'/> 
            </IconButton>
            <IconButton className="swipeButton__Close">
                <CloseIcon fontSize='large'/>
            </IconButton>
            <IconButton className="swipeButton__Star">
                <StarRateIcon fontSize='large'/>
            </IconButton>
            <IconButton className="swipeButton__Favorite">
                <FavoriteIcon fontSize='large'/>
            </IconButton>
            <IconButton className="swipeButton__Flash">
                <FlashOnIcon fontSize='large'/>
            </IconButton>
        </div>
    );
}

export default SwipeButton;