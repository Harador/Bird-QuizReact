export default (props)=>{
    return(
        <div className="Bird">
            <div className={`Bird-box ${!props.bird? 'hidden' : ''}`}>
                <div className="Bird-header">
                    <img className="Bird-img" src={props.bird.image}></img>
                    <div className="Bird-content">
                        <h3>{props.bird.name}</h3>
                        {props.content&&<p>{props.bird.species}</p>}
                        <audio controls='controls' src={props.bird.audio}></audio>
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