import styles from './page.module.css'
import Nav from "@/app/Nav";
import Introduction from "@/app/Introduction";
import Services from "@/app/Services";
import Ourwork from "@/app/Ourwork";
export default function Home() {
    return (
        <main id="main" className={styles}>
            <Nav/>
            <Introduction/>
            <Services/>
            <Ourwork/>



        </main>
    )
}
