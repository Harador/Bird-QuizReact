import BirdMain from '../components/BirdMain';

export default ({bird, trueAnswer, changeTime, current, duration})=>{
    return(
        <BirdMain bird={bird} trueAnswer={trueAnswer} changeTime={changeTime} current={current} duration={duration}/>
    )
}