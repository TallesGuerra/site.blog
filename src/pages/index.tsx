import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="min-h-screen min-w-full bg-slate-500 flex flex-col items-center justify-center gap-4 p-4">
      <h2 className="text-4xl text-green-500">Title 2</h2>
    </div>
  );
}
