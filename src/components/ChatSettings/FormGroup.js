import React from 'react'

const FormGroup = ({ id, label, children, position }) => {
    return (
        <div className={`form-group-${position}`}>
            <label htmlFor={id}>{label}</label>
            <div className='form-group-child'>
                { children }
            </div>
        </div>
    )
}

export default FormGroup;
