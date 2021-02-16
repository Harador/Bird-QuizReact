import React from 'react';
import Audio from './AudioPlayer';
export default (props)=>{  
    return(
        <div className="Bird">
            <div className={`Bird-box ${!props.selectBird? 'hidden' : ''}`}>
                <div className="Bird-header">
                    <img className="Bird-img" src={props.selectBird.image}></img>
                    <div className="Bird-content">
                        <h3>{props.selectBird.name}</h3>
                        <p>{props.selectBird.species}</p>
                        <Audio  audio={props.selectBird.audio} selectBird={props.selectBird}></Audio>
                    </div>
                </div>
                <p>{props.selectBird.description}</p>
            </div>
            {!props.selectBbird &&
                 <div className='noVisible'>
                    <span>Послушайте плеер.</span>
                    <span>Выберите птицу из списка</span>
                </div>}
            
        </div>
    )
}