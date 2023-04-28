import Header from "@/components/Header";
import "@/styles/globals.css";

export const metadata = {
  title: "Devjobs",
  description: "Find a job as a developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
