import {Container, Badge, Link, List, ListItem, AspectRatio} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Title, WorkImage, Meta} from "../../components/work";
import P from "../../components/paragraph";
import Layout  from "../../components/layouts/article";
import ReactPlayer from "react-player";

const Work = () => (
    <Layout title="Beyoğlu">
        <Container>
            <Title>
                Beyoğlu <Badge>2021</Badge>
            </Title>
            <P>
                Beyoğlu temalı kısa videolar.
            </P>
            <List ml={4} my={4}>

                <ListItem>
                    <AspectRatio maxW="640px" ratio={1.7} my={4}>
                        <iframe
                            src="https://www.youtube.com/embed/jWuvDvJf0TQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </AspectRatio>
                </ListItem>
                <ListItem>
                    <Meta>Youtube</Meta>
                    <Link href="https://www.youtube.com/watch?v=jWuvDvJf0TQ">
                        https://www.youtube.com/watch?v=jWuvDvJf0TQ<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <AspectRatio maxW="640px" ratio={1.7} my={4}>
                        <iframe
                            src="https://www.youtube.com/embed/bCxm5smf0Js"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </AspectRatio>
                </ListItem>
                <ListItem>
                    <Meta>Youtube</Meta>
                    <Link href="https://www.youtube.com/watch?v=bCxm5smf0Js">
                        https://www.youtube.com/watch?v=bCxm5smf0Js<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <AspectRatio maxW="640px" ratio={1.7} my={4}>
                        <iframe
                            src="https://www.youtube.com/embed/VP4-Y0rebI4"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </AspectRatio>
                </ListItem>
                <ListItem>
                    <Meta>Youtube</Meta>
                    <Link href="https://www.youtube.com/watch?v=VP4-Y0rebI4">
                        https://www.youtube.com/watch?v=VP4-Y0rebI4<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <AspectRatio maxW="640px" ratio={1.7} my={4}>
                        <iframe
                            src="https://www.youtube.com/embed/PSInv9IScBs"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </AspectRatio>
                </ListItem>
                <ListItem>
                    <Meta>Youtube</Meta>
                    <Link href="https://www.youtube.com/watch?v=PSInv9IScBs">
                        https://www.youtube.com/watch?v=PSInv9IScBs<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>
        </Container>
    </Layout>
)

export default Work
