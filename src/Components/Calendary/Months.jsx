/* eslint-disable eqeqeq */
/* eslint-disable no-mixed-operators */
import React from "react";
import style from "./Months.module.css";
import Days from "./Days";

// Arrays con los días que pueda tener un mes
const array31 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
const array30 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
const array29 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29']; 
const array28 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'];

class Months extends React.Component {
  constructor(props) {
    super(props);
    this.getTotalDays = this.getTotalDays.bind(this);
    this.isLeap = this.isLeap.bind(this);
  }

//Function para saber la cantidad exacta de días que tiene el mes
   getTotalDays (month) {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;
    } else {
      return this.isLeap() ? 29 : 28;
    }
}

// Function para saber si el año es Bisiesto 
  isLeap () {
    return ((this.props.year % 100 !==0) && (this.props.year % 4 === 0) || (this.props.year % 400 === 0));
}

  render() {
    function totalDias () {
      if (dias === 31) {
        return array31;
      } else if (dias === 30) {
        return array30;
      } else if (dias === 28) {
        return array28;
      } else {
        return array29;
      }
    }
    const dias = this.getTotalDays(this.props.name);
    const result = totalDias(dias);
    return (
      <div className={style.container}>
        <div className={style.week}>
          <div><p>Lun</p></div>
          <div><p>Mar</p></div>
          <div><p>Mie</p></div>
          <div><p>Jue</p></div>
          <div><p>Vie</p></div>
          <div><p>Sab</p></div>
          <div><p>Dom</p></div>
        </div>
        <Days dias={result.length} 
        firstDay={this.props.firstDay} 
        today={this.props.today}
        mesActual={this.props.mesActual}
        month={this.props.month} 
        numMes={this.props.numMes}
        year={this.props.year}
        yearCurrent={this.props.yearCurrent}
        nextMes={this.props.nextMes} />
      </div>
    );
  }
}

export default Months;
