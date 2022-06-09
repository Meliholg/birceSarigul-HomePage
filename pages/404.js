import NextLink from "next/link";
import { Box,Heading, Text, Container, Divider, Button} from "@chakra-ui/react";

const NotFound=() => (
        <Container>
            <Heading as="h1">Bulamadım</Heading>
            <Text> Aradığın şey burada yok.</Text>
        <Divider my={6} />
            <Box my={6} align="center">
                <NextLink href="/">
                    <Button ColorScheme="teal">Anasayfaya dönüş</Button>
                </NextLink>
            </Box>
        </Container>

    )

export default NotFound