import React, { useState } from 'react'
import './style.css'

import Buttons from '../buttons/buttons'

function Calculator(){

    const [numDisplay1, setNumDisplay1] = useState('')
    const [numDisplay2, setNumDisplay2] = useState('')
    const [operatorClic, setOperatorClic] = useState('')
    const [result, setResult] = useState('')


    const [operator, setOperator] = useState(false)
    const [operator2, setOperator2] = useState(true)
    const [firstClic, setFirstClic] = useState(false)
    const [firstCalcul, setFirstCalcul] = useState(false)


    const [calcul, setCalcul] = useState({
        'firstNum': '',
        'oper': '',
        'secondNum': '',
        'lastNam': ''
    })


    const getValues = (num) => {
        if(operator === false){

            if(firstCalcul){
                clearValues(num, true)
                setFirstCalcul(false)
            }
                calcul.firstNum += num
                setNumDisplay1(numDisplay1 + num)
                calcul.lastNam = ''

        }else{


                calcul.secondNum += num
                setNumDisplay2(numDisplay2 + num)

        }
    }


    const getOperator = (num) => {
        calcul['oper'] = num
        setOperatorClic(num)
        setOperator(true)
        setOperator2(false)


        if(firstClic){
            setCalcul({
                'firstNum': calcul.lastNam,
                'oper': calcul.oper,
                'secondNum': '',
            })
            setNumDisplay1(calcul.lastNam)
            setNumDisplay2('')
        }

        setFirstClic(true)
    }


    const calculate = (num) => {

        const operators = {
            '+': (num1, num2) => (parseFloat(num1) + parseFloat(num2)),
            '-': (num1, num2) => (parseFloat(num1) - parseFloat(num2)),
            '/': (num1, num2) => (parseFloat(num1) / parseFloat(num2)),
            '^': (num1, num2) => (parseFloat(num1) ** parseFloat(num2)),
            '*': (num1, num2) => (parseFloat(num1) * parseFloat(num2)),
        }


        let result = operators[calcul['oper']](calcul.firstNum, calcul.secondNum)
        calcul.lastNam = result
        setResult(result)


        setOperator2(true)
        setOperator(false)
        setFirstCalcul(true)
    }


    const clearValues = (num, calculaDnv) => {

        if(calculaDnv){
            setCalcul({
                'firstNum': num,
                'oper': calcul.oper,
                'secondNum': '',
            })

            setFirstClic(false)
            setResult('')
            setNumDisplay1('')
            setNumDisplay2('')
            setOperatorClic('')
        }else{
            setCalcul({
                'firstNum': '',
                'oper': calcul.oper,
                'secondNum': '',
            })

            setFirstClic(false)
            setResult('')
            setNumDisplay1('')
            setNumDisplay2('')
            setOperatorClic('')
        }
    }


    const showError = () => {
        setResult('Error')
    }


    const calcula = (num) => {
        if (!isNaN(num)){
            getValues(num)
        }else if ((num === '+' || num === '-' || num === '/' || num === '*' || num === '^' ) & operator2){
            getOperator(num)
        }else if(num === 'C'){
            clearValues()
        }else if(num === '='){
            if(calcul.secondNum !== ''){
                calculate(num)
            }else{
                showError()
            }
        }
    }

    return(
        <section className = 'calculator'>
            <div className = 'containerDisplay'>
                <form>
                    <label>
                        <input className="screen" type="text" name="name" tabIndex="-1"
                               value={"".concat(calcul.firstNum, operatorClic, calcul.secondNum)}
                               onKeyDown={((e) => {
                                   e.preventDefault();
                                   const value = e.key;
                                   if (!isNaN(value)) {
                                       getValues(value)

                                   }
                               })}/>
                    </label>
                </form>


                <p className = 'resulted'>{result}</p>
            </div>



            <Buttons calc= {calcula} />
        </section>
    )
}

export default Calculator