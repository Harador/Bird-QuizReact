import React from 'react';
import Audio from './AudioPlayer';
export default (props)=>{  
    return(
        <div className="Bird">
            <div className={`Bird-box ${!props.bird? 'hidden' : ''}`}>
                <div className="Bird-header">
                    <img className="Bird-img" src={props.bird.image}></img>
                    <div className="Bird-content">
                        <h3>{props.bird.name}</h3>
                        <p>{props.bird.species}</p>
                        <Audio  audio={props.bird.audio} selectBird={props.selectBird}></Audio>
                    </div>
                </div>
                <p>{props.bird.description}</p>
            </div>
            {!props.bird &&
                 <div className='noVisible'>
                    <span>Послушайте плеер.</span>
                    <span>Выберите птицу из списка</span>
                </div>}
            
        </div>
    )
}