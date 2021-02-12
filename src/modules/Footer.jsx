export default ({trueAnswer, nextSection})=>{
    let handleClick = () =>{
        if(trueAnswer){
            nextSection();
        }
    }
    let styleBut = `${trueAnswer? 'FooterButton greenBut' : 'FooterButton'}`;
    return(
        <button onClick={handleClick} className={styleBut}>
            Next Level
        </button>
    )
}