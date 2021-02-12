import React from 'react'

const Win = (props) => {
    return (
        <div className='Win'>
            <h1>Поздравляем!</h1>
            <p>Вы прошли викторину и набрали {props.score} из 30 возможных баллов!</p>
            <button>Попробовать еще раз</button>
        </div>
    )
}

export default Win
