"use client";

import React, { useState } from "react";
import Feiticos from "@/components/Feiticos";
import styles from "@/app/feitcos/feiticos.module.css"
import Sidebar from "@/components/Sidebar.jsx"
import Footer from "@/components/Footer";

const PaginaFeiticos = () => {
  const [feiticosId, setFeiticosId] = useState(null);
  const [feiticos, setFeiticos] = useState(null);
  const [error, setError] = useState(null);

  const getFeiticos = async () => {
    try {
      const resposta = await fetch(
    `https://www.dnd5eapi.co/api/spells/${feiticosId}`
      );
      const data = await resposta.json();
      setFeiticos(data);
      setError(null);
    } catch (error) {
      console.error("Erro fetching Feitiços:", error);
      setError("Falha na busca Feitiços. Tente esrever sem espaço, utilizando -");
    }
  };

  return (
    <>
    <Sidebar></Sidebar>
    <div className={styles.td}>
     <div className={styles.h1}>
      <h1 >Spells</h1>
      <h10>Feitiços</h10>
      </div>
      <br></br>
      <input className={styles.quadrado}
        type="name"
        value={feiticosId}
        placeholder="Digite sem espaço ( - ) exemplo: acid-arrow"
        onChange={(event) => setFeiticosId(event.target.value)}
      />
            <br />

      <div className={styles.pesq}>
      <button onClick={getFeiticos}>Pesquise um feitiço</button>
</div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {feiticos && <Feiticos feiticos={feiticos} />}
    </div>
    <Footer></Footer>
    </>
  );
};

export default PaginaFeiticos;

