import Link from "next/link";
import Image from "next/image";
import {Text, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
font-weight: bold;
font-size: 19px;
display: inline-flex;
align-items: center;
height: 40px;
line-height : 40px;
padding: 10px;

`
const Logo = () => {
    const footPrintImg = `/images/logo${useColorModeValue('','-dark')}.png`
return(
    <Link href="/">
        <a>
            <LogoBox>
            <Text
                color={useColorModeValue('gray.800','whiteAlpha.900')}
                fontFamily='Mukta'
                fontWeight="bold"
                ml={3}>
                BirceSarıgül
            </Text>
            </LogoBox>
        </a>
    </Link>
)
}
export default Logo


