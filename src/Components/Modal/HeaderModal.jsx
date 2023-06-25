import style from "./HeaderModal.module.css";
import { useDispatch } from "react-redux";
import { handleClick } from "../../App/features/IniciarSesion";

const name = [
  "Raúl Ortega",
  "Débora Ortega",
  "Sairiel Mateo",
  "Janelys Mateo",
  "Arisleyda Bazán",
  "Miladys Gutiérrez",
  "Julia De La Cruz",
  "Eunice Segura",
  "Bienvenida Peña",
  "Dilenia Bernabé",
  "Isabel García",
  "Yehonala Segura",
  "Diana Concepción"
];

const normal = {
  display: "flex",
  visibility: "hidden",
  opacity: 0,
  position: "fixed",
  justifyContent: "center",
  alignItems: "center",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.6)",
  transition: "all 400ms",
};

const transformed = {
  display: "flex",
  position: "fixed",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  background: "rgba(0, 0, 0, 0.6)",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  transition: "all .6s",
  visibility: "visible",
  opacity: 9,
  overflow: "auto",
};

function HeaderModal(props) {
  const dispatch = useDispatch();

  return (
    <div style={props.boton ? transformed : normal} onClick={props.handleClick}>
      <div className={style.modalContainer}>
      <span className={style.close} aria-label="close Modal">x</span>
        <h4 className={style.titleModal}>Seleccione su nombre</h4>
        {name.map((value) => {
          return (
            <button
              className={style.nameButton}
              onClick={() => dispatch(handleClick(value))}
              value={value}
              key={value}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default HeaderModal;
