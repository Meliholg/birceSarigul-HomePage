import React, {useState} from "react";
import {CloseIcon} from "@chakra-ui/icons";

const Gallery = () => {
    let data  = [
        {
            id:1,
            imgSrc:"/images/gallery/arabacamindanmanzara.jpg" ,
        },
        {
            id:2,
            imgSrc:"/images/gallery/balikadam.jpg",
        },
        {
            id:3,
            imgSrc:"/images/gallery/camdakikadin.jpg",
        },
        {
            id:4,
            imgSrc:"/images/gallery/halilar.jpg",
        },
        {
            id:5,
            imgSrc:"/images/gallery/gemi.jpg",
        }
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg=(imgSrc)=>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return(
        <>
            <div className={model? "model open" : "model"}>
                <img src={tempimgSrc}/>
                <CloseIcon onClick={()=> setModel(false)}/>
            </div>
            <div className="gallery">
                {data.map((item,index)=>{
                    return(
                        <div className="pics" key ={index} onClick={()=>getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{width: '100%'}}/>
                        </div>
                    )
                })}
            </div>
        </>

    )
}
export default Gallery
