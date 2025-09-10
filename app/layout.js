import { Inter } from "next/font/google"
import Provider from "./provider"

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
        <html lang="de" className={inter.className} suppressHydrationWarning>
        <body>
            <Provider>{children}</Provider>
        </body>
        </html>
    )
}