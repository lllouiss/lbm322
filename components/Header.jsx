"use client";

import { Box, Container, Flex, HStack, Link, Image, Spacer, IconButton, Text } from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";
import { useMealsStore } from "@/store/useMealsStore";

const Header = () => {
    const cart = useMealsStore((state) => state.cart);

    // Anzahl Artikel im Warenkorb (Summe der Mengen)
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Box as="header" color="white" py={3} mb={11}>
            <Container>
                <Flex align="center">
                    <Link href={"/"}>
                        <Image src="/globe.svg" alt="logo" boxSize="50px" />
                    </Link>

                    <Spacer />

                    <HStack gap={10}>
                        <Link href="/bestellen">Bestellen</Link>
                        <Link href="/warenkorb">
                            <IconButton
                                colorScheme="teal"
                                aria-label="Warenkorb öffnen"
                                px={totalItems > 0? 4 : 0 }
                            >
                                <LuShoppingCart />
                                {totalItems > 0 && (
                                    <Text fontSize="sm" ml={1}>
                                        {totalItems}
                                    </Text>
                                )}
                            </IconButton>
                        </Link>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
