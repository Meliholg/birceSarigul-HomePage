import {Container,Box, Heading, SimpleGrid, Divider} from '@chakra-ui/react';
import Section from '../components/section';
import {WorkGridItem} from '../components/grid-item';
import Layout from "../components/layouts/article";


import thumbEarth from  '../public/images/works/earth.png'
import thumbBeyoglu from '../public/images/works/beyoglu.png'

const Works = () => (
        <Layout title="Works">
        <Container>
            <Heading as = "h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id = "nasa" title="Nasa" thumbnail={thumbEarth}>
                    A video edit from Nasa videos
                    </WorkGridItem>
                    <WorkGridItem id = "beyoglu" title="Beyoğlu" thumbnail={thumbBeyoglu}>
                        A video edit from Nasa videos
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
)


export default Works