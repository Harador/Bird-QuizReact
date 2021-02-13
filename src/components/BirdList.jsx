import React from 'react';
import LiBird from './LiBird'
export default ({currentSection, trueBird, getTrueAnswer, trueAnswer, showBird, selectLi, changeSelectLi})=>{

    return (
        <div className='BirdList'>
            <ul>                
                {currentSection.map(bird => <LiBird showBird={showBird} key={bird.id} id={bird.id}
                name={bird.name} trueBird={trueBird}
                 getTrueAnswer={getTrueAnswer} trueAnswer={trueAnswer} 
                 selectLi={selectLi} changeSelectLi={changeSelectLi}/>)}
            </ul>
        </div>
    )
}