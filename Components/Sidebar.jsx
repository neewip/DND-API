import styles from "@/app/sidebar.module.css"
import { FaBars } from "react-icons/fa";
import Image from "next/image";

function Sidebar() {
    return (
        <>

            <div className={styles.dnd}>
<Image width={900} height={100} src="/logodnd.png"></Image>
            </div>

            <div className={styles.slayout}>
                <div className={styles.slayoutsidebar}>
                    <a className={styles.ssidebartrigger} href="#0">
                        
                        <FaBars />
                        <Image  width={350} height={55} src="/logodnd.png"></Image>

                    </a>

                    <nav className={styles.ssidebarnav}>
                        <ul>
                            <li>
                                <a className={styles.ssidebarnavlink} href="/">
                                    <em>Home</em>
                                </a>
                            </li>
                            <li>
                                <a className={styles.ssidebarnavlink} href="/Monstros">
                                    <em>Monstros</em>
                                </a>
                            </li>
                            <li>
                                <a className={styles.ssidebarnavlink} href="/feitcos">
                                    <em>Encantamentos</em>
                                </a>
                            </li>
                            <li>
                                <a className={styles.ssidebarnavlink} href="/Ficha">
                                    <em>Ficha de Personagem</em>
                                </a>
                            </li>
                            <li>
                                <a className={styles.ssidebarnavlink} href="/sobrenos">
                                    <em>Nosso Grupo</em>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

               
            </div>
        </>

    )
}

export default Sidebar