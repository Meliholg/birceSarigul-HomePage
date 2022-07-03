import {Container, Badge, Link, List, ListItem, AspectRatio} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Title, WorkImage, Meta} from "../../components/work";
import P from "../../components/paragraph";
import Layout  from "../../components/layouts/article";
import ReactPlayer from "react-player";


const Work = () => {
    let data = [
             {
                 id:1,
                 imgSrc:"https://www.youtube.com/embed/jWuvDvJf0TQ" ,
            },
            {
                id:2,
                imgSrc:"https://www.youtube.com/embed/bCxm5smf0Js" ,
            },
            {
                id:3,
                imgSrc:"https://www.youtube.com/embed/VP4-Y0rebI4" ,
            },{
                id:4,
                imgSrc:"https://www.youtube.com/embed/PSInv9IScBs" ,
            },{
                id:5,
                imgSrc:"https://www.youtube.com/embed/UH3yU7VGQ40" ,
            }
    ]


        return(
            <>
            <div className="videos">
                {data.map((item,  index) =>{
                    return(
                        <div className="video" key={index}>
                            <ReactPlayer
                                width='600px' height='360px'
                                controls
                                url={item.imgSrc}
                            />
                            </div>
                    )
                }
                    )
                }
            </div>
            </>
        )
}

export default Work
