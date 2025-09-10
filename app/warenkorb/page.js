"use client"

import {
    Box, Button, Container, Flex, Heading, Input, Stack, Text, VStack, IconButton, Badge, Fieldset, Field, RadioCard,
    HStack
} from "@chakra-ui/react"
import { useMealsStore } from "@/store/useMealsStore"
import { useState } from "react"
import { useRouter } from "next/navigation"
import {LuTrash} from "react-icons/lu";

export default function Warenkorb() {
    const router = useRouter()

    const cart = useMealsStore((state) => state.cart)
    const clearCart = useMealsStore((state) => state.clearCart)
    const removeFromCart = useMealsStore((state) => state.removeFromCart)

    const handleRemove = (mealName) => {
        removeFromCart(mealName)
    }

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const isSingleLocation = cart.length === 0 || cart.every(item => item.location === cart[0].location);


    const handleCheckout = () => {
        clearCart()
        router.push("/")
    }

    return (
        <Container>
            <Heading as="h1" fontSize="4xl" mb={8}>Warenkorb</Heading>

            <VStack spacing={6} align="stretch">
                <Box p={4} borderWidth="1px" borderRadius="md">
                    <Heading size="xl" mb={4}>Bestellung</Heading>
                    {cart.length === 0 ? (
                        <Text>Ihr Warenkorb ist leer.</Text>
                    ) : (
                        <VStack spacing={4} align="stretch">
                            {cart.map((item) => (
                                <Flex key={item.name} align="center" justify="space-between">
                                    <Box flex="1">
                                        <Text fontWeight="bold">{item.quantity} x {item.name}</Text>
                                        <Text>{item.location}</Text>
                                        <Text>Preis: {item.price.toFixed(2)} CHF</Text>
                                    </Box>

                                    <Box ml={4}>
                                        <Text>{(item.price * item.quantity).toFixed(2)} CHF</Text>
                                    </Box>

                                    <Box ml={4}>
                                        <IconButton onClick={() => handleRemove(item.name)}>
                                            <LuTrash/>
                                        </IconButton>
                                    </Box>
                                </Flex>
                            ))}

                            <Flex justify="space-between" mt={4}>
                                <Text fontWeight="bold">Gesamt:</Text>
                                <Text fontWeight="bold">{totalPrice.toFixed(2)} CHF</Text>
                            </Flex>
                        </VStack>
                    )}
                </Box>

                <Box p={4} borderWidth="1px" borderRadius="md">
                    <Heading size="xl" mb={4}>Persönliche Daten</Heading>
                    <Fieldset.Root size="lg" maxW="md">
                        <Fieldset.Content>
                            <Field.Root>
                                <Field.Label>Vorname</Field.Label>
                                <Input name="firstname" />
                            </Field.Root>

                            <Field.Root>
                                <Field.Label>Nachname</Field.Label>
                                <Input name="lastname" />
                            </Field.Root>

                            <Field.Root>
                                <Field.Label>E-Mail Adresse</Field.Label>
                                <Input name="email" type="email" />
                            </Field.Root>
                        </Fieldset.Content>
                    </Fieldset.Root>
                </Box>

                <Box p={4} borderWidth="1px" borderRadius="md">
                    <Heading size="xl" mb={4}>Zahlung</Heading>
                    <RadioCard.Root defaultValue="next">
                        <HStack align="stretch">
                            <RadioCard.Item value="karte">
                                <RadioCard.ItemHiddenInput />
                                <RadioCard.ItemControl>
                                    <RadioCard.ItemText>Karte</RadioCard.ItemText>
                                    <RadioCard.ItemIndicator />
                                </RadioCard.ItemControl>
                            </RadioCard.Item>
                            <RadioCard.Item value="twint">
                                <RadioCard.ItemHiddenInput />
                                <RadioCard.ItemControl>
                                    <RadioCard.ItemText>Twint</RadioCard.ItemText>
                                    <RadioCard.ItemIndicator />
                                </RadioCard.ItemControl>
                            </RadioCard.Item>
                            <RadioCard.Item value="paypal">
                                <RadioCard.ItemHiddenInput />
                                <RadioCard.ItemControl>
                                    <RadioCard.ItemText>PayPal</RadioCard.ItemText>
                                    <RadioCard.ItemIndicator />
                                </RadioCard.ItemControl>
                            </RadioCard.Item>
                        </HStack>
                    </RadioCard.Root>
                </Box>

                <Box p={4} borderWidth="1px" borderRadius="md">
                    <Heading size="xl" mb={4}>Abholung</Heading>
                    { !isSingleLocation? (
                        <Badge colorPalette="red">
                            Du hast Artikel von mehreren Automaten im Warenkorb
                        </Badge>
                    ):(
                        cart.length === 0? <Text>Ihr Warenkorb ist leer. </Text> : <Text>Abholung beim Automaten {cart[0].location} ab 12 Uhr </Text>
                    )
                    }
                </Box>

                <Box width="100%" display="flex" justifyContent="flex-end">
                    <Button size="lg" onClick={handleCheckout} disabled={cart.length === 0 || !isSingleLocation}>
                        Bestellen
                    </Button>
                </Box>
            </VStack>
        </Container>
    )
}
