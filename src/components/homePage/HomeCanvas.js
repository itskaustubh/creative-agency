import React,{useRef,useEffect} from 'react'
import {Banner,Video,Canvas,BannerTitle,Headline} from '../../styles/homeStyles'
import {useGlobalStateContext} from '../../context/globalContext'
import savedCords from '../../content/eraseCords'
 
const HomeCanvas = () => {
    const {currentTheme} = useGlobalStateContext()
    const canvas = useRef(null)
    const videoRef = useRef(null)
    let cvs,ctx
    let cvsColor = currentTheme === 'dark' ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.9)'
    let eraseLoop
    let eraseCords = []
    let index = 0

    const draw = (evt) => {
        // console.log(cvs,ctx)
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineJoin = 'round'
        ctx.lineCap  = 'round'
        ctx.lineWidth = 150
        ctx.beginPath()
        const cords = {x: evt.clientX - cvs.offsetLeft, 
                        y: evt.clientY - cvs.offsetTop + document.scrollingElement.scrollTop}
        ctx.lineTo(cords.x,cords.y)
        ctx.moveTo(cords.x,cords.y)
        ctx.stroke()

        // eraseCords.push({x:evt.clientX, y: evt.clientY})
        // localStorage.setItem("ERASE_CORDS", eraseCords)
        // console.log(eraseCords)
    }
    
    const autoEraser = (ctx) => {
        cvs = canvas.current
        ctx = cvs.getContext('2d')
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineJoin = 'round'
        ctx.lineCap  = 'round'
        ctx.lineWidth = 150
        // ctx.beginPath()
        ctx.moveTo(savedCords[index].x,savedCords[index].y)
        ctx.lineTo(savedCords[index+1].x + 2,savedCords[index+1].y + 2)
        ctx.stroke()
        index += 1
        if((index+1)  >= savedCords.length){
            cancelAnimationFrame(eraseLoop)
            // cvs.addEventListener('mousemove',draw)
            return;
        }
        eraseLoop = requestAnimationFrame(autoEraser)
    }
    
    useEffect(() => {
        localStorage.setItem("ERASE_CORDS", eraseCords)
        cvs = canvas.current
        ctx = cvs.getContext('2d')

        cvs.width = window.innerWidth;
        cvs.height = window.innerHeight;

        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = cvsColor;
        ctx.fillRect(0, 0, cvs.width, cvs.height); 

        cvs.addEventListener('mousemove',draw)
        
        autoEraser(ctx) 
        return () => {
            cvs.removeEventListener('mousemove',draw)
            cancelAnimationFrame(eraseLoop)
        }
    },[])

    useEffect(() => {   
        cvsColor = currentTheme === 'dark' ? 'black' : 'white'
        cvs = canvas.current
        ctx = cvs.getContext('2d')

        ctx.globalCompositeOperation = 'source-in';
        ctx.fillStyle = cvsColor;
        ctx.fillRect(0, 0, cvs.width, cvs.height); 
    }, [currentTheme])

    const headlineParent = {
        initial : {y : 800},
        animate : { y : 0, transition: { staggerChildren : 0.2 } }
    }
    const headlineAnimate = {
        initial : {y : 800},
        animate : { y : 0, transition: { duration: 1, ease : [0.6,0.05,-0.01,0.9] } }
    }

    const onVideoLoad = () => {
        console.log('video loaded')
    }


    return (
        <div>
            <Banner>
                <Video>
                    <video ref={videoRef} onLoadedData={onVideoLoad} src={require('../../assets/video/banner.mp4').default}
                        autoPlay loop muted></video>
                </Video>
                <Canvas ref={canvas}/>
                <BannerTitle variants={headlineParent} initial='initial' animate='animate'>
                    <Headline variants={headlineAnimate}>DIG</Headline>
                    <Headline variants={headlineAnimate}>DEEP</Headline>
                </BannerTitle>
            </Banner>
        </div>  
    )
}

export default HomeCanvas
