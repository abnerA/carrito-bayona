import React, { useState } from "react";
import style from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  startSection,
  closeSection
} from "../../App/features/IniciarSesion";
import HeaderModal from "../Modal/HeaderModal";

export function Header() {
  const [buttonStyle, setButtonStyle] = useState(false);
  const start = useSelector((state) => state.inicio);
  const dispatch = useDispatch();

  function handleClick() {
    setButtonStyle(!buttonStyle);
    dispatch(startSection());
  };

  return (
    <header className={style.header}>
      <h3 className={style.title}>Arreglo de Predicación Pública</h3>
      <nav className={style.nav}>
        <h4 style={{display: start.name === 'Blanco' ? 'none' : 'flex' }} >{start.name === 'Blanco' ? '' : start.name}</h4>
        <button className={style.iniciarSesion}
          onClick={handleClick}
          style={{ display: start.name === 'Blanco' ? 'block' : start.display2 }}
        >
          Seleccione su nombre
        </button>
        <button className={style.exit}
          onClick={() => dispatch(closeSection())}
          style={{ display: start.name === 'Blanco' ? 'none' : start.display3 }}
        >
          Salir
        </button>
      </nav>
      <HeaderModal handleClick={handleClick} boton={buttonStyle}/>      
    </header>
  );
}

export default Header;
