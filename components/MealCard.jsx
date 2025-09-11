import {Badge, Box, Button, HStack, Spacer, NumberInput, Text} from "@chakra-ui/react";
import {DecorativeBox} from "@/components/DecorativeBox";
import {LuMapPin, LuStore} from "react-icons/lu";
import {useState} from "react";

export default function MealCard({ meal, addToCart }) {
    const [count, setCount] = useState(meal.count !== 0 ? 1 : 0)
    const [loading, setLoading] = useState(false);

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const onclick = async () => {
        setLoading(true);
        addToCart(meal, count)
        await sleep(500);
        setLoading(false);
    }

    return (
        <Box
            key={meal.name}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            position="relative"
        >
            { meal.count === 0 &&
                <Badge colorPalette="red" position="absolute" top={2} right={2} fontSize="xs">
                    Artikel ausverkauft
                </Badge>
            }

            <DecorativeBox
                width="100%"
                height="200px"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                {meal.name} Bild
            </DecorativeBox>

            <Box p="4">
                <Text fontWeight="bold" fontSize="lg">
                    {meal.name}
                </Text>
                <Text fontSize="sm" color="gray.500" display="flex" alignItems="center" gap={2}>
                    <LuStore />
                    {meal.store}
                </Text>
                <Text fontSize="sm" color="gray.500" display="flex" alignItems="center" gap={2}>
                    <LuMapPin />
                    {meal.location}
                </Text>
                <Text fontWeight="medium" fontSize="xl" mt="2">
                    {meal.price} CHF
                </Text>
            </Box>

            <Spacer />

            <HStack p="4" gap={3}>
                <NumberInput.Root
                    value={count}
                    min={meal.count !== 0 ? 1 : 0}
                    max={meal.count}
                    disabled={meal.count === 0}
                    onValueChange={(e) => setCount(e.valueAsNumber)}
                >
                    <NumberInput.Control>
                        <NumberInput.IncrementTrigger />
                        <NumberInput.DecrementTrigger />
                    </NumberInput.Control>
                    <NumberInput.Input />
                    <NumberInput.Scrubber />
                </NumberInput.Root>

                <Button
                    variant="solid"
                    colorScheme="green"
                    disabled={meal.count === 0}
                    onClick={onclick}
                    loading={loading}
                >
                    In den Warenkorb
                </Button>
            </HStack>
        </Box>
    )
}
