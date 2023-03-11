import React from 'react'
import { useParams } from 'react-router-dom'


const Word = () => {

    const { word } = useParams();

    return (
        <div>The word is: {word} </div>
    )
}

export default Word