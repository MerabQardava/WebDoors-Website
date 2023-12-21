"use client"
import styles from "./Nav.css"
import Link from "next/link";
import {useEffect, useState} from "react";


function Nav(){
    // const router=useRouter()
    //
    // const handle
    const [scrollPosition,setScrollPosition]=useState(0)

    console.log(scrollPosition)
    function handleScroll(){
        console.log("sus")

    }
    useEffect(()=>{
        const handleScroll=window.onscroll = ()=>{
            setScrollPosition(window.scrollY)
        }

        window.addEventListener("scroll",handleScroll)

        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }

    },[])



    return(
        <header>
            <nav className={scrollPosition>=200?"sticky":""}>
                <div id="pagesContainer">
                    <Link className="my_link" href="Service">Services</Link>
                    <Link className="my_link" href="Service">Projects</Link>
                    <Link className="my_link" href="Service">About</Link>
                </div>
                <div id="logo_div">
                    <img src="Webdoors logo.png"/>
                </div>
                <div id="user_div">
                    <div id="user_logo">
                        <img src="Combined-Shape.svg"/>
                    </div>
                    <img src="VectorMenu.svg"/>
                </div>
            </nav>

        </header>

    )

}

export default Nav;

