'use client'
import styles from "../sobrenos/page.module.css"
import Footer from "../../components/Footer"
import Popup from 'reactjs-popup';
import Sidebar from "../../components/Sidebar";
import Image from "next/image";


export default function SobreNos() {
    return (
        <>
        <Sidebar></Sidebar>
            <div className={styles.sobrenos}>

                <div className={styles.logo}>

                    <h1> Nosso Grupo </h1>

                </div>

                <div className={styles.fotostudo}>


                    <div className={styles.fotos}>

                        <div className={styles.nome1}>
                            <img src='/vitoria.jpg' width={100} height={100}></img>
                            <Popup
                                trigger={<button className={styles.button}>Vitória</button>}
                                modal
                                nested
                            >
                                {close => (
                                    <div className={styles.modal}>

                                        <div className={styles.header}>Vitoria</div>
                                        <div className={styles.content}>
                                            {' '}
                                            <Image src='/vitoria.jpg' width={250} height={250} alt="vick"></Image>
                                            <br />
                                            Vitória Maria Meneghesso.
                                            <br></br>
                                            16 anos.
                                            <br></br>
                                            Líder.
                                            <br></br>
                                            Peixes.
                                            <br></br>

                                        </div>
                                        <div className={styles.actions}>
                                            <button
                                                className={styles.button}
                                                onClick={() => {
                                                    console.log('modal closed ');
                                                    close();
                                                }}
                                            >
                                                FECHAR                  </button>
                                        </div>
                                    </div>
                                )}
                            </Popup>                        </div>

                        <div className={styles.nome1}>
                            <img src='/isabela.png' width={100} height={100}></img>
                            <Popup
                                trigger={<button className={styles.button}>Isabela</button>}
                                modal
                                nested
                            >
                                {close => (
                                    <div className={styles.modal}>

                                        <div className={styles.header}>Isabela</div>
                                        <div className={styles.content}>
                                            {' '}
                                            <Image src='/isabela.png' width={250} height={250} alt="isa"></Image>
                                            <br />
                                            Isabela Mariano Rodrigues.
                                            <br></br>
                                            17 anos.
                                            <br></br>
                                            Integrante.
                                            <br></br>
                                            Virgem.
                                            <br></br>

                                        </div>
                                        <div className={styles.actions}>
                                            <button
                                                className={styles.button}
                                                onClick={() => {
                                                    console.log('modal closed ');
                                                    close();
                                                }}
                                            >
                                                FECHAR                  </button>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        </div>

                        <div className={styles.nome1}>
                            <Image src='/luis.png' width={100} height={100} alt="luis"></Image>
                            <br />
                            <Popup
                                trigger={<button className={styles.button}>Luis</button>}
                                modal
                                nested
                            >
                                {close => (
                                    <div className={styles.modal}>

                                        <div className={styles.header}>Luis</div>
                                        <div className={styles.content}>
                                            {' '}
                                            <img src='/luis.png' width={250} height={250}></img>
                                            <br />
                                            Luis Vinícius Silva.
                                            <br></br>
                                            17 anos.
                                            <br></br>
                                            Cabeça auxiliar.
                                            <br></br>
                                            Escorpião.
                                            <br></br>

                                        </div>
                                        <div className={styles.actions}>
                                            <button
                                                className={styles.button}
                                                onClick={() => {
                                                    console.log('modal closed ');
                                                    close();
                                                }}
                                            >
                                                FECHAR                  </button>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        </div>
                    </div>


                    <div className={styles.fotos}>

                        <div className={styles.nome1}>
                            <Image src='/angelo.jpeg' width={100} height={100} alt="angelo"></Image>
                            <Popup
                                trigger={<button className={styles.button}>Angelo</button>}
                                modal
                                nested
                            >
                                {close => (
                                    <div className={styles.modal}>

                                        <div className={styles.header}>Ângelo</div>
                                        <div className={styles.content}>
                                            {' '}
                                            <img src='/angelo.jpeg' width={250} height={250}></img>
                                            <br />
                                            Ângelo Bevilacqua.
                                            <br></br>
                                            17 anos.
                                            <br></br>
                                            Integrante.
                                            <br></br>
                                            Leão.
                                            <br></br>

                                        </div>
                                        <div className={styles.actions}>
                                            <button
                                                className={styles.button}
                                                onClick={() => {
                                                    console.log('modal closed ');
                                                    close();
                                                }}
                                            >
                                                FECHAR                  </button>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        </div>

                        <div className={styles.nome1}>
                            <Image src='/nath.jpg' width={100} height={100} alt="nathi"></Image>
                            <Popup
                                trigger={<button className={styles.button}>Nathalia</button>}
                                modal
                                nested
                            >
                                {close => (
                                    <div className={styles.modal}>

                                        <div className={styles.header}>Nathália</div>
                                        <div className={styles.content}>
                                            {' '}
                                            <img src='/nath.jpg' width={250} height={250}></img>
                                            <br />
                                            Nathália da Silva Pasquotto.
                                            <br></br>
                                            16 anos.
                                            <br></br>
                                            Integrante.
                                            <br></br>
                                            Capricórnio.
                                            <br></br>

                                        </div>
                                        <div className={styles.actions}>
                                            <button
                                                className={styles.button}
                                                onClick={() => {
                                                    console.log('modal closed ');
                                                    close();
                                                }}
                                            >
                                                FECHAR                  </button>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        </div>

                        <div className={styles.nome1}>
                            <img src='/sophia.jpg' width={100} height={100}></img>
                            <Popup
                                trigger={<button className={styles.button}>Sophia</button>}
                                modal
                                nested
                            >
                                {close => (
                                    <div className={styles.modal}>

                                        <div className={styles.header}>Sophia</div>
                                        <div className={styles.content}>
                                            {' '}
                                            <Image src='/sophia.jpg' width={250} height={250} alt="sophia"></Image>
                                            <br />
                                            Sophia Bezutt.
                                            <br></br>
                                            17 anos.
                                            <br></br>
                                            Integrante.
                                            <br></br>
                                            Virgem.
                                            <br></br>

                                        </div>
                                        <div className={styles.actions}>
                                            <button
                                                className={styles.button}
                                                onClick={() => {
                                                    console.log('modal closed ');
                                                    close();
                                                }}
                                            >
                                                FECHAR                  </button>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        </div>

                    </div>

                </div>
                <Footer></Footer>
            </div>
        </>
    )
}