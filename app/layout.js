import { Inter } from "next/font/google"
import {Provider} from "@/components/provider";
import Header from "@/components/Header";
import {Footer} from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
})

export const metadata = {
    title: "ZMitt AG",
    description: "Bestellen und frisch geniessen.",
}


export default function RootLayout({children}) {
    return (
        <html lang="de" className={`${inter.className}`} suppressHydrationWarning>
        <body>
            <Provider>
                <Header/>
                {children}
                <Footer/>
            </Provider>
        </body>
        </html>
    )
}