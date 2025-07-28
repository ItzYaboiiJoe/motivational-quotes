import Navbar from "@/components/shared/header";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="grid grid-cols-1 grid-flow-col justify-items-center content-center gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}
