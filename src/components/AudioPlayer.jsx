import React, {useState, useEffect} from 'react'

function AudioPlayer({audio,selectBird}) {
    let [currentTime, setCurrent] = useState('00:00');
    let [durationTime, setDuration] = useState('00:00');
    let [play, setPlay] = useState('play');
    let [flag, setFlag] = useState(false);
   
    let butRef = React.createRef();
    let fieldRef = React.createRef();
    let audioRef = React.createRef();
    let progressRef = React.createRef();
    let butClick = () => {         
        if(play =='play'){
            console.log('f')
            butRef.current.className = 'play far fa-pause-circle';
            audioRef.current.play();
            setPlay('pause');
        }else if(play='pause') {
            butRef.current.className = 'play far fa-play-circle';
            audioRef.current.pause();
            setPlay('play');
        }  
    }
    function moveBar(){
        let currentTime = audioRef.current.currentTime;
        let durationTime = audioRef.current.duration;
        let position = currentTime / durationTime;
        progressRef.current.style.width = position * 100 + '%';        
        if(currentTime == durationTime){
            setCurrent('00:00');
            setPlay('play');
            butRef.current.className = 'play far fa-play-circle';
            progressRef.current.style.width = '0%';        
        }else{
            setCurrent(calcTime(currentTime)); 
        }    
    }
    let show = ()=>{                
        setCurrent(calcTime(audioRef.current.currentTime));
        setDuration(calcTime(audioRef.current.duration));
        setPlay('play');
        moveBar();   
        if(flag==true && play=='pause'){
            audioRef.current.play();
            butRef.current.className = 'play far fa-pause-circle';
            setFlag(false);
            setPlay('pause');            
        }else{
            audioRef.current.pause();
            butRef.current.className = 'play far fa-play-circle';
        }
    }
    let calcTime = (num) => {
        let minutes = Math.trunc(num/60);
        let seconds = Math.trunc(num%60);
        return `${minutes<10 ? '0'+minutes : minutes}:${seconds<10? '0'+seconds : seconds}`;
    }
    let changeCurrentTime=(e)=>{
        flag = true;
        let x = e.clientX;
        let field = fieldRef.current.getBoundingClientRect();
        let currentX = (x - field.left) < 1 ? 1 : x - field.left; 
        let result = currentX / field.width;   
        audioRef.current.currentTime = Math.trunc(audioRef.current.duration * result);
        setFlag(true)
    }
     useEffect(() => {    
         if(selectBird===false) audioRef.current.pause(); 
     })    
    return (
        <div className="player">
            <audio onCanPlay={show} onTimeUpdate={moveBar} ref={audioRef} src={audio}></audio>
            <a  onClick={butClick}><i ref={butRef} className={`play far fa-play-circle`}></i></a>
            <div  className="field-time">
                <div className="field" ref={fieldRef} onClick={changeCurrentTime}>
                    <div ref={progressRef} className="progress">
                        <div className="circle"></div>
                    </div>
                </div>
                <div className="time">
                    <span >{currentTime}</span>
                    <span >{durationTime}</span>
                </div>
            </div>                               
        </div>
    )
}
export default AudioPlayer