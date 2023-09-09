import React from 'react'

function Alert(props) {

    const wordCapitalize = (word)=>{
        word = word.toLowerCase();
        return word[0].toUpperCase()+word.slice(1);
    }

    return (
        props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{wordCapitalize(props.alert.type)}  :{props.alert.message}</strong>
            
        </div>
    </div>
    )
}

export default Alert
