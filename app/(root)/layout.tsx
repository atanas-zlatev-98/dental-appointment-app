import NavigationBar from "@/components/shared/navigation-bar/NavigationBar";

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="bg-white w-full h-screen flex flex-col items-center">
            <NavigationBar/>
            {children}
        </div>
    )
}