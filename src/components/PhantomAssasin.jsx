import phantomAssasin from '../assets/pa.webm'
import '../styles/phantom_assasin.css'
import { useState } from 'react'

function play( event, playing, setPlaying ) {
    const element = event.currentTarget
    if( playing ) { element.pause() }
    else { element.play() }
    setPlaying( !playing )
}

const PhantomAssasin = () => {
    const [ playing, setPlaying ] = useState( false )
    return <video src={phantomAssasin} loop onClick={ event => play( event, playing, setPlaying ) }></video>
}

export default PhantomAssasin