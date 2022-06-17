import NextLink from "next/link";
import {
    Container,
    Box,
    Heading,
    Image,
    Link,
    useColorModeValue,
    Button,
    SimpleGrid,
    List,
    ListItem,
    Icon
} from "@chakra-ui/react";
import section from '../components/section'
import Paragraph from "../components/paragraph";
import {ChevronRightIcon} from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import {BioSection, BioYear} from "../components/bio";
import {Head} from "next/document";
import {GridItem} from "../components/grid-item";
import {IoLogoBehance,IoLogoInstagram,IoLogoLinkedin,IoLogoTwitter} from "react-icons/io5";

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6}
                     align="center">
                    Hello, I am the pretiest girl in the world
                </Box>
                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Birce Sarıgül
                        </Heading>
                        <p>Sosyal Medya - Fotoğraf - Video - Reklamcılık </p>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px"
                               display="inline-block" borderRadius="full" src="/images/profile-image.jpeg"
                               alt="Profile Image"/>
                    </Box>
                </Box>
                <section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Hakkımda
                    </Heading>
                    <Paragraph>Üretmeyi, kendi içeriğimi yaratmayı, bakmaktan çok görmeyi seviyorum. Hayatım boyunca da
                        özgür ve özgün içerikler üretmeyi hedefliyorum. Medyanın çeşitli mecralarında yer almak istiyorum.
                        Okuduğum bölümlerle de hobilerimi mesleğim haline getirmeyi umuyorum. Bulunacağım bu sektörde
                        işlerimi keyif alarak yapacağıma eminim. Her gün evrilen medya dünyasında öğrenmeye ve değişime
                        katılmaya hazırım.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                                Portfolyo
                            </Button>
                        </NextLink>
                    </Box>
                </section>
                <section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Eğitim
                    </Heading>
                    <Heading as="h3" variant="Subsection-title">
                        İstanbul Bilgi Üniversitesi
                    </Heading>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Reklamcılık - Not Ortalaması : 3.38
                    </BioSection>
                    <BioSection>
                        <BioYear>2023</BioYear>
                        Yeni Medya ve İletişim - Not Ortalaması : 3.62
                    </BioSection>
                </section>
                <section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Deneyimler / Projeler
                    </Heading>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Youtube - Şehirde Sanat Programı Kameramanlık
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        İstanbul Bilgi Ünversitesi, Project'06
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        İstanbul Bilgi Üniversitesi, Öğrenci Destek Merkezi
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Bilgili Reklamcılar Öğrenci Kulübü Başkanlığı
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Freelance Video Kurgu
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        TEGV Gönüllü Eğitmenlik
                    </BioSection>
                </section>
                <section delay={0.2}>
                    <Heading as="h5" variant="section-title">
                        Sertifikalar/Lisanslar/Başarılar
                    </Heading>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        <Link href="https://www.iienstitu.com/sertifika-sorgulama/sertifika/2002110360125">
                            Photoshop Eğitimi
                        </Link>
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        <Link href="https://www.iienstitu.com/sertifika-sorgulama/sertifika/200216620022">
                            Facebook ve Instagram Reklamcılığı
                        </Link>
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        ADhere Reklamcılık Günleri
                    </BioSection>
                    <BioSection>
                        <BioYear>2015</BioYear>
                        Jamboree Uluslararası İzci Kampı Japonya
                    </BioSection>
                    <BioSection>
                        <BioYear>2013</BioYear>
                        Milli İzcilik Lisansı
                    </BioSection>
                </section>
                <section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Referanslar
                    </Heading>
                    <BioSection>
                        <BioYear>Doç. Dr. Emine Eser Gegez</BioYear>
                        eser.gegez@bilgi.edu.tr
                    </BioSection>
                    <BioSection>
                        <BioYear>Dr. Ayşe Bengi Özçelik</BioYear>
                        bengi.ozcivan@bilgi.edu.tr
                    </BioSection>
                    <BioSection>
                        <BioYear>Dr. Eser Levi</BioYear>
                        eser.levi@bilgi.edu.tr
                    </BioSection>
                    <BioSection>
                        <BioYear>Cem Hakverdi</BioYear>
                        cem.hakverdi@bilgi.edu.tr
                    </BioSection>
                </section>
                <section>
                    <Heading as = "h3" variant="section-title">
                        Sosyal Medya
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://www.instagram.com/bircesarigul/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram}/>}>
                                    @bircesarigul
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/birce-sarıgül-0a4685172/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin}/>}>
                                    Birce Sarıgül
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.behance.net/bircesarigul" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoBehance}/>}>
                                    @bircesarigul
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </section>
            </Container>
        </Layout>
    )
}
export default Page
