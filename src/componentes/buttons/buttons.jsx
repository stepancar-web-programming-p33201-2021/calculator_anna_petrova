import React from "react"
import './style.css'
// eslint-disable-next-line

function Buttons(props){

    return(
        <div className = 'buttons'>
            
            <button value = {'1'} onClick = {(e) => props.calc(e.target.value)}> 1 </button>
            <button value = {'2'} onClick = {(e) => props.calc(e.target.value)}> 2 </button>
            <button value = {'3'} onClick = {(e) => props.calc(e.target.value)} >3 </button>
            <button value = {'*'} onClick = {(e) => props.calc(e.target.value)} className = 'operator' >*</button>

            <button value = {'4'} onClick = {(e) => props.calc(e.target.value)} >4</button>
            <button value = {'5'} onClick = {(e) => props.calc(e.target.value)}>5</button>
            <button value = {'6'} onClick = {(e) => props.calc(e.target.value)}>6</button>
            <button value = {'-'} onClick = {(e) => props.calc(e.target.value)} className = 'operator'>-</button>

            <button value = {'7'} onClick = {(e) => props.calc(e.target.value)}>7</button>
            <button value = {'8'} onClick = {(e) => props.calc(e.target.value)}>8</button>
            <button value = {'9'} onClick = {(e) => props.calc(e.target.value)}>9</button>
            <button value = {'+'} onClick = {(e) => props.calc(e.target.value)} className = 'operator'>+</button>

            <button value = {'0'} onClick = {(e) => props.calc(e.target.value)} >0</button>

            <button value = {'C'} onClick = {(e) => props.calc(e.target.value)}> C </button>
            <button value = {'/'} onClick = {(e) => props.calc(e.target.value)} className = 'operator'>/</button>
            <button value = {'^'} onClick = {(e) => props.calc(e.target.value)} className = 'operator'>^</button>
            <button value = {'='} onClick = {(e) => props.calc(e.target.value)} className = 'operator'>=</button>
        </div>


    )
}

export default Buttons