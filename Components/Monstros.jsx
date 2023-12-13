import styles from "../app/Monstros/monstros.module.css"
import Image from "next/image"

const Monstros = ({ monstros }) => {
    return (
        <>
        <div className={styles.titlee}>
      <div className={styles.fotos}>
        <Image className={styles.monstro} alt="não existe imagem desse monstro" width={200} height={200} src={'https://dnd5eapi.co' + monstros.image}/>
        <div className={styles.fotostudo}>
        <p>Nome: {monstros.name}</p>
        <br></br>
        <p>Tamanho: {monstros.size}</p>
        <br></br>
        <p>Alinhamento: {monstros.alignment}</p>
        </div>
        </div>
        <br></br>
        <br></br>
        <div className={styles.nome5}>
        <h1>Atributos</h1>
        <p>Força: {monstros.strength}</p>
        <p>Destreza: {monstros.dexterity}</p>
        <p>Constituição: {monstros.constitution}</p>
        <p>Inteligência: {monstros.intelligence}</p>
        <p>Sabedoria: {monstros.wisdom}</p>
        <p>Carisma: {monstros.charisma}</p>
      </div>
      </div>
      </>
    );
  };
  
  export default Monstros;