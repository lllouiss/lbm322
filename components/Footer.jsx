import { Box, Container, HStack, VStack, Text, Link } from "@chakra-ui/react";
import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";

export function Footer() {
    return (
        <Box as="footer" mt={24} py={16}>
            <Container maxW="container.xl">
                <Box mt={16} borderTop="1px solid #e2e8f0" pt={6}>
                    <Text textAlign="center" color="gray.500">
                        © {new Date().getFullYear()} Zmitt AG. Alle Rechte vorbehalten.
                    </Text>
                </Box>
            </Container>
        </Box>
    );
}
