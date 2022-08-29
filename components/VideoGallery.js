import React, {useState} from 'react';

import { DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';


const VideoGallery = () => {
    const [model,setModel] = useState(false);

    let data = [
        {
            id:1,
            poster:"../public/images/works/img44.png",
            videoUri:"../public/videos/00044.MTS",
        },
        {
            id:2,
            poster:'../public/images/works/img47.png',
            videoUri:'../public/videos/00047.MTS',
        },
        {
            id:3,
            poster:'../public/images/works/img59.png',
            videoUri:'../public/videos/00059.MTS',
        },
        {
            id:4,
            poster:'../public/images/works/img68.png',
            videoUri:'../public/videos/00068.MTS',
        },
        {
            id:5,
            poster:'../public/images/works/img75.png',
            videoUri:'../public/videos/00075.MTS',
        }
    ]
    return(
        <>
        <h1>Video Gallery</h1>
            <div className="gallery">
                {data.map((item,index)=>{
                    return(
                        <div className="video" key={index}>
                                <div className="video-container">
                                    <Video
                                        style={{width: '100%'}}
                                        autoPlay={model}
                                        controls={['PlayPause','Seek','Time','Volume','Fullscreen']}
                                        poster={item.poster}
                                    >
                                        <source src={item.videoUri} type="video/webm"/>
                                    </Video>
                                </div>
                            </div>
                    )
                })}

            </div>
        </>
    )

}
export default VideoGallery
