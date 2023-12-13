"use client";

import React, { useState } from "react";
import Monstros from "../../components/Monstros";
import styles from "../Monstros/monstros.module.css"
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const PaginaMonstros = () => {
  const [monstrosId, setMonstrosId] = useState(null);
  const [monstros, setMonstros] = useState(null);
  const [error, setError] = useState(null);

  const getMonstros = async () => {
    try {
      const resposta = await fetch(
        `https://www.dnd5eapi.co/api/monsters/${monstrosId}`
      );
      const data = await resposta.json();
      setMonstros(data);
      setError(null);
    } catch (error) {
      console.error("Erro fetching Monstros:", error);
      setError("Falha na busca Monstros. Tente novamente.");
    }
  };

  return (
    <>
    <Sidebar></Sidebar>
      <div className={styles.title}>
        <h1>Monsters</h1>
        <h10>Monstros</h10>
      </div>
      <br></br>

      <div className={styles.nome3}>
      
      <input
       className={styles.quadrado}
        type="name"
        placeholder="Digite sem espaço ( - ) exemplo: goblin"
        value={monstrosId}
        onChange={(event) => setMonstrosId(event.target.value)   }
      />
      
      <br />
      <button onClick={getMonstros}>Pesquise um monstro</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {monstros && <Monstros monstros={monstros} />}
      </div>
      <Footer></Footer>
    </>
  );
};

export default PaginaMonstros;