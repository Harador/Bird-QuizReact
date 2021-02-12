export default ({bird, trueAnswer})=>{
    const srcaudio = bird.audio;
    const srcimg = trueAnswer? bird.image : './noneBird.jpg';
    const name = trueAnswer? bird.name : '*******'
    return(
        <div className="Bird">
            <div className={`Bird-box`}>
                <div className="Bird-header">
                    <img className="Bird-img" src={srcimg}></img>
                    <div className="Bird-content">
                        <h3>{name}</h3> 
                        <audio controls='controls' src={srcaudio}></audio>
                    </div>
                </div>                
            </div>          
            
        </div>
    )
}