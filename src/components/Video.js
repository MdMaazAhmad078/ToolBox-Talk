import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import ReactPlayer from 'react-player';
import './index.css';
import './Dashboard.css';
import L from '../video/L.mp4';
import O from '../video/O.mp4';
import S from '../video/S.mp4';
import T from '../video/T.mp4';

const Video = () => {
    let history = useHistory();

    const [show, setShow] = useState(false)

    return (
        <div>
        <h1 className='new-font m-l-v m-t-h2'>Videos:-</h1>
            <div className='wrapper2 ' >
                <div className='video-size'>
                    <ReactPlayer
                        width='480px'
                        height='240px'
                        controls
                        url={L}
                        onReady={() => console.log('onReady callback')}
                        onStart={() => console.log('onStart callback')}
                        onPause={() => console.log('onPause callback')}
                        onEnded={() => console.log('onEnded callback')}
                        onError={() => console.log('onError callback')}
                    />
                </div>
                <div className='video-size'>
                    <ReactPlayer
                        width='480px'
                        height='240px'
                        controls
                        url={O}
                        onReady={() => console.log('onReady callback')}
                        onStart={() => console.log('onStart callback')}
                        onPause={() => console.log('onPause callback')}
                        onEnded={() => console.log('onEnded callback')}
                        onError={() => console.log('onError callback')}
                    />
                </div>
                <div className='video-size'>
                    <ReactPlayer
                        width='480px'
                        height='240px'
                        controls
                        url={S}
                        onReady={() => console.log('onReady callback')}
                        onStart={() => console.log('onStart callback')}
                        onPause={() => console.log('onPause callback')}
                        onEnded={() => console.log('onEnded callback')}
                        onError={() => console.log('onError callback')}
                    />
                </div>
            </div>

            <div className='wrapper2 ' >
                <div className='video-size'>
                    <ReactPlayer
                        width='480px'
                        height='240px'
                        controls
                        url={L}
                        onReady={() => console.log('onReady callback')}
                        onStart={() => console.log('onStart callback')}
                        onPause={() => console.log('onPause callback')}
                        onEnded={() => console.log('onEnded callback')}
                        onError={() => console.log('onError callback')}
                    />
                </div>
                <div className='video-size'>
                    <ReactPlayer
                        width='480px'
                        height='240px'
                        controls
                        url={O}
                        onReady={() => console.log('onReady callback')}
                        onStart={() => console.log('onStart callback')}
                        onPause={() => console.log('onPause callback')}
                        onEnded={() => console.log('onEnded callback')}
                        onError={() => console.log('onError callback')}
                    />
                </div>
                <div className='video-size'>
                    <ReactPlayer
                        width='480px'
                        height='240px'
                        controls
                        url={S}
                        onReady={() => console.log('onReady callback')}
                        onStart={() => console.log('onStart callback')}
                        onPause={() => console.log('onPause callback')}
                        onEnded={() => console.log('onEnded callback')}
                        onError={() => console.log('onError callback')}
                    />
                </div>
            </div>
        </div>
    );
}
export default Video;