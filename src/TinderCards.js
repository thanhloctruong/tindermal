import React, { useState, useEffect} from 'react';
import TinderCard from "react-tinder-card";
import './TinderCard.css';
import database from './firebase'

function TinderCards() {
    const [pet, setPet] = useState([]);
    //run based condition
    useEffect(() => {
        const unLiked = database
        .collection("pet")
        .onSnapshot((snapshot) => setPet(snapshot.docs.map((doc) => doc.data()))
        );
        return () => {
            unLiked();
        };
    }, []);

    return (
        <div className='TinderCard__container'>
            {pet.map((animal) =>(
                <TinderCard className="swipe" key={animal.name}
                preventSwipe ={['up', 'down']}
                >
                    <div className="card">
                    <h2 className='card__info'>
                        <span>
                            {animal.name} 
                        </span>
                        <span>
                            {animal.species}
                        </span>
                    </h2>
                    <img className="card card__img" src={animal.url}/>
                    </div>
                </TinderCard>

            ))}
        </div>
    );
}

export default TinderCards;