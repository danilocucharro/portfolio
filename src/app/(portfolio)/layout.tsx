import { Header } from "../components/header";

export default function PortfolioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="max-w-269 w-full mx-auto flex flex-col h-dvh">
      <Header />
      {children}
    </div>
  );
}
