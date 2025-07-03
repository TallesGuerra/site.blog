import { Header } from "@/components/header";

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
            <Header />

            <h1 className="text-4xl font-bold mb-4">Blog Page</h1>
            <p className="text-lg">Welcome to the blog page!</p>

        </div>
    );
}