import { Footer } from "../footer/footer";
import { Header } from "../header"

type LayoutProps = {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="relative flex min-h-screen flex-col dark">
            <Header />
            <main className="flex-1 flex flex-col nb-12">
                {children}
            </main>

            <Footer />
        </div>
    )
}