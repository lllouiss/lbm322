"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import Header from "@/components/Header";
import {Footer} from "@/components/Footer";

export default function RootLayout(props) {
    return (
        <ChakraProvider value={defaultSystem}>
            <ThemeProvider attribute="class" disableTransitionOnChange>
                <Header/>
                {props.children}
                <Footer/>
            </ThemeProvider>
        </ChakraProvider>
    )
}