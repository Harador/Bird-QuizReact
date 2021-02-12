export default (props)=>{
    return(
        <div className="Logo">
            <img src='./logo.svg' className="Logo-img"></img>
            <h3 className="Logo-score">Score: {props.score}</h3>  
        </div>
    )
}