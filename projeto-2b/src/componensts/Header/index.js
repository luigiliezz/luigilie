import Link from "next/link"
import styles from "./Header.module.css"


export default function Header(){
    return (
       
        <header>
            <nav className={styles.nav}>
                
                <ul className={styles.lista}>
                    <li className={styles.linha}>
                        <Link href="/"> Home</Link>
                    </li>

                    <li className={styles.linha}>
                        <Link href="/sobre">Sobre</Link>
                    </li>

                    <li className={styles.linha}>
                        <Link href="/discografia"> Discografia</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}