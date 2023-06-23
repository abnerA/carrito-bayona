import React from "react";
import style from "./Calendary.module.css";
import Months from "./Months";

let monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let currentDate = new Date();
let today = currentDate.getDate(); // Día del mes
let monthNumber = currentDate.getMonth(); // Mes
let currentYear = currentDate.getFullYear(); // Año

let NumeroMes = currentDate.getMonth();
let mes = monthNames[monthNumber];
let year = currentYear.toString();

class Calendary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { month: `${mes}`, año: `${year}`, mes: `${monthNumber}` };
    this.lastMonth = this.lastMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.startDay = this.startDay.bind(this);
  }

  // Function para saber cual es el primer día del mes
  startDay() {
    let start = new Date(this.state.año, this.state.mes, 1);
    return start.getDay();
  }

  // Button para pasar al mes anterior
  lastMonth() {
    if (monthNumber !== 0) {
      monthNumber--;
    } else {
      monthNumber = 11;
      currentYear--;
    }
    this.setState({
      month: monthNames[monthNumber],
      año: currentYear,
      mes: monthNumber,
    });
    this.startDay();
  }

  // Button para pasar al mes siguiente
  nextMonth() {
    if (monthNumber !== 11) {
      monthNumber++;
    } else {
      monthNumber = 0;
      currentYear++;
    }
    this.setState({
      month: monthNames[monthNumber],
      año: currentYear,
      mes: monthNumber,
    });
    this.startDay();
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.navigation}>
          <button onClick={this.lastMonth} className={style.btnLast}>
            <img src="img/left.svg" alt="left" className={style.btnIcon} />
          </button>


          <h4 className={style.titleMonth}>
            {this.state.month} {this.state.año}
          </h4>
          <button onClick={this.nextMonth} className={style.btnNext}>
            <img src="img/right.svg" alt="left" className={style.btnIcon} />
          </button>
        </div>
        <Months
          name={this.state.mes}
          year={this.state.año}
          yearCurrent={year}
          firstDay={this.startDay()}
          today={today}
          mesActual={mes}
          month={this.state.month}
          numMes={NumeroMes}
          nextMes={monthNumber}
        />
      </div>
    );
  }
}

export default Calendary;
