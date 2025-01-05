import Footer from "@/components/footer";
import Header from "@/components/header/header";















export default function RootLayout({ children }) {
    return (
        <>
            <Header />

            <main>{children}</main>
            <Footer />


        </>
    );
}
