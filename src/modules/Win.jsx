import React from 'react'

const Win = (props) => {
    return (
        <div className='Win'>
            <h1>Поздравляем!</h1>
            <p>Вы прошли викторину и набрали {props.score} из 30 возможных баллов!</p>
            <p>Теперь ты точно знаешь, кто чирикнул {';)'}</p>
            <button onClick={props.newGame}>Попробовать еще раз</button>
        </div>
    )
}

export default Win
