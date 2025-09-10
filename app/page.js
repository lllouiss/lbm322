import {
    Button,
    Container,
    Heading,
    HStack,
    VStack,
    Text,
    Image,
    SimpleGrid,
    Box,
    AspectRatio,
    Link
} from "@chakra-ui/react";
import {DecorativeBox} from "@/components/DecorativeBox";
import {LuPizza, LuMapPin, LuUsersRound} from "react-icons/lu"

export default function Home() {
    return (
        <>
            <Container mb={32}>
                <HStack gap={100}>
                    <VStack spacing={2} align={"left"} width={"100%"}>
                        <HStack>
                            <LuPizza color={"#a0bfff"}/>
                            <Text color={"#a0bfff"}>Home</Text>
                        </HStack>
                        <Heading as="h1" size="6xl">Gerichte schnell und frisch bestellen</Heading>
                        <Text textStyle="xl" color={"gray.300"}>
                            Mit unseren Autmaten bestellen sie Gerichte von lokalen Restaurants und holen sie kurz später ab.
                        </Text>
                        <Box pt={5}>
                            <Link href={"/bestellen"}>
                                <Button size={"xl"}>Jetzt Bestellen</Button>
                            </Link>
                        </Box>
                    </VStack>
                    <DecorativeBox rounded={30} width={"100%"} height={500}>
                        Bild Hero
                    </DecorativeBox>
                </HStack>
            </Container>

            <Container mb={32}>
                <VStack mb={8} align={"left"} width={"100%"}>
                    <HStack>
                        <LuPizza color={"#a0bfff"}/>
                        <Text color={"#a0bfff"}>Was wir uns überlegt haben</Text>
                    </HStack>
                    <Heading as="h1" size="4xl">Das Konzep</Heading>
                </VStack>
                <Text textStyle="xl" color={"gray.300"} width={"80%"}>
                    Mit unseren Essensautomaten holen Sie sich leckere Gerichte von lokalen Restaurants genau dann, wann
                    es Ihnen passt. Einfach online bestellen, am Automaten abholen und frisch geniessen. Das ganze ist schnell, bequem
                    und rund um die Uhr. Unsere Automaten stehen an zentralen Orten in Baden und machen es einfach,
                    unterwegs eine qualitativ hochwertige Mahlzeit zu bekommen. Ideal für Berufstätige, Studierende oder
                    alle, die keine Zeit verlieren wollen.
                </Text>
            </Container>

            <Container mb={32}>
                <VStack mb={8} align={"left"} width={"100%"}>
                    <HStack>
                        <LuUsersRound color={"#a0bfff"}/>
                        <Text color={"#a0bfff"}>Mit wem wir zusammenarbeiten</Text>
                    </HStack>
                    <Heading as="h1" size="4xl">Unsere Partner</Heading>
                </VStack>
                <VStack align={"left"} width={"100%"} mb={8}>
                    <HStack mb={4}>
                        <LuMapPin size={24} color={"#2dd593"}/>
                        <Heading as="h1" size="xl" color={"#2dd593"}>Bahnhof</Heading>
                    </HStack>
                    <HStack gap={8}>
                        <AspectRatio ratio={2} width="200px">
                            <DecorativeBox rounded={20}>
                                Logo Gleis Gourmet
                            </DecorativeBox>
                        </AspectRatio>
                        <AspectRatio ratio={2} width="200px">
                            <DecorativeBox rounded={20}>
                                Logo Kupplung & Curry
                            </DecorativeBox>
                        </AspectRatio>
                        <AspectRatio ratio={2} width="200px">
                            <DecorativeBox rounded={20}>
                                Logo Ristorante Binario
                            </DecorativeBox>
                        </AspectRatio>
                        <AspectRatio ratio={2} width="200px">
                            <DecorativeBox rounded={20}>
                                Logo Sushu Express 24
                            </DecorativeBox>
                        </AspectRatio>
                        <AspectRatio ratio={2} width="200px">
                            <DecorativeBox rounded={20}>
                                Logo Café Abfahrt
                            </DecorativeBox>
                        </AspectRatio>
                    </HStack>
                </VStack>
                <VStack align={"left"} width={"100%"}>
                    <HStack mb={4}>
                        <LuMapPin size={24} color={"#2dd593"}/>
                        <Heading as="h1" size="xl" color={"#2dd593"}>Berufsschule</Heading>
                    </HStack>
                    <HStack gap={8}>
                        <AspectRatio ratio={2} width="200px">
                            <DecorativeBox rounded={20}>
                                Logo Indian Palace
                            </DecorativeBox>
                        </AspectRatio>
                        <AspectRatio ratio={2} width="200px">
                            <DecorativeBox rounded={20}>
                                Logo Royal Döner
                            </DecorativeBox>
                        </AspectRatio>
                        <AspectRatio ratio={2} width="200px">
                            <DecorativeBox rounded={20}>
                                Logo Mio Pizza
                            </DecorativeBox>
                        </AspectRatio>
                        <AspectRatio ratio={2} width="200px">
                            <DecorativeBox rounded={20}>
                                Logo Restaurand Rösli
                            </DecorativeBox>
                        </AspectRatio>
                    </HStack>
                </VStack>
            </Container>

            <Container>
                <VStack mb={8} align={"left"} width={"100%"}>
                    <HStack>
                        <LuMapPin color={"#a0bfff"}/>
                        <Text color={"#a0bfff"}>Wo wir uns befinden</Text>
                    </HStack>
                    <Heading as="h1" size="4xl">Unsere Standorte</Heading>
                </VStack>
                <HStack gap={12}>
                    <AspectRatio ratio={3 / 2} width="100%">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d674.1741052061901!2d8.306274269735608!3d47.476344998198655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDI4JzM0LjgiTiA4wrAxOCcyNC45IkU!5e0!3m2!1sde!2sch!4v1757409199017!5m2!1sde!2sch"
                            style={{borderWidth: "0", borderRadius: "30px"}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Position Bahnhof"
                        />
                    </AspectRatio>
                    <AspectRatio ratio={3 / 2} width="100%">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d674.1238986467939!2d8.3004742697356!3d47.48025799819866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDI4JzQ4LjkiTiA4wrAxOCcwNC4wIkU!5e0!3m2!1sde!2sch!4v1757409427175!5m2!1sde!2sch"
                            style={{borderWidth: "0", borderRadius: "30px"}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Position Schulhaus"
                        />
                    </AspectRatio>
                </HStack>
            </Container>
        </>
    );
}
