"use client"

import {Box, Button, Text, Container, SimpleGrid, Spacer, NumberInput, HStack, Badge, Heading,} from "@chakra-ui/react"
import { DecorativeBox } from "@/components/DecorativeBox"
import { useMealsStore } from "@/store/useMealsStore"
import { LuStore, LuMapPin } from "react-icons/lu"
import { useState } from "react"
import MealCard from "@/components/MealCard";

export default function MealsDisplay() {
    const meals = useMealsStore((state) => state.meals)
    const addToCart = useMealsStore((state) => state.addToCart)

    return (
        <Container>
            <Heading as="h1" fontSize="4xl" mb={8}>Produkte</Heading>
            <SimpleGrid columns={4} gap={8} width="100%">
                {meals.map((meal) => {
                    return <MealCard key={meal.name} meal={meal} addToCart={addToCart} />
                })}
            </SimpleGrid>
        </Container>
    )
}
