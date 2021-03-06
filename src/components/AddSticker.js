import React, { useState } from 'react'
import PropTypes from 'prop-types'



const AddSticker = ({ setStickers }) => {
    
    const [errorMsg, setErrorMsg] = useState(null)

    const [inputValue, setInputValue] = useState('')  

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        if (inputValue.trim().length > 2) {
            setStickers(data => [inputValue, ...data])
            setErrorMsg('')
            setInputValue('')
        } else {
            console.log('no hay nada')
            setErrorMsg('El campo esta vacio')
        }

    }
    
    return (
        
        <>
            <form onSubmit={ handleSubmit }>
                <input 
                    type='text'
                    value={ inputValue }
                    placeholder='Buscar Sticker'
                    onChange={ handleInputChange }
                    />
            </form>

            <span style={{ color: 'red' }}>{ errorMsg }</span>

        </>
    )
}

AddSticker.propTypes = {
    setStickers: PropTypes.func.isRequired
}

export default AddSticker