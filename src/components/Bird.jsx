export default (props)=>{
    return(
        <div className="Bird">
            <div className={`Bird-box ${!props.visible? 'hidden' : ''}`}>
                <div className="Bird-header">
                    <img className="Bird-img" src='./noneBird.jpg'></img>
                    <div className="Bird-content">
                        <h3>******</h3>
                        {props.content&&<p>Lat</p>}
                        <audio controls='controls' src='https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'></audio>
                    </div>
                </div>
                {props.content&&<p>Lorem ipsum dolor sit amet, consectetur adip 
                Lorem Lorem ipsum dolor sit amet, consectetur adip LoremLorem ipsum dolor sit amet, consectetur adip Lorem</p>}
            </div>
            {props.visible ||
                 <div class='noVisible'>
                    <span>Послушайте плеер.</span>
                    <span>Выберите птицу из списка</span>
                </div>}
            
        </div>
    )
}