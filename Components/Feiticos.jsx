import styles from "../app/feitcos/feiticos.module.css"
import Image from "next/image"

const Feiticos = ({ feiticos }) => {
  return (

    <>
      <div className={styles.nome}>
        <h2>{feiticos.name}</h2>
        <h2>Level {feiticos.level}</h2>
      </div>

      <div className={styles.tudo}>




        <div className={styles.um}>

          <h2>Duração: <br />{feiticos.duration}</h2>
          <br />
          <h2> Alcance:  <br />{feiticos.range}</h2>
        </div>

        <div className={styles.dois}>
          <h2> Tempo:  <br />{feiticos.casting_time}</h2>
          <br />
          <h2>Tipo:  <br /> {feiticos.attack_type}</h2>
        </div>


        <div className={styles.lado}>

        </div>
      </div>
    </>
  );

};


export default Feiticos;