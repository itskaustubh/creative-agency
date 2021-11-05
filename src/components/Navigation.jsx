import React from 'react'
import {Nav,NavLeft,NavVideo} from '../styles/navStyles'
import {useGlobalStateContext} from '../context/globalContext'
import {AnimatePresence} from 'framer-motion'

const Navigation = () => {
    const {isHomePage} = useGlobalStateContext()
    return (
            <AnimatePresence>
            {!isHomePage && 
                (
                    <Nav id='nav' 
                        initial={{x: '-100%'}}
                        exit={{x: '-100%'}}
                        animate={{x: isHomePage? '-100%': '0'}}
                        transition={{duration: 0.8, ease: [0.6,0.05,-0.01,0.9]}}
                    >
                    <NavLeft>
                        <div className="nav-titles">
                        <ul>
                            <li>The First Video</li>
                            <li>The First Video</li>
                            <li>The First Video</li>
                            <li>The First Video</li>
                        </ul>
                        </div>
                    </NavLeft>
                    <NavVideo>
                        <video src={require('../assets/video/it-takes-an-island.mp4').default}
                                autoPlay loop muted></video>
                    </NavVideo>
                </Nav>
                )}
            </AnimatePresence>           
    )
}

export default Navigation
