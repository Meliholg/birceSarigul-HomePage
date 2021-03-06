import Head from 'next/head'
import Navbar from '../navbar'
import {Container} from "@chakra-ui/react"
import {Box} from '@chakra-ui/react'
const Main = ({children, router}) => {
    return(
        <Box as = "main" pb={8}>
            <Head>
                <meta name = "viewport" content="width=device-width, initial-scale=1"/>
                <title>Birce Sarıgül - Homepage</title>
            </Head>
            <Navbar path={router.asPath}></Navbar>
            <Container maxW="" pt={14}>

                {children}
            </Container>
        </Box>
    )
}
export default Main
