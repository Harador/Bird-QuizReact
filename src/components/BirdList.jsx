import React from 'react';
import LiBird from './LiBird'
export default ({currentSection, trueBird, getTrueAnswer, trueAnswer, showBird})=>{

    return (
        <div className='BirdList'>
            <ul>                
                {currentSection.map(bird => <LiBird showBird={showBird} key={bird.id} name={bird.name} trueBird={trueBird} getTrueAnswer={getTrueAnswer} trueAnswer={trueAnswer}/>)}
            </ul>
        </div>
    )
}