import {Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Title, WorkImage, Meta} from "../../components/work";
import P from "../../components/paragraph";
import Layout  from "../../components/layouts/article";

const Work = () => (
    <Layout title="Nasa">
        <Container>
            <Title>
                Nasa <Badge>2021</Badge>
            </Title>
            <P>
                Nasa demo videolarından yapılmış bir müzik klibi.
            </P>
            <List ml={4} my={4}>
            <ListItem>
                <Meta>Youtube</Meta>
            <Link href="https://www.youtube.com/watch?v=_C0Ckz_aBDQ">
                https://www.youtube.com/watch?v=_C0Ckz_aBDQ<ExternalLinkIcon mx="2px" />
            </Link>
            </ListItem>
            </List>
            <WorkImage src="/images/works/nasa.png" alt="Nasa"/>
        </Container>
    </Layout>
)

export default Work
