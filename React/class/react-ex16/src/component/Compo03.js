import { useRef } from "react";
import flower from "../assets/video1.mp4";

function Compo03() {
    const videoRef = useRef();
    
    const playVideo = () => {
        videoRef.current.play();
    }

    const pauseVideo = () => {
        videoRef.current.pause();
    }

    const removeVideo = () => {
        videoRef.current.remove();
    }

    return (
        <div id="compo03Container">
            <div>
                <button onClick={playVideo}>Play</button>
                <button onClick={pauseVideo}>Pause</button>
                <button onClick={removeVideo}>Remove</button>
            </div>

            <video ref={videoRef} width="400" height="272" controls>
                <source type="video/mp4" src={flower}></source>
            </video>
        </div>    
    );
}

export default Compo03