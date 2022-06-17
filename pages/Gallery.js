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
        },
        {
            id:6,
            imgSrc:"/images/gallery/eski-televizyom.jpg" ,
        },
        {
            id:7,
            imgSrc:"/images/gallery/ev-kösesi.jpg",
        },
        {
            id:8,
            imgSrc:"/images/gallery/han.jpg",
        },
        {
            id:9,
            imgSrc:"/images/gallery/han-girişi.jpg",
        },
        {
            id:10,
            imgSrc:"/images/gallery/kadın-çocuk.jpg",
        },
        {
            id:11,
            imgSrc:"/images/gallery/kapı-arası.jpg" ,
        },
        {
            id:12,
            imgSrc:"/images/gallery/kokteyl.jpg",
        },
        {
            id:13,
            imgSrc:"/images/gallery/koltuk-onden.jpg",
        },
        {
            id:14,
            imgSrc:"/images/gallery/koltuk-sergi.jpg",
        },
        {
            id:15,
            imgSrc:"/images/gallery/koltuk-yandan.jpg",
        },
        {
            id:16,
            imgSrc:"/images/gallery/kuzu.jpg" ,
        },
        {
            id:17,
            imgSrc:"/images/gallery/kuzu-çoban.jpg",
        },
        {
            id:18,
            imgSrc:"/images/gallery/kuzular.jpg",
        },
        {
            id:19,
            imgSrc:"/images/gallery/kütüphane.jpg",
        },
        {
            id:20,
            imgSrc:"/images/gallery/merdiven.jpg",
        },
        {
            id:21,
            imgSrc:"/images/gallery/merdiven-uzun.jpg" ,
        },
        {
            id:22,
            imgSrc:"/images/gallery/metro.jpg",
        },
        {
            id:23,
            imgSrc:"/images/gallery/okul.jpg",
        },
        {
            id:24,
            imgSrc:"/images/gallery/sahil-bank.jpg",
        },
        {
            id:25,
            imgSrc:"/images/gallery/sahil-gün-batımı.jpg",
        },
        {
            id:26,
            imgSrc:"/images/gallery/sahil-gün-batımı2.jpg" ,
        },
        {
            id:27,
            imgSrc:"/images/gallery/sahil-kenarı-ev.jpg",
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
