import React, {useEffect,useState} from 'react'
import {Cursor} from '../styles/globalStyles'
import {useGlobalStateContext} from '../context/globalContext'


const CustomCursor = () => {

    const {cursorType: cType } = useGlobalStateContext()
    const [mouseCords, setMouseCords] = useState({
        top : '500px', left : '200px'
    })

    const handleMouseMove = (evt) => {
        setMouseCords({
            left: evt.pageX + 'px',
            top: evt.pageY + 'px'
        })
    }

    useEffect(() => {
        document.addEventListener('mousemove',handleMouseMove)
        return () => {
            document.removeEventListener('mousemove',handleMouseMove)
        }
    }, [])

    return (
        <div>
            <Cursor style={mouseCords} 
                className={cType}/>
        </div>
    )
}

export default CustomCursor
