import React, { useState } from "react";
import style from "./Partcipantes.module.css"

const normal = {
    display: 'flex',
    visibility: 'hidden',
    opacity: 0,
    position: 'fixed',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    transition: 'all .6s',
  };

  const transformed = {
    display: 'flex',
    visibility: 'visible',
    opacity: 9,
    position: 'fixed',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    top: 0,
    height: '100vh',
    width: '100vw',
    overflow: 'auto',
    background: 'rgba(0, 0, 0, 0.6)',
    transition: 'all .6s',
  };


function Participantes() {
    const [buttonStyle, setButtonStyle] = useState(false);

    function handleClick() {
        setButtonStyle(!buttonStyle)
    };

    return (
        <div className={style.container}>
            <div onClick={handleClick} style={buttonStyle ? transformed : normal}>
                <div className={style.modalContainer}>
                    <div className={style.modalContent}>
                        <h2>Modal</h2>
                        <span className={style.close} aria-label="close Modal">x</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <button onClick={handleClick}>Cerrar</button>
            </div>
        </div>
    );
}

export default Participantes;
