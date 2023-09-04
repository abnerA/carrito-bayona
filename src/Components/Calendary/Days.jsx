import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Day from "./Day";
import { diaWeek, openModal, cambioMonth } from "../../App/features/IniciarSesion";
import { month } from "./Day";

function Days(props) {
  const [dia29, setDia29] = useState("block");
  const [dia30, setDia30] = useState("block");
  const [dia31, setDia31] = useState("block");

  const start = useSelector((state) => state.inicio);

  const dispatch = useDispatch();

  // Para saber la cantidad total de días que tienes el mes, en el primer Render,
  // y cada vez que cambia las propiedades de la props
  useEffect(() => {
    const days = props.dias;
    if (days === 28) {
      setDia29({
        dia29: "none",
      });
      setDia30({
        dia30: "none",
      });
      setDia31({
        dia31: "none",
      });
    } else if (days === 29) {
      setDia29({
        dia29: "block",
      });
      setDia30({
        dia30: "none",
      });
      setDia31({
        dia31: "none",
      });
    } else if (days === 30) {
      setDia29({
        dia29: "block",
      });
      setDia31({
        dia31: "none",
      });
    } else if (days === 31) {
      setDia29({
        dia29: "block",
      });
      setDia30({
        dia30: "block",
      });
      setDia31({
        dia31: "block",
      });
    }
    dispatch(cambioMonth(props.month));
  }, [dispatch, props.dias, props.month]);


  // Function para abrir la ventana Modal con los datos aquí pasados
  const handleClick = (e) => {
    // Obtengo el día que ha sido clickeado exactamente
    let getDia = parseInt(e.target.title);

    // En este constructor de Class verifico el día de la semana
    // Osea, si es lunes, martes o jueves.
    let obtenerMonth = month(props.month);
    let daySelectDate = new Date(`${obtenerMonth} ${getDia} 2023`); // OJO Poner el año de forma dinamica

    // Me devuelve el día de la semana
    let dayWeek = daySelectDate.getDay();
    dispatch(diaWeek(dayWeek));

    // En este primer if comprobamos si el usuario ya inicio sesión
    if (start.estado) {
      if ((props.mesActual === props.month) && (dayWeek === 2 || dayWeek === 4 || dayWeek === 6) && (getDia >= props.today)) {
        dispatch(openModal([getDia, props.month]));

      } else if (props.numMes + 1 === props.nextMes && props.today >= 25 && (dayWeek === 2 || dayWeek === 4 || dayWeek === 6)) {
        console.log("Ya te puedes anotar :)");
        dispatch(openModal([getDia, props.month]));

      } else if ((props.numMes + 1 === props.nextMes) && (props.today <= 24) && (dayWeek === 2 || dayWeek === 4 || dayWeek === 6)) {
        console.log('Todavía no te puedes anotar en este mes');

      } else if (props.nextMes > props.numMes + 1) {
        console.log('Todavía falta mucho para ese mes');

      } else if (props.numMes - 1 === props.nextMes) {
        console.log("Ya este mes paso");

      } else if ((getDia < props.today) && (dayWeek === 2 || dayWeek === 4 || dayWeek === 6)) {
        console.log("Ya este día paso");
        
      } else {
        console.log("no es día de predicación pública");
      }
    } else {
      console.log("Eliga su nombre, por favor");
    }
    
  };
  return (
      <Day
        firstDay={props.firstDay}
        today={props.today}
        days29={dia29}
        days30={dia30}
        days31={dia31}
        handle={handleClick}
        monthCurrent={props.month}
        mesActual={props.mesActual}
        year={props.year}
        yearCurrent={props.yearCurrent}
        key={props.month}// Ver el comentario más abajo
      />
  );
}

export default Days;

// Al poner una key aquí, no tengo que utilizar componentDidUpdate en componente Day
// Pues cada vez que el valor de la Key cambia (este caso cuando cambio de mes)
// Automaticamente este componente hijo vuelve a rendirizarse con nuevos valores.
// Para explación sobre este tema consultar el siguiente link:
// https://es.legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key
// Esto me ayudo a resolver un gran problema que tenía cada vez que cambiaba de mes, por ej.:
// Si el mes en curso es Mayo, y luego cambiaba a Junio todo iba bien hasta ahí, pero
// Si otro usuario en el mes en curso, en este caso el mes de Mayo, hacia un cambio en dicho
// mes, me renderizaba todo el mes Junio, esto afectaba en gran manera la experiencia de usuario.