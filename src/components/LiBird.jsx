import React from 'react'

export default ({showBird, id, name, trueBird, getTrueAnswer, trueAnswer, selectLi, changeSelectLi}) =>{
    let handleClick = () =>{     
        if(!trueAnswer&&name === trueBird.name){
            changeSelectLi(id, 'true')
            getTrueAnswer()
            let audio = new Audio();
	        audio.src = './true_sound.mp3';
	        audio.autoplay = true;            
        } else if(!trueAnswer){
             changeSelectLi(id, 'false')
             let audio = new Audio();
             audio.src = './false_sound.mp3';
             audio.autoplay = true; 
        }
        showBird(name)
    }
    return (
        <li onClick={handleClick}><span className={selectLi[id]}></span>{name}</li>
    )
}


