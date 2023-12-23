import styles from './page.module.css'
import Nav from "@/app/Nav";
import Introduction from "@/app/Introduction";
import Services from "@/app/Services";
import Ourwork from "@/app/Ourwork";
import News from "@/app/News";
export default function Home() {
    return (
        <main id="main" className={styles}>
            <Nav/>
            <Introduction/>
            <Services/>
            <Ourwork/>
            <News/>



        </main>
    )
}
