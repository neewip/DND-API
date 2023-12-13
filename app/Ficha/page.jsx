"use client"

import Sidebar from "../../Components/Sidebar";
import styles from "./ficha.module.css"
import Image from "next/image";
import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Link from "next/link";


const PaginaFicha = () => {
    const [skillId, setSkillId] = useState(1);
    const [error, setError] = useState(null);

    const getSkill = async () => {
        try {
            const response = await fetch(`https://www.dnd5eapi.co/api/skills/${skillId}`);
            const resData = await response.json();

            console.log(resData.desc);
            document.getElementById("descricao").innerHTML = resData.desc;
        } catch (error) {
            console.log('error', error);
        }
    }


    //

    const [raceId, setRaceId] = useState(1);

    const getAlign = async () => {
        try {
            const response = await fetch(`https://www.dnd5eapi.co/api/races/${raceId}`);
            const resData = await response.json();

            console.log(resData.alignment);
            document.getElementById("alinhamento").innerHTML = resData.alignment;
        } catch (error) {
            console.log('error', error);
        }
    }

    const getSubrace = async () => {
        try {
            const response = await fetch(`https://www.dnd5eapi.co/api/races/${raceId}/subraces`);
            const resData = await response.json();

            console.log(resData.results[0].name);
            document.getElementById("subraca").innerHTML = resData.results[0].name;
        } catch (error) {
            console.error("Erro fetching Subraces:", error);
            setError("Essa raça não possui subraças");
        
        }
    }

    const getCara = async () => {
        try {
            const response = await fetch(`https://www.dnd5eapi.co/api/races/${raceId}`);
            const resData = await response.json();

            console.log(resData.size_description);
            document.getElementById("caracteristicas").innerHTML = resData.size_description;
        } catch (error) {
            console.log('error', error);
        }
    }


    //

    const [classId, setClassId] = useState(1);

    const getSubclass = async () => {
        try {
            const response = await fetch(`https://www.dnd5eapi.co/api/classes/${classId}/subclasses`);
            const resData = await response.json();

            console.log(resData.results[0].name);
            document.getElementById("subclasse").innerHTML = resData.results[0].name;
        } catch (error) {
            console.log('error', error);
        }
    }

    const getProf = async () => {
        try {
            const response = await fetch(`https://www.dnd5eapi.co/api/classes/${classId}/proficiencies`);
            const resData = await response.json();

            console.log(resData.results[0].name);
            document.getElementById("prof").innerHTML = resData.results[0].name;
            document.getElementById("prof1").innerHTML = resData.results[1].name;
            document.getElementById("prof2").innerHTML = resData.results[2].name;
            document.getElementById("prof3").innerHTML = resData.results[3].name;
            document.getElementById("prof4").innerHTML = resData.results[4].name;

        } catch (error) {
            console.log('error', error);
        }

    }

    const getHitDie = async () => {
        try {
            const response = await fetch(`https://www.dnd5eapi.co/api/classes/${classId}`);
            const resData = await response.json();

            console.log(resData.hit_die);
            document.getElementById("equip").innerHTML = resData.hit_die;
        } catch (error) {
            console.log('error', error);
        }
    }


    return (
        <>

            <Sidebar></Sidebar>
            <h1 className={styles.title}>
                Ficha de Personagem?
            </h1>


            <div className={styles.container}>
                <Image width={150} height={200} alt="ficha" src="/ficha.jpg"></Image>
                <br />
                <p> Uma ficha de personagem é um registro de um personagem do jogador em um RPG, incluindo quaisquer detalhes, notas, estatísticas do jogo e informações básicas que um jogador possa precisar durante uma sessão de jogo.</p>
                <br />
                <p>Ela diz quem seu personagem é, quais são suas habilidades, o que ele consegue ou não fazer, quais são suas armas, magias e equipamentos, qual é a sua história e a sua personalidade.</p>
                <br />
                <Link target="_blank" href="https://nuckturp.com.br/">https://nuckturp.com.br/</Link>
            </div>

            <h1 className={styles.title}>
                Crie sua Ficha
            </h1>

            <div className={styles.ficha}>
                <div className={styles.div}>
                    <div className={styles.nome}>
                        <h1>Nome do seu Personagem</h1>
                    </div>
                    <input type="text" />
                </div>
                <br />
                <div className={styles.div}>
                    <div className={styles.nome}>
                        <h1>Class</h1>
                        <p className={styles.font}>Classe</p>
                    </div>
                    <select name="classes" id="classes" value={classId}
                        onChange={(event) => setClassId(event.target.value)}>

                        <option value="">Escolha</option>
                        <option value="barbarian">Bárbaro</option>
                        <option value="bard">Bardo</option>
                        <option value="cleric">Clérigo</option>
                        <option value="druid">Druída</option>
                        <option value="fighter">Guerreiro</option>
                        <option value="monk">Monge</option>
                        <option value="paladin">Paladino</option>
                        <option value="ranger">Patrulheiro</option>
                        <option value="rogue">Ladino</option>
                        <option value="sorcerer">Feiticeiro</option>
                        <option value="warlock">Bruxo</option>
                        <option value="wizard">Mago</option>
                    </select>


                </div>
                <br />
                <div className={styles.black}>

                <div className={styles.div2}>
                    <p><strong>Proficiências</strong></p>
                    <button onClick={getProf}>Veja as proeficiências</button>
                    <div id="prof"></div>
                    <div id="prof1"></div>
                    <div id="prof2"></div>
                    <div id="prof3"></div>
                    <div id="prof4"></div>

                    </div>

                    <div className={styles.div2}>
                    <p><strong>Subclasses</strong></p>
                    <button onClick={getSubclass}>Veja as subclasses</button>
                    <div id="subclasse"></div>
                    </div>

                    <div className={styles.div2}>
                    <p><strong>Dano para morrer</strong></p>
                    <button onClick={getHitDie}>Veja Dano para morrer</button>
                    <div id="equip"></div>
                    </div>

                </div>

                <br />
                <div className={styles.div}>
                    <div className={styles.nome}>
                        <h1>Race</h1>
                        <p className={styles.font}>Raça</p>
                    </div>
                    <select name="race" id="race" value={raceId}
                        onChange={(event) => setRaceId(event.target.value)}>

                        <option value="">Escolha</option>
                        <option value="dragonborn">Dragonborn</option>
                        <option value="dwarf">Anão</option>
                        <option value="elf">Elfo</option>
                        <option value="gnome">Gnomo</option>
                        <option value="half-elf">Meio-Elfo</option>
                        <option value="half-orc">Meio-Orc</option>
                        <option value="halfling">Pequenino</option>
                        <option value="human">Humano</option>
                        <option value="tiefling">Tiefling</option>

                    </select>

                </div>
                <br />

                 <div className={styles.black}>

                <div className={styles.div2}>
                    <p><strong>Alinhamento</strong></p>
                    <button onClick={getAlign}>Veja seu alinhamento</button>
                    <div id="alinhamento"></div>
                 

                    </div>

                    <div className={styles.div2}>
                    <p><strong>Subraças</strong></p>
                    <button onClick={getSubrace}>Veja as subraças</button>
                    <div id="subraca"></div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    </div>

                    <div className={styles.div2}>
                    <p><strong>Caracteristícas</strong></p>
                    <button onClick={getCara}>Veja as caracteristicas</button>
                    <div id="caracteristicas"></div>
                    </div>

                </div>
                <br />
                <div className={styles.div}>
                    <div className={styles.nome}>
                        <h1>Skills</h1>
                        <p className={styles.font}>Habilidades</p>
                    </div>
                    <select name="skills" id="skills" value={skillId}
                        onChange={(event) => setSkillId(event.target.value)}>

                        <option value="">Escolha</option>
                        <option value="acrobatics">Acrobacias</option>
                        <option value="animal-handling">Manejo de animais</option>
                        <option value="arcana">Arcana</option>
                        <option value="athletics">Atlético</option>
                        <option value="deception">Enganação</option>
                        <option value="history">História</option>
                        <option value="insight">Entendimento</option>
                        <option value="intimidation">Intimidação</option>
                        <option value="investigation">Investigação</option>
                        <option value="medicine">Medicina</option>
                        <option value="nature">Natureza</option>
                        <option value="perception">Percepção</option>
                        <option value="performance">Perfomance</option>
                        <option value="persuasion">Persuasão</option>
                        <option value="religion">Religião</option>
                        <option value="sleight-of-hand">Prestidigitação</option>
                        <option value="stealth">Furtividade</option>
                        <option value="survival">Sobrevivência</option>

                    </select>

                </div>
                <br />
                <div className={styles.black}>

                <div className={styles.div3}>
                    <p><strong>Descrição</strong></p>
                    <button onClick={getSkill}>Veja as caracteristicas</button>
                    <div id="descricao"></div>
                    </div>


                </div>

                <br />

                <div className={styles.nome2}>
                    <h1>Attributes</h1>
                    <p className={styles.font}>Atributos</p>
                </div>

                <br />

                <div className={styles.div}>

                    <div className={styles.black2}>
                        <p>STR</p>
                        <p className={styles.font}>Força</p>
                        <input type="number" max={20} min={0}></input>
                    </div>
                    <div className={styles.black2}>
                        <p>DEX</p>
                        <p className={styles.font}>Destreza</p>
                        <input type="number" max={20} min={0}></input>
                    </div>
                    <div className={styles.black2}>
                        <p>CONST</p>
                        <p className={styles.font}>Constituição</p>
                        <input type="number" max={20} min={0}></input>
                    </div>
                    <div className={styles.black2}>
                        <p>INT</p>
                        <p className={styles.font}>Inteligência</p>
                        <input type="number" max={20} min={0}></input>
                    </div>
                    <div className={styles.black2}>
                        <p>WIS</p>
                        <p className={styles.font}>Sabedoria</p>
                        <input type="number" max={20} min={0}></input>
                    </div>  <div className={styles.black2}>
                        <p>CHA</p>
                        <p className={styles.font}>Carisma</p>
                        <input type="number" max={20} min={0}></input>
                    </div>

                </div>

            </div>
            <Footer></Footer>
        </>
    )
}

export default PaginaFicha