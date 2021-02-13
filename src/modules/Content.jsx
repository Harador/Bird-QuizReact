import React from 'react'
import BirdContent from '../components/BirdContent';
import BirdList from '../components/BirdList';


export default function Content({currentSection, trueBird, getTrueAnswer, trueAnswer, selectBird, showBird, selectLi, changeSelectLi}) {
    return (
        <div className="Content">
                <BirdList showBird={showBird} currentSection={currentSection} 
                trueBird={trueBird} trueAnswer={trueAnswer}
                 getTrueAnswer={getTrueAnswer} selectLi={selectLi} 
                 changeSelectLi={changeSelectLi}/>            
                <BirdContent bird={selectBird}/>
        </div>
    )
}





