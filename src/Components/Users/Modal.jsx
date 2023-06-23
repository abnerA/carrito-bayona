import style from "./Modal.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modal } from "../../App/features/IniciarSesion";
import { addName, dataB, addparticipation } from "../../firebase/firebase";
import { ref, onValue } from "firebase/database";

const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

function Modal() {
  const start = useSelector((state) => state.inicio);
  const diaSelect = "day" + start.diaSelect.toString();
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [nameSend, setNameSend] = useState();
  

  useEffect(() => {
    const tasksRef = ref(dataB, start.monthCambiante);
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val()[diaSelect].name;
      const note = snapshot.val()[start.name].name;
      setName({
        name: data,
      });
      setNameSend({
        nameSend: note,
      });
    });
  }, [diaSelect, start.monthCambiante, start.name]);

  //Added Mañana
  function addName1() {
    let nombres = name.name;
    let countParticipation = nameSend.nameSend.includes(""); // Esta variable verifica la cantidad de veces que estamos anotadados
      // Devuelve true si todavía no estamos 5 veces, de lo contrario devuelve false
    if (
      nombres[0] === "" &&
      nombres[1] !== start.name &&
      nombres[2] !== start.name && countParticipation
    ) {
      nombres[0] = start.name;
      nombres[6] = "rgb(103, 103, 209)"; // Blue
      addName(diaSelect, nombres, start.monthCambiante + "/"); // Guardar nombre en DB RealTime
      send();

    } else if (
      nombres[1] === "" &&
      nombres[0] !== start.name &&
      nombres[2] !== start.name && countParticipation
    ) {
      nombres[1] = start.name;
      nombres[7] = "rgb(103, 103, 209)"; // Blue
      addName(diaSelect, nombres, start.monthCambiante + "/"); // Guardar nombre en DB RealTime
      send();
    } else if (
      nombres[2] === "" &&
      nombres[0] !== start.name &&
      nombres[1] !== start.name && countParticipation
    ) {
      nombres[2] = start.name;
      nombres[8] = "rgb(103, 103, 209)"; // Blue
      addName(diaSelect, nombres, start.monthCambiante + "/"); // Guardar nombre en DB RealTime
      send();
    } else {
      console.log('Ya es suficiente -mañana-');
    }

    // Guardamos las fechas en que se anotan
    function send() {
      let nombreSave = nameSend.nameSend;
      if(nombreSave[0] === "") {
        nombreSave[0] = `${dias[start.diaModal]} ${start.diaClick} en la mañana`;
        addparticipation(start.name, nombreSave, `${start.monthCambiante}/`)
      } else if (nombreSave[1] === "") {
        nombreSave[1] = `${dias[start.diaModal]} ${start.diaClick} en la mañana`;
        addparticipation(start.name, nombreSave, `${start.monthCambiante}/`)
      } else if (nombreSave[2] === "") {
        nombreSave[2] = `${dias[start.diaModal]} ${start.diaClick} en la mañana`;
        addparticipation(start.name, nombreSave, `${start.monthCambiante}/`)
      } else if (nombreSave[3] === "") {
        nombreSave[3] = `${dias[start.diaModal]} ${start.diaClick} en la mañana`;
        addparticipation(start.name, nombreSave, `${start.monthCambiante}/`)
      } else if (nombreSave[4] === "") {
        nombreSave[4] = `${dias[start.diaModal]} ${start.diaClick} en la mañana`;
        addparticipation(start.name, nombreSave, `${start.monthCambiante}/`)
      } else {
        console.log('Son demasiados turnos para usted -mañana-');
      }
      console.log("Estoy anotado");
    }

  }

  // Delete Mañana
  function deleteName() {
    let nombres = name.name;
    if (nombres[0] === start.name) {
      nombres[0] = "";
      nombres[6] = "rgb(35, 182, 35)"; //Green
      addName(diaSelect, nombres, start.monthCambiante + "/");
      deleteSend();
    } else if (nombres[1] === start.name) {
      nombres[1] = "";
      nombres[7] = "rgb(35, 182, 35)"; //Green
      addName(diaSelect, nombres, start.monthCambiante + "/");
      deleteSend();
    } else if (nombres[2] === start.name) {
      nombres[2] = "";
      nombres[8] = "rgb(35, 182, 35)"; //Green
      addName(diaSelect, nombres, start.monthCambiante + "/");
      deleteSend();
    }

    // Aquí eliminamos las fechas en que se anotan
    function deleteSend() {
      let nombreSave = nameSend.nameSend;
      let i = nombreSave.indexOf(`${dias[start.diaModal]} ${start.diaClick} en la mañana`);
      nombreSave[i] = "";
      addparticipation(start.name, nombreSave, `${start.monthCambiante}/`)
    }

  }

  // Added Tarde
  function addNameTarde() {
    let nombres = name.name;
    let countParticipationT = nameSend.nameSend.includes("");
    if (
      nombres[3] === "" &&
      nombres[4] !== start.name &&
      nombres[5] !== start.name && countParticipationT
    ) {
      nombres[3] = start.name;
      nombres[9] = "rgb(235, 221, 37)"; // Yellow
      addName(diaSelect, nombres, start.monthCambiante + "/");
      savedTarde();
    } else if (
      nombres[4] === "" &&
      nombres[3] !== start.name &&
      nombres[5] !== start.name && countParticipationT
    ) {
      nombres[4] = start.name;
      nombres[10] = "rgb(235, 221, 37)"; // Yellow
      addName(diaSelect, nombres, start.monthCambiante + "/");
      savedTarde();
    } else if (
      nombres[5] === "" &&
      nombres[3] !== start.name &&
      nombres[4] !== start.name && countParticipationT
    ) {
      nombres[5] = start.name;
      nombres[11] = "rgb(235, 221, 37)"; // Yellow
      addName(diaSelect, nombres, start.monthCambiante + "/");
      savedTarde();
    } else {
      console.log('Demasiados turnos -Tarde-');
    }

    // Guardamos las fechas en que se anotan
    function savedTarde() {
      let nombreSave = nameSend.nameSend;
      if(nombreSave[0] === "") {
        nombreSave[0] = `${dias[start.diaModal]} ${start.diaClick} en la tarde`;
        addparticipation(start.name, nombreSave, `${start.monthCambiante}/`)
      } else if (nombreSave[1] === "") {
        nombreSave[1] = `${dias[start.diaModal]} ${start.diaClick} en la tarde`;
        addparticipation(start.name, nombreSave, `${start.monthCambiante}/`)
      } else if (nombreSave[2] === "") {
        nombreSave[2] = `${dias[start.diaModal]} ${start.diaClick} en la tarde`;
        addparticipation(start.name, nombreSave, `${start.monthCambiante}/`)
      } else if (nombreSave[3] === "") {
        nombreSave[3] = `${dias[start.diaModal]} ${start.diaClick} en la tarde`;
        addparticipation(start.name, nombreSave, `${start.monthCambiante}/`)
      } else if (nombreSave[4] === "") {
        nombreSave[4] = `${dias[start.diaModal]} ${start.diaClick} en la tarde`;
        addparticipation(start.name, nombreSave, `${start.monthCambiante}/`)
      } else {
        console.log('Son demasiados turnos para usted -mañana-');
      }
    }

  }

  // Delete Tarde
  function deleteNameTarde() {
    let nombres = name.name;
    if (nombres[3] === start.name) {
      nombres[3] = "";
      nombres[9] = "rgb(35, 182, 35)"; // green
      addName(diaSelect, nombres, start.monthCambiante + "/");
      deleteTarde();
    } else if (nombres[4] === start.name) {
      nombres[4] = "";
      nombres[10] = "rgb(35, 182, 35)"; // green
      addName(diaSelect, nombres, start.monthCambiante + "/");
      deleteTarde();
    } else if (nombres[5] === start.name) {
      nombres[5] = "";
      nombres[11] = "rgb(35, 182, 35)"; // green
      addName(diaSelect, nombres, start.monthCambiante + "/");
      deleteTarde();
    }

    // Aquí eliminamos las fechas en que se anotan
    function deleteTarde() {
      let nombreSave = nameSend.nameSend;
      let i = nombreSave.indexOf(`${dias[start.diaModal]} ${start.diaClick} en la tarde`);
      nombreSave[i] = "";
      addparticipation(start.name, nombreSave, `${start.monthCambiante}/`);
    }
  }

  return (
    <div className={style.container} style={{ display: start.ventanaModal }}>
      <span onClick={() => dispatch(modal())} className={style.close}>
        x
      </span>
      <div className={style.containerModal}>
        <div className={style.mañana}>
          <h5 className={style.title}>Mañana | {`${dias[start.diaModal]} ${start.diaClick} ${start.month}`}</h5>
          <div className={style.containerName}>
            <p className={style.nombres}>{!name ? "..." : name.name[0]}</p>
            <p className={style.nombres}>{!name ? "..." : name.name[1]}</p>
            <p className={style.nombres}>{!name ? "..." : name.name[2]}</p>
          </div>
          <div className={style.btnModal}>
            <button className={style.btnDelete} onClick={deleteName}>Quitarme</button>
            <button className={style.btnAdd} onClick={addName1}>Anotarme</button>
          </div>
        </div>
        <div className={style.tarde}>
          <h5 className={style.title}>Tarde | {`${dias[start.diaModal]} ${start.diaClick} ${start.month}`}</h5>
          <div className={style.containerName}>
            <p className={style.nombres}>{!name ? "..." : name.name[3]}</p>
            <p className={style.nombres}>{!name ? "..." : name.name[4]}</p>
            <p className={style.nombres}>{!name ? "..." : name.name[5]}</p>
          </div>
          <div className={style.btnModal}>
            <button className={style.btnDelete} onClick={deleteNameTarde}>Quitarme</button>
            <button className={style.btnAdd} onClick={addNameTarde}>Anotarme</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
