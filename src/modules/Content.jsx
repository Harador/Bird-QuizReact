import React, { Component } from 'react'
import Bird from '../components/Bird';
import BirdList from '../components/BirdList';
export default (props)=>{
    return(
        <div className='Content'>
            <BirdList/>            
            <Bird content={true} visible={true}/>
        </div>
    )
}




