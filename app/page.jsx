"use client"
import Sidebar from "@/components/Sidebar"
import styles from "./home.module.css"
import Image from "next/image"
import Footer from "@/components/Footer"
import Link from "next/link"


function Home() {
return(

    <>
    
    <Sidebar></Sidebar>
   
    <Image className={styles.img} alt="dragon" src="/image.jpeg" width={1700} height={900}></Image>
    
    
    <h1 className={styles.title}>D&D 5th edition</h1>

    <div className={styles.title2}>
    <Image className={styles.img2} alt="dado" src="/imagedado.jpeg" width={160} height={160}></Image>

<p>D&D 5e API é uma RESTful API que contém todas as informações da 5º Edição de Dungeons e Dragons, como classes, monstros, feitiços e equipamento.</p>
<br />
<p>O jogo de interpretação Dungeons & Dragons é sobre contar histórias em mundos de espada e feitiçaria.
Como jogos de faz de conta, D&D é conduzido pela imaginação.
É sobre visualizar um castelo em ruínas em uma floresta escura e imaginar como um aventureiro fantástico pode reagir aos desafios que a cena apresenta.
</p>
<br />
<Link target="_blank" href="https://dnd.wizards.com/pt-BR">https://dnd.wizards.com/pt-BR</Link>
</div>
    
<h1 className={styles.title}>Como Jogar</h1>

<div className={styles.title2}>
    <Image className={styles.img3} alt="povo" src="/imagep.jpeg" width={450} height={260}></Image>

<p>Em D&D, cada jogador cria um personagem heroico para representá-lo no jogo: ele pode ser um guerreiro habilidoso, um clérigo devoto, um ladino mortal, 
    um mago conjurador ou algo completamente diferente!</p>
    <br />
    <p>
Juntos, o Dungeon Master (ou DM) e os jogadores criam uma história emocionante, de aventureiros ousados que enfrentam perigos fatais. 
Mesmo que o grupo não complete a aventura com sucesso, a diversão e as lembranças fazem de todos vencedores.
</p>
<br />
<Link target="_blank" href="https://dnd.wizards.com/pt-BR">https://dnd.wizards.com/pt-BR</Link>
<br />
</div>   
<Footer></Footer>

    </>
)
}

export default Home