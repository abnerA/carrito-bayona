/* eslint-disable eqeqeq */
import React from "react";
import style from "./Day.module.css";
import { dataB } from "../../firebase/firebase";
import { ref, onValue } from "firebase/database";


export function month(value) {
  if (value === "Enero") {
    return "jan";
  } else if (value === "Febrero") {
    return "feb";
  } else if (value === "Marzo") {
    return "mar";
  } else if (value === "Abril") {
    return "apr";
  } else if (value === "Mayo") {
    return "may";
  } else if (value === "Junio") {
    return "jun";
  } else if (value === "Julio") {
    return "jul";
  } else if (value === "Agosto") {
    return "aug";
  } else if (value === "Septiembre") {
    return "sep";
  } else if (value === "Octubre") {
    return "oct";
  } else if (value === "Noviembre") {
    return "nov";
  } else if (value === "Diciembre") {
    return "dec";
  }
}

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: window.matchMedia("(max-width: 625px)").matches,
      day1: [""],
      day2: [""],
      day3: [""],
      day4: [""],
      day5: [""],
      day6: [""],
      day7: [""],
      day8: [""],
      day9: [""],
      day10: [""],
      day11: [""],
      day12: [""],
      day13: [""],
      day14: [""],
      day15: [""],
      day16: [""],
      day17: [""],
      day18: [""],
      day19: [""],
      day20: [""],
      day21: [""],
      day22: [""],
      day23: [""],
      day24: [""],
      day25: [""],
      day26: [""],
      day27: [""],
      day28: [""],
      day29: [""],
      day30: [""],
      day31: [""],
      estado: {display1: 'none', display2: 'flex', title: '7:00 a 9:00 AM'}
    };

    this.dayAvailable = this.dayAvailable.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({
      estado: {
        display1: this.state.estado.display1 === 'none' ? 'flex' : 'none',
        display2: this.state.estado.display2 === 'flex' ? 'none' : 'flex',
        title: this.state.estado.title === '7:00 a 9:00 AM' ? '9:00 a 11:00 AM' : '7:00 a 9:00 AM'
      }
    })
  }

  componentDidMount() {
    const tasksRef = ref(dataB, this.props.monthCurrent);
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      this.setState({
        day1: data.day1.name, 
        day2: data.day2.name,
        day3: data.day3.name,
        day4: data.day4.name,
        day5: data.day5.name,
        day6: data.day6.name,
        day7: data.day7.name,
        day8: data.day8.name,
        day9: data.day9.name,
        day10: data.day10.name,
        day11: data.day11.name,
        day12: data.day12.name,
        day13: data.day13.name,
        day14: data.day14.name,
        day15: data.day15.name,
        day16: data.day16.name,
        day17: data.day17.name,
        day18: data.day18.name,
        day19: data.day19.name,
        day20: data.day20.name,
        day21: data.day21.name,
        day22: data.day22.name,
        day23: data.day23.name,
        day24: data.day24.name,
        day25: data.day25.name,
        day26: data.day26.name,
        day27: data.day27.name,
        day28: data.day28.name,
        day29: data.day29.name,
        day30: data.day30.name,
        day31: data.day31.name
      });
    });
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(max-width: 625px)").addEventListener("change", handler);
  }

  dayAvailable(value) {
    let mes = month(this.props.monthCurrent);
    let daySelectDate = new Date(`${mes} ${value} ${this.props.year}`);
    let dayWeek = daySelectDate.getDay();
    if (dayWeek === 2 || dayWeek === 4 || dayWeek === 6 ) {
      return style.dayActive;
    } else {
      return style.dayNone;
    }
  }

  SabTarde(value) {
    let mes = month(this.props.monthCurrent);
    let daySelectDate = new Date(`${mes} ${value} ${this.props.year}`);
    let dayWeek = daySelectDate.getDay();
    if (dayWeek === 6 ) {
      return 6;
    } else {
      return false;
    }
  }  
  
  circleAvalaible(value) {
    let mq = this.state.matches;
    let mes = month(this.props.monthCurrent);
    let daySelectDate = new Date(`${mes} ${value} ${this.props.year}`);
    let dayWeek = daySelectDate.getDay();
    if (mq === false) {
      if (dayWeek === 2 || dayWeek === 4 || dayWeek === 6) {
        return 'none';
      } else {
        return 'none';
      }
    } else if (mq === true) {
      if (dayWeek === 2 || dayWeek === 4 || dayWeek === 6) {
        return 'block';
      } else {
        return 'none';
      }
    }
  }

  render() {
    return (
      <div className={style.container}>
        <div title="1" className={style.day} style={{gridColumnStart: this.props.firstDay === 0 ? 7 : this.props.firstDay}}>
          <h2 title="1" className={this.props.monthCurrent === this.props.mesActual &&  this.props.today === 1 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>1</h2>

          <div title="1" onClick={this.props.handle} className={style.mañana}>
            <h5 title="1" className={this.dayAvailable(1)}>{`${this.state.estado.title}`}</h5>

            <div title="1" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="1" style={{backgroundColor: this.state.day1[9], display: this.circleAvalaible(1)}} className={style.circle}></div>
              <div title="1" style={{backgroundColor: this.state.day1[10], display: this.circleAvalaible(1)}} className={style.circle}></div>
              <div title="1" style={{backgroundColor: this.state.day1[11], display: this.circleAvalaible(1)}} className={style.circle}></div>

              <p className={style.name} title="1">{this.state.day1[0]}</p>
              <p className={style.name} title="1">{this.state.day1[1]}</p>
              <p className={style.name} title="1">{this.state.day1[2]}</p>
            </div>

            <div title="1" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="1" style={{backgroundColor: this.state.day1[12], display: this.circleAvalaible(1)}} className={style.circle}></div>
              <div title="1" style={{backgroundColor: this.state.day1[13], display: this.circleAvalaible(1)}} className={style.circle}></div>
              <div title="1" style={{backgroundColor: this.state.day1[14], display: this.circleAvalaible(1)}} className={style.circle}></div>

              <p className={style.name} title="1">{this.state.day1[3]}</p>
              <p className={style.name} title="1">{this.state.day1[4]}</p>
              <p className={style.name} title="1">{this.state.day1[5]}</p>
            </div>
          </div>
          <span className={style.btnUpdate} style={{display: this.dayAvailable(1) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>
          <hr title="1" className={this.dayAvailable(1) + " " + style.sepador} />
          {/* Tarde */}
          <div title="1" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(1) === 6 ? 'none' : 'flex'}}>
            <h5 title="1" className={this.dayAvailable(1)} >5:00 a 7:00 PM</h5>

            <div title="1" style={{backgroundColor: this.state.day1[15], display: this.circleAvalaible(1)}} className={style.circle}></div>
            <div title="1" style={{backgroundColor: this.state.day1[16], display: this.circleAvalaible(1)}} className={style.circle}></div>
            <div title="1" style={{backgroundColor: this.state.day1[17], display: this.circleAvalaible(1)}} className={style.circle}></div>

            <p className={style.name} title="1">{this.state.day1[6]}</p>
            <p className={style.name} title="1">{this.state.day1[7]}</p>
            <p className={style.name} title="1">{this.state.day1[8]}</p>
          </div>
        </div>
        <div title="2" className={style.day}>
          <h2 title="2" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 2 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>2</h2>

          <div title="2" onClick={this.props.handle} className={style.mañana}>
            <h5 title="2" className={this.dayAvailable(2)}>{`${this.state.estado.title}`}</h5>

            <div title="2" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="2" style={{backgroundColor: this.state.day2[9], display: this.circleAvalaible(2)}} className={style.circle}></div>
              <div title="2" style={{backgroundColor: this.state.day2[10], display: this.circleAvalaible(2)}} className={style.circle}></div>
              <div title="2" style={{backgroundColor: this.state.day2[11], display: this.circleAvalaible(2)}} className={style.circle}></div>

              <p className={style.name} title="2">{this.state.day2[0]}</p>
              <p className={style.name} title="2">{this.state.day2[1]}</p>
              <p className={style.name} title="2">{this.state.day2[2]}</p>
            </div>

            <div title="2" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="2" style={{backgroundColor: this.state.day2[12], display: this.circleAvalaible(2)}} className={style.circle}></div>
              <div title="2" style={{backgroundColor: this.state.day2[13], display: this.circleAvalaible(2)}} className={style.circle}></div>
              <div title="2" style={{backgroundColor: this.state.day2[14], display: this.circleAvalaible(2)}} className={style.circle}></div>

              <p className={style.name} title="2">{this.state.day2[3]}</p>
              <p className={style.name} title="2">{this.state.day2[4]}</p>
              <p className={style.name} title="2">{this.state.day2[5]}</p>
            </div>
          </div>
          <span className={style.btnUpdate} style={{display: this.dayAvailable(2) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>
          <hr title="2" className={this.dayAvailable(2) + " " + style.sepador} />

          <div title="2" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(2) === 6 ? 'none' : 'flex'}}>
            <h5 title="2" className={this.dayAvailable(2)}>5:00 a 7:00 PM</h5>

            <div title="2" style={{backgroundColor: this.state.day2[15], display: this.circleAvalaible(2)}} className={style.circle}></div>
            <div title="2" style={{backgroundColor: this.state.day2[16], display: this.circleAvalaible(2)}} className={style.circle}></div>
            <div title="2" style={{backgroundColor: this.state.day2[17], display: this.circleAvalaible(2)}} className={style.circle}></div>

            <p className={style.name} title="2">{this.state.day2[6]}</p>
            <p className={style.name} title="2">{this.state.day2[7]}</p>
            <p className={style.name} title="2">{this.state.day2[8]}</p>
          </div>
        </div>
        <div title="3" className={style.day}>
          <h2 title="3" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 3 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>3</h2>

          <div title="3" onClick={this.props.handle} className={style.mañana}>
            <h5 title="3" className={this.dayAvailable(3)}>{`${this.state.estado.title}`}</h5>

            <div title="3" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="3" style={{backgroundColor: this.state.day3[9], display: this.circleAvalaible(3)}} className={style.circle}></div>
              <div title="3" style={{backgroundColor: this.state.day3[10], display: this.circleAvalaible(3)}} className={style.circle}></div>
              <div title="3" style={{backgroundColor: this.state.day3[11], display: this.circleAvalaible(3)}} className={style.circle}></div>

              <p className={style.name} title="3">{this.state.day3[0]}</p>
              <p className={style.name} title="3">{this.state.day3[1]}</p>
              <p className={style.name} title="3">{this.state.day3[2]}</p>
            </div>

            <div title="3" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="3" style={{backgroundColor: this.state.day3[12], display: this.circleAvalaible(3)}} className={style.circle}></div>
              <div title="3" style={{backgroundColor: this.state.day3[13], display: this.circleAvalaible(3)}} className={style.circle}></div>
              <div title="3" style={{backgroundColor: this.state.day3[14], display: this.circleAvalaible(3)}} className={style.circle}></div>

              <p className={style.name} title="3">{this.state.day3[3]}</p>
              <p className={style.name} title="3">{this.state.day3[4]}</p>
              <p className={style.name} title="3">{this.state.day3[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(3) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="3" className={this.dayAvailable(3) + " " + style.sepador} />

          <div title="3" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(3) === 6 ? 'none' : 'flex'}}>
            <h5 title="3" className={this.dayAvailable(3)}>5:00 a 7:00 PM</h5>

            <div title="3" style={{backgroundColor: this.state.day3[15], display: this.circleAvalaible(3)}} className={style.circle}></div>
            <div title="3" style={{backgroundColor: this.state.day3[16], display: this.circleAvalaible(3)}} className={style.circle}></div>
            <div title="3" style={{backgroundColor: this.state.day3[17], display: this.circleAvalaible(3)}} className={style.circle}></div>

            <p className={style.name} title="3">{this.state.day3[6]}</p>
            <p className={style.name} title="3">{this.state.day3[7]}</p>
            <p className={style.name} title="3">{this.state.day3[8]}</p>
          </div>

        </div>
        <div title="4" className={style.day}>
          <h2 title="4" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 4 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>4</h2>

          <div title="4" onClick={this.props.handle} className={style.mañana}>
            <h5 title="4" className={this.dayAvailable(4)}>{`${this.state.estado.title}`}</h5>

            <div title="4" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="4" style={{backgroundColor: this.state.day4[9], display: this.circleAvalaible(4)}} className={style.circle}></div>
              <div title="4" style={{backgroundColor: this.state.day4[10], display: this.circleAvalaible(4)}} className={style.circle}></div>
              <div title="4" style={{backgroundColor: this.state.day4[11], display: this.circleAvalaible(4)}} className={style.circle}></div>

              <p className={style.name} title="4">{this.state.day4[0]}</p>
              <p className={style.name} title="4">{this.state.day4[1]}</p>
              <p className={style.name} title="4">{this.state.day4[2]}</p>
            </div>

            <div title="4" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="4" style={{backgroundColor: this.state.day4[12], display: this.circleAvalaible(4)}} className={style.circle}></div>
              <div title="4" style={{backgroundColor: this.state.day4[13], display: this.circleAvalaible(4)}} className={style.circle}></div>
              <div title="4" style={{backgroundColor: this.state.day4[14], display: this.circleAvalaible(4)}} className={style.circle}></div>

              <p className={style.name} title="4">{this.state.day4[3]}</p>
              <p className={style.name} title="4">{this.state.day4[4]}</p>
              <p className={style.name} title="4">{this.state.day4[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(4) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="4" className={this.dayAvailable(4) + " " + style.sepador} />

          <div title="4" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(4) === 6 ? 'none' : 'flex'}}>
            <h5 title="4" className={this.dayAvailable(4)}>5:00 a 7:00 PM</h5>

            <div title="4" style={{backgroundColor: this.state.day4[15], display: this.circleAvalaible(4)}} className={style.circle}></div>
            <div title="4" style={{backgroundColor: this.state.day4[16], display: this.circleAvalaible(4)}} className={style.circle}></div>
            <div title="4" style={{backgroundColor: this.state.day4[17], display: this.circleAvalaible(4)}} className={style.circle}></div>

            <p className={style.name} title="4">{this.state.day4[6]}</p>
            <p className={style.name} title="4">{this.state.day4[7]}</p>
            <p className={style.name} title="4">{this.state.day4[8]}</p>
          </div>

        </div>
        <div title="5" className={style.day}>
          <h2 title="5" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 5 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>5</h2>

          <div title="5" onClick={this.props.handle} className={style.mañana}>
            <h5 title="5" className={this.dayAvailable(5)}>{`${this.state.estado.title}`}</h5>

            <div title="5" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="5" style={{backgroundColor: this.state.day5[9], display: this.circleAvalaible(5)}} className={style.circle}></div>
              <div title="5" style={{backgroundColor: this.state.day5[10], display: this.circleAvalaible(5)}} className={style.circle}></div>
              <div title="5" style={{backgroundColor: this.state.day5[11], display: this.circleAvalaible(5)}} className={style.circle}></div>

              <p className={style.name} title="5">{this.state.day5[0]}</p>
              <p className={style.name} title="5">{this.state.day5[1]}</p>
              <p className={style.name} title="5">{this.state.day5[2]}</p>
            </div>

            <div title="5" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="5" style={{backgroundColor: this.state.day5[12], display: this.circleAvalaible(5)}} className={style.circle}></div>
              <div title="5" style={{backgroundColor: this.state.day5[13], display: this.circleAvalaible(5)}} className={style.circle}></div>
              <div title="5" style={{backgroundColor: this.state.day5[14], display: this.circleAvalaible(5)}} className={style.circle}></div>

              <p className={style.name} title="5">{this.state.day5[3]}</p>
              <p className={style.name} title="5">{this.state.day5[4]}</p>
              <p className={style.name} title="5">{this.state.day5[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(5) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="5" className={this.dayAvailable(5) + " " + style.sepador} />

          <div title="5" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(5) === 6 ? 'none' : 'flex'}}>
            <h5 title="5" className={this.dayAvailable(5)}>5:00 a 7:00 PM</h5>

            <div title="5" style={{backgroundColor: this.state.day5[15], display: this.circleAvalaible(5)}} className={style.circle}></div>
            <div title="5" style={{backgroundColor: this.state.day5[16], display: this.circleAvalaible(5)}} className={style.circle}></div>
            <div title="5" style={{backgroundColor: this.state.day5[17], display: this.circleAvalaible(5)}} className={style.circle}></div>

            <p className={style.name} title="5">{this.state.day5[6]}</p>
            <p className={style.name} title="5">{this.state.day5[7]}</p>
            <p className={style.name} title="5">{this.state.day5[8]}</p>
          </div>

        </div>
        <div title="6" className={style.day}>
          <h2 title="6" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 6 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>6</h2>

          <div title="6" onClick={this.props.handle} className={style.mañana}>
            <h5 title="6" className={this.dayAvailable(6)} >{`${this.state.estado.title}`}</h5>

            <div title="6" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="6" style={{backgroundColor: this.state.day6[9], display: this.circleAvalaible(6)}} className={style.circle}></div>
              <div title="6" style={{backgroundColor: this.state.day6[10], display: this.circleAvalaible(6)}} className={style.circle}></div>
              <div title="6" style={{backgroundColor: this.state.day6[11], display: this.circleAvalaible(6)}} className={style.circle}></div>

              <p className={style.name} title="6">{this.state.day6[0]}</p>
              <p className={style.name} title="6">{this.state.day6[1]}</p>
              <p className={style.name} title="6">{this.state.day6[2]}</p>
            </div>

            <div title="6" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="6" style={{backgroundColor: this.state.day6[12], display: this.circleAvalaible(6)}} className={style.circle}></div>
              <div title="6" style={{backgroundColor: this.state.day6[13], display: this.circleAvalaible(6)}} className={style.circle}></div>
              <div title="6" style={{backgroundColor: this.state.day6[14], display: this.circleAvalaible(6)}} className={style.circle}></div>

              <p className={style.name} title="6">{this.state.day6[3]}</p>
              <p className={style.name} title="6">{this.state.day6[4]}</p>
              <p className={style.name} title="6">{this.state.day6[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(6) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="6" className={this.dayAvailable(6) + " " + style.sepador} />

          <div title="6" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(6) === 6 ? 'none' : 'flex'}}>
            <h5 title="6" className={this.dayAvailable(6)}>5:00 a 7:00 PM</h5>

            <div title="6" style={{backgroundColor: this.state.day6[15], display: this.circleAvalaible(6)}} className={style.circle}></div>
            <div title="6" style={{backgroundColor: this.state.day6[16], display: this.circleAvalaible(6)}} className={style.circle}></div>
            <div title="6" style={{backgroundColor: this.state.day6[17], display: this.circleAvalaible(6)}} className={style.circle}></div>

            <p className={style.name} title="6">{this.state.day6[6]}</p>
            <p className={style.name} title="6">{this.state.day6[7]}</p>
            <p className={style.name} title="6">{this.state.day6[8]}</p>
          </div>

        </div>
        <div title="7" className={style.day}>
          <h2 title="7" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 7 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>7</h2>

          <div title="7" onClick={this.props.handle} className={style.mañana}>
            <h5 title="7" className={this.dayAvailable(7)}>{`${this.state.estado.title}`}</h5>

            <div title="7" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="7" style={{backgroundColor: this.state.day7[9], display: this.circleAvalaible(7)}} className={style.circle}></div>
              <div title="7" style={{backgroundColor: this.state.day7[10], display: this.circleAvalaible(7)}} className={style.circle}></div>
              <div title="7" style={{backgroundColor: this.state.day7[11], display: this.circleAvalaible(7)}} className={style.circle}></div>

              <p className={style.name} title="7">{this.state.day7[0]}</p>
              <p className={style.name} title="7">{this.state.day7[1]}</p>
              <p className={style.name} title="7">{this.state.day7[2]}</p>
            </div>

            <div title="7" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="7" style={{backgroundColor: this.state.day7[12], display: this.circleAvalaible(7)}} className={style.circle}></div>
              <div title="7" style={{backgroundColor: this.state.day7[13], display: this.circleAvalaible(7)}} className={style.circle}></div>
              <div title="7" style={{backgroundColor: this.state.day7[14], display: this.circleAvalaible(7)}} className={style.circle}></div>

              <p className={style.name} title="7">{this.state.day7[3]}</p>
              <p className={style.name} title="7">{this.state.day7[4]}</p>
              <p className={style.name} title="7">{this.state.day7[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(7) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="7" className={this.dayAvailable(7) + " " + style.sepador} />

          <div title="7" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(7) === 6 ? 'none' : 'flex'}}>
            <h5 title="7" className={this.dayAvailable(7)}>5:00 a 7:00 PM</h5>

            <div title="7" style={{backgroundColor: this.state.day7[15], display: this.circleAvalaible(7)}} className={style.circle}></div>
            <div title="7" style={{backgroundColor: this.state.day7[16], display: this.circleAvalaible(7)}} className={style.circle}></div>
            <div title="7" style={{backgroundColor: this.state.day7[17], display: this.circleAvalaible(7)}} className={style.circle}></div>

            <p className={style.name} title="7">{this.state.day7[6]}</p>
            <p className={style.name} title="7">{this.state.day7[7]}</p>
            <p className={style.name} title="7">{this.state.day7[8]}</p>
          </div>

        </div>
        <div title="8" className={style.day}>
          <h2 title="8" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 8 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>8</h2>

          <div title="8" onClick={this.props.handle} className={style.mañana}>
            <h5 title="8" className={this.dayAvailable(8)}>{`${this.state.estado.title}`}</h5>

            <div title="8" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="8" style={{backgroundColor: this.state.day8[9], display: this.circleAvalaible(8)}} className={style.circle}></div>
              <div title="8" style={{backgroundColor: this.state.day8[10], display: this.circleAvalaible(8)}} className={style.circle}></div>
              <div title="8" style={{backgroundColor: this.state.day8[11], display: this.circleAvalaible(8)}} className={style.circle}></div>

              <p className={style.name} title="8">{this.state.day8[0]}</p>
              <p className={style.name} title="8">{this.state.day8[1]}</p>
              <p className={style.name} title="8">{this.state.day8[2]}</p>
            </div>

            <div title="8" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="8" style={{backgroundColor: this.state.day8[12], display: this.circleAvalaible(8)}} className={style.circle}></div>
              <div title="8" style={{backgroundColor: this.state.day8[13], display: this.circleAvalaible(8)}} className={style.circle}></div>
              <div title="8" style={{backgroundColor: this.state.day8[14], display: this.circleAvalaible(8)}} className={style.circle}></div>

              <p className={style.name} title="8">{this.state.day8[3]}</p>
              <p className={style.name} title="8">{this.state.day8[4]}</p>
              <p className={style.name} title="8">{this.state.day8[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(8) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="8" className={this.dayAvailable(8) + " " + style.sepador} />

          <div title="8" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(8) === 6 ? 'none' : 'flex'}}>
            <h5 title="8" className={this.dayAvailable(8)}>5:00 a 7:00 PM</h5>

            <div title="8" style={{backgroundColor: this.state.day8[15], display: this.circleAvalaible(8)}} className={style.circle}></div>
            <div title="8" style={{backgroundColor: this.state.day8[16], display: this.circleAvalaible(8)}} className={style.circle}></div>
            <div title="8" style={{backgroundColor: this.state.day8[17], display: this.circleAvalaible(8)}} className={style.circle}></div>

            <p className={style.name} title="8">{this.state.day8[6]}</p>
            <p className={style.name} title="8">{this.state.day8[7]}</p>
            <p className={style.name} title="8">{this.state.day8[8]}</p>
          </div>

        </div>
        <div title="9" className={style.day}>
          <h2 title="9" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 9 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>9</h2>

          <div title="9" onClick={this.props.handle} className={style.mañana}>
            <h5 title="9" className={this.dayAvailable(9)}>{`${this.state.estado.title}`}</h5>

            <div title="9" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="9" style={{backgroundColor: this.state.day9[9], display: this.circleAvalaible(9)}} className={style.circle}></div>
              <div title="9" style={{backgroundColor: this.state.day9[10], display: this.circleAvalaible(9)}} className={style.circle}></div>
              <div title="9" style={{backgroundColor: this.state.day9[11], display: this.circleAvalaible(9)}} className={style.circle}></div>

              <p className={style.name} title="9">{this.state.day9[0]}</p>
              <p className={style.name} title="9">{this.state.day9[1]}</p>
              <p className={style.name} title="9">{this.state.day9[2]}</p>
            </div>

            <div title="9" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="9" style={{backgroundColor: this.state.day9[12], display: this.circleAvalaible(9)}} className={style.circle}></div>
              <div title="9" style={{backgroundColor: this.state.day9[13], display: this.circleAvalaible(9)}} className={style.circle}></div>
              <div title="9" style={{backgroundColor: this.state.day9[14], display: this.circleAvalaible(9)}} className={style.circle}></div>

              <p className={style.name} title="9">{this.state.day9[3]}</p>
              <p className={style.name} title="9">{this.state.day9[4]}</p>
              <p className={style.name} title="9">{this.state.day9[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(9) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="9" className={this.dayAvailable(9) + " " + style.sepador} />

          <div title="9" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(9) === 6 ? 'none' : 'flex'}}>
            <h5 title="9" className={this.dayAvailable(9)}>5:00 a 7:00 PM</h5>

            <div title="9" style={{backgroundColor: this.state.day9[15], display: this.circleAvalaible(9)}} className={style.circle}></div>
            <div title="9" style={{backgroundColor: this.state.day9[16], display: this.circleAvalaible(9)}} className={style.circle}></div>
            <div title="9" style={{backgroundColor: this.state.day9[17], display: this.circleAvalaible(9)}} className={style.circle}></div>

            <p className={style.name} title="9">{this.state.day9[6]}</p>
            <p className={style.name} title="9">{this.state.day9[7]}</p>
            <p className={style.name} title="9">{this.state.day9[8]}</p>
          </div>

        </div>
        <div title="10" className={style.day}>
          <h2 title="10" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 10 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>10</h2>

          <div title="10" onClick={this.props.handle} className={style.mañana}>
            <h5 title="10" className={this.dayAvailable(10)}>{`${this.state.estado.title}`}</h5>

            <div title="10" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="10" style={{backgroundColor: this.state.day10[9], display: this.circleAvalaible(10)}} className={style.circle}></div>
              <div title="10" style={{backgroundColor: this.state.day10[10], display: this.circleAvalaible(10)}} className={style.circle}></div>
              <div title="10" style={{backgroundColor: this.state.day10[11], display: this.circleAvalaible(10)}} className={style.circle}></div>

              <p className={style.name} title="10">{this.state.day10[0]}</p>
              <p className={style.name} title="10">{this.state.day10[1]}</p>
              <p className={style.name} title="10">{this.state.day10[2]}</p>
            </div>

            <div title="10" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="10" style={{backgroundColor: this.state.day10[12], display: this.circleAvalaible(10)}} className={style.circle}></div>
              <div title="10" style={{backgroundColor: this.state.day10[13], display: this.circleAvalaible(10)}} className={style.circle}></div>
              <div title="10" style={{backgroundColor: this.state.day10[14], display: this.circleAvalaible(10)}} className={style.circle}></div>

              <p className={style.name} title="10">{this.state.day10[3]}</p>
              <p className={style.name} title="10">{this.state.day10[4]}</p>
              <p className={style.name} title="10">{this.state.day10[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(10) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="10" className={this.dayAvailable(10) + " " + style.sepador} />

          <div title="10" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(10) === 6 ? 'none' : 'flex'}}>
            <h5 title="10" className={this.dayAvailable(10)}>5:00 a 7:00 PM</h5>

            <div title="10" style={{backgroundColor: this.state.day10[15], display: this.circleAvalaible(10)}} className={style.circle}></div>
            <div title="10" style={{backgroundColor: this.state.day10[16], display: this.circleAvalaible(10)}} className={style.circle}></div>
            <div title="10" style={{backgroundColor: this.state.day10[17], display: this.circleAvalaible(10)}} className={style.circle}></div>

            <p className={style.name} title="10">{this.state.day10[6]}</p>
            <p className={style.name} title="10">{this.state.day10[7]}</p>
            <p className={style.name} title="10">{this.state.day10[8]}</p>
          </div>

        </div>
        <div title="11" className={style.day}>
          <h2 title="11" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 11 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>11</h2>

          <div title="11" onClick={this.props.handle} className={style.mañana}>
            <h5 title="11" className={this.dayAvailable(11)}>{`${this.state.estado.title}`}</h5>

            <div title="11" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="11" style={{backgroundColor: this.state.day11[9], display: this.circleAvalaible(11)}} className={style.circle}></div>
              <div title="11" style={{backgroundColor: this.state.day11[10], display: this.circleAvalaible(11)}} className={style.circle}></div>
              <div title="11" style={{backgroundColor: this.state.day11[11], display: this.circleAvalaible(11)}} className={style.circle}></div>

              <p className={style.name} title="11">{this.state.day11[0]}</p>
              <p className={style.name} title="11">{this.state.day11[1]}</p>
              <p className={style.name} title="11">{this.state.day11[2]}</p>
            </div>

            <div title="11" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="11" style={{backgroundColor: this.state.day11[12], display: this.circleAvalaible(11)}} className={style.circle}></div>
              <div title="11" style={{backgroundColor: this.state.day11[13], display: this.circleAvalaible(11)}} className={style.circle}></div>
              <div title="11" style={{backgroundColor: this.state.day11[14], display: this.circleAvalaible(11)}} className={style.circle}></div>

              <p className={style.name} title="11">{this.state.day11[3]}</p>
              <p className={style.name} title="11">{this.state.day11[4]}</p>
              <p className={style.name} title="11">{this.state.day11[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(11) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="11" className={this.dayAvailable(11) + " " + style.sepador} />

          <div title="11" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(11) === 6 ? 'none' : 'flex'}}>
            <h5 title="11" className={this.dayAvailable(11)}>5:00 a 7:00 PM</h5>

            <div title="11" style={{backgroundColor: this.state.day11[15], display: this.circleAvalaible(11)}} className={style.circle}></div>
            <div title="11" style={{backgroundColor: this.state.day11[16], display: this.circleAvalaible(11)}} className={style.circle}></div>
            <div title="11" style={{backgroundColor: this.state.day11[17], display: this.circleAvalaible(11)}} className={style.circle}></div>

            <p className={style.name} title="11">{this.state.day11[6]}</p>
            <p className={style.name} title="11">{this.state.day11[7]}</p>
            <p className={style.name} title="11">{this.state.day11[8]}</p>
          </div>

        </div>
        <div title="12" className={style.day}>
          <h2 title="12" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 12 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>12</h2>

          <div title="12" onClick={this.props.handle} className={style.mañana}>
            <h5 title="12" className={this.dayAvailable(12)}>{`${this.state.estado.title}`}</h5>

            <div title="12" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="12" style={{backgroundColor: this.state.day12[9], display: this.circleAvalaible(12)}} className={style.circle}></div>
              <div title="12" style={{backgroundColor: this.state.day12[10], display: this.circleAvalaible(12)}} className={style.circle}></div>
              <div title="12" style={{backgroundColor: this.state.day12[11], display: this.circleAvalaible(12)}} className={style.circle}></div>

              <p className={style.name} title="12">{this.state.day12[0]}</p>
              <p className={style.name} title="12">{this.state.day12[1]}</p>
              <p className={style.name} title="12">{this.state.day12[2]}</p>
            </div>

            <div title="12" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="12" style={{backgroundColor: this.state.day12[12], display: this.circleAvalaible(12)}} className={style.circle}></div>
              <div title="12" style={{backgroundColor: this.state.day12[13], display: this.circleAvalaible(12)}} className={style.circle}></div>
              <div title="12" style={{backgroundColor: this.state.day12[14], display: this.circleAvalaible(12)}} className={style.circle}></div>

              <p className={style.name} title="12">{this.state.day12[3]}</p>
              <p className={style.name} title="12">{this.state.day12[4]}</p>
              <p className={style.name} title="12">{this.state.day12[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(12) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="12" className={this.dayAvailable(12) + " " + style.sepador} />

          <div title="12" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(12) === 6 ? 'none' : 'flex'}}>
            <h5 title="12" className={this.dayAvailable(12)}>5:00 a 7:00 PM</h5>

            <div title="12" style={{backgroundColor: this.state.day12[15], display: this.circleAvalaible(12)}} className={style.circle}></div>
            <div title="12" style={{backgroundColor: this.state.day12[16], display: this.circleAvalaible(12)}} className={style.circle}></div>
            <div title="12" style={{backgroundColor: this.state.day12[17], display: this.circleAvalaible(12)}} className={style.circle}></div>

            <p className={style.name} title="12">{this.state.day12[6]}</p>
            <p className={style.name} title="12">{this.state.day12[7]}</p>
            <p className={style.name} title="12">{this.state.day12[8]}</p>
          </div>

        </div>
        <div title="13" className={style.day}>
          <h2 title="13" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 13 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>13</h2>

          <div title="13" onClick={this.props.handle} className={style.mañana}>
            <h5 title="13" className={this.dayAvailable(13)}>{`${this.state.estado.title}`}</h5>

            <div title="13" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="13" style={{backgroundColor: this.state.day13[9], display: this.circleAvalaible(13)}} className={style.circle}></div>
              <div title="13" style={{backgroundColor: this.state.day13[10], display: this.circleAvalaible(13)}} className={style.circle}></div>
              <div title="13" style={{backgroundColor: this.state.day13[11], display: this.circleAvalaible(13)}} className={style.circle}></div>

              <p className={style.name} title="13">{this.state.day13[0]}</p>
              <p className={style.name} title="13">{this.state.day13[1]}</p>
              <p className={style.name} title="13">{this.state.day13[2]}</p>
            </div>

            <div title="13" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="13" style={{backgroundColor: this.state.day13[12], display: this.circleAvalaible(13)}} className={style.circle}></div>
              <div title="13" style={{backgroundColor: this.state.day13[13], display: this.circleAvalaible(13)}} className={style.circle}></div>
              <div title="13" style={{backgroundColor: this.state.day13[14], display: this.circleAvalaible(13)}} className={style.circle}></div>

              <p className={style.name} title="13">{this.state.day13[3]}</p>
              <p className={style.name} title="13">{this.state.day13[4]}</p>
              <p className={style.name} title="13">{this.state.day13[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(13) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="13" className={this.dayAvailable(13)  + " " + style.sepador} />

          <div title="13" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(13) === 6 ? 'none' : 'flex'}}>
            <h5 title="13" className={this.dayAvailable(13)}>5:00 a 7:00 PM</h5>

            <div title="13" style={{backgroundColor: this.state.day13[15], display: this.circleAvalaible(13)}} className={style.circle}></div>
            <div title="13" style={{backgroundColor: this.state.day13[16], display: this.circleAvalaible(13)}} className={style.circle}></div>
            <div title="13" style={{backgroundColor: this.state.day13[17], display: this.circleAvalaible(13)}} className={style.circle}></div>

            <p className={style.name} title="13">{this.state.day13[6]}</p>
            <p className={style.name} title="13">{this.state.day13[7]}</p>
            <p className={style.name} title="13">{this.state.day13[8]}</p>
          </div>

        </div>
        <div title="14" className={style.day}>
          <h2 title="14" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 14 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>14</h2>

          <div title="14" onClick={this.props.handle} className={style.mañana}>
            <h5 title="14" className={this.dayAvailable(14)}>{`${this.state.estado.title}`}</h5>

            <div title="14" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="14" style={{backgroundColor: this.state.day14[9], display: this.circleAvalaible(14)}} className={style.circle}></div>
              <div title="14" style={{backgroundColor: this.state.day14[10], display: this.circleAvalaible(14)}} className={style.circle}></div>
              <div title="14" style={{backgroundColor: this.state.day14[11], display: this.circleAvalaible(14)}} className={style.circle}></div>

              <p className={style.name} title="14">{this.state.day14[0]}</p>
              <p className={style.name} title="14">{this.state.day14[1]}</p>
              <p className={style.name} title="14">{this.state.day14[2]}</p>
            </div>

            <div title="14" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="14" style={{backgroundColor: this.state.day14[12], display: this.circleAvalaible(14)}} className={style.circle}></div>
              <div title="14" style={{backgroundColor: this.state.day14[13], display: this.circleAvalaible(14)}} className={style.circle}></div>
              <div title="14" style={{backgroundColor: this.state.day14[14], display: this.circleAvalaible(14)}} className={style.circle}></div>

              <p className={style.name} title="14">{this.state.day14[3]}</p>
              <p className={style.name} title="14">{this.state.day14[4]}</p>
              <p className={style.name} title="14">{this.state.day14[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(14) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="14" className={this.dayAvailable(14) + " " + style.sepador} />

          <div title="14" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(14) === 6 ? 'none' : 'flex'}}>
            <h5 title="14" className={this.dayAvailable(14)}>5:00 a 7:00 PM</h5>

            <p title="14" style={{backgroundColor: this.state.day14[15], display: this.circleAvalaible(14)}} className={style.circle}></p>
            <p title="14" style={{backgroundColor: this.state.day14[16], display: this.circleAvalaible(14)}} className={style.circle}></p>
            <p title="14" style={{backgroundColor: this.state.day14[17], display: this.circleAvalaible(14)}} className={style.circle}></p>

            <p className={style.name} title="14">{this.state.day14[6]}</p>
            <p className={style.name} title="14">{this.state.day14[7]}</p>
            <p className={style.name} title="14">{this.state.day14[8]}</p>
          </div>

        </div>
        <div title="15" className={style.day}>
          <h2 title="15" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 15 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>15</h2>

          <div title="15" onClick={this.props.handle} className={style.mañana}>
            <h5 title="15" className={this.dayAvailable(15)}>{`${this.state.estado.title}`}</h5>

            <div title="15" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="15" style={{backgroundColor: this.state.day15[9], display: this.circleAvalaible(15)}} className={style.circle}></div>
              <div title="15" style={{backgroundColor: this.state.day15[10], display: this.circleAvalaible(15)}} className={style.circle}></div>
              <div title="15" style={{backgroundColor: this.state.day15[11], display: this.circleAvalaible(15)}} className={style.circle}></div>

              <p className={style.name} title="15">{this.state.day15[0]}</p>
              <p className={style.name} title="15">{this.state.day15[1]}</p>
              <p className={style.name} title="15">{this.state.day15[2]}</p>
            </div>

            <div title="15" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="15" style={{backgroundColor: this.state.day15[12], display: this.circleAvalaible(15)}} className={style.circle}></div>
              <div title="15" style={{backgroundColor: this.state.day15[13], display: this.circleAvalaible(15)}} className={style.circle}></div>
              <div title="15" style={{backgroundColor: this.state.day15[14], display: this.circleAvalaible(15)}} className={style.circle}></div>

              <p className={style.name} title="15">{this.state.day15[3]}</p>
              <p className={style.name} title="15">{this.state.day15[4]}</p>
              <p className={style.name} title="15">{this.state.day15[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(15) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="15" className={this.dayAvailable(15) + " " + style.sepador} />

          <div title="15" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(15) === 6 ? 'none' : 'flex'}}>
            <h5 title="15" className={this.dayAvailable(15)}>5:00 a 7:00 PM</h5>

            <div title="15" style={{backgroundColor: this.state.day15[15], display: this.circleAvalaible(15)}} className={style.circle}></div>
            <div title="15" style={{backgroundColor: this.state.day15[16], display: this.circleAvalaible(15)}} className={style.circle}></div>
            <div title="15" style={{backgroundColor: this.state.day15[17], display: this.circleAvalaible(15)}} className={style.circle}></div>

            <p className={style.name} title="15">{this.state.day15[6]}</p>
            <p className={style.name} title="15">{this.state.day15[7]}</p>
            <p className={style.name} title="15">{this.state.day15[8]}</p>
          </div>

        </div>
        <div title="16" className={style.day}>
          <h2 title="16" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 16 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>16</h2>

          <div title="16" onClick={this.props.handle} className={style.mañana}>
            <h5 title="16" className={this.dayAvailable(16)}>{`${this.state.estado.title}`}</h5>

            <div title="16" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="16" style={{backgroundColor: this.state.day16[9], display: this.circleAvalaible(16)}} className={style.circle}></div>
              <div title="16" style={{backgroundColor: this.state.day16[10], display: this.circleAvalaible(16)}} className={style.circle}></div>
              <div title="16" style={{backgroundColor: this.state.day16[11], display: this.circleAvalaible(16)}} className={style.circle}></div>

              <p className={style.name} title="16">{this.state.day16[0]}</p>
              <p className={style.name} title="16">{this.state.day16[1]}</p>
              <p className={style.name} title="16">{this.state.day16[2]}</p>
            </div>

            <div title="16" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="16" style={{backgroundColor: this.state.day16[12], display: this.circleAvalaible(16)}} className={style.circle}></div>
              <div title="16" style={{backgroundColor: this.state.day16[13], display: this.circleAvalaible(16)}} className={style.circle}></div>
              <div title="16" style={{backgroundColor: this.state.day16[14], display: this.circleAvalaible(16)}} className={style.circle}></div>

              <p className={style.name} title="16">{this.state.day16[3]}</p>
              <p className={style.name} title="16">{this.state.day16[4]}</p>
              <p className={style.name} title="16">{this.state.day16[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(16) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="16" className={this.dayAvailable(16) + " " + style.sepador} />

          <div title="16" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(16) === 6 ? 'none' : 'flex'}}>
            <h5 title="16" className={this.dayAvailable(16)}>5:00 a 7:00 PM</h5>

            <div title="16" style={{backgroundColor: this.state.day16[15], display: this.circleAvalaible(16)}} className={style.circle}></div>
            <div title="16" style={{backgroundColor: this.state.day16[16], display: this.circleAvalaible(16)}} className={style.circle}></div>
            <div title="16" style={{backgroundColor: this.state.day16[17], display: this.circleAvalaible(16)}} className={style.circle}></div>

            <p className={style.name} title="16">{this.state.day16[6]}</p>
            <p className={style.name} title="16">{this.state.day16[7]}</p>
            <p className={style.name} title="16">{this.state.day16[8]}</p>
          </div>

        </div>
        <div title="17" className={style.day}>
          <h2 title="17" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 17 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>17</h2>

          <div title="17" onClick={this.props.handle} className={style.mañana}>
            <h5 title="17" className={this.dayAvailable(17)}>{`${this.state.estado.title}`}</h5>

            <div title="17" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="17" style={{backgroundColor: this.state.day17[9], display: this.circleAvalaible(17)}} className={style.circle}></div>
              <div title="17" style={{backgroundColor: this.state.day17[10], display: this.circleAvalaible(17)}} className={style.circle}></div>
              <div title="17" style={{backgroundColor: this.state.day17[11], display: this.circleAvalaible(17)}} className={style.circle}></div>

              <p className={style.name} title="17">{this.state.day17[0]}</p>
              <p className={style.name} title="17">{this.state.day17[1]}</p>
              <p className={style.name} title="17">{this.state.day17[2]}</p>
            </div>

            <div title="17" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="17" style={{backgroundColor: this.state.day17[12], display: this.circleAvalaible(17)}} className={style.circle}></div>
              <div title="17" style={{backgroundColor: this.state.day17[13], display: this.circleAvalaible(17)}} className={style.circle}></div>
              <div title="17" style={{backgroundColor: this.state.day17[14], display: this.circleAvalaible(17)}} className={style.circle}></div>

              <p className={style.name} title="17">{this.state.day17[3]}</p>
              <p className={style.name} title="17">{this.state.day17[4]}</p>
              <p className={style.name} title="17">{this.state.day17[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(17) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="17" className={this.dayAvailable(17) + " " + style.sepador} />

          <div title="17" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(17) === 6 ? 'none' : 'flex'}}>
            <h5 title="17" className={this.dayAvailable(17)}>5:00 a 7:00 PM</h5>

            <div title="17" style={{backgroundColor: this.state.day17[15], display: this.circleAvalaible(17)}} className={style.circle}></div>
            <div title="17" style={{backgroundColor: this.state.day17[16], display: this.circleAvalaible(17)}} className={style.circle}></div>
            <div title="17" style={{backgroundColor: this.state.day17[17], display: this.circleAvalaible(17)}} className={style.circle}></div>

            <p className={style.name} title="17">{this.state.day17[6]}</p>
            <p className={style.name} title="17">{this.state.day17[7]}</p>
            <p className={style.name} title="17">{this.state.day17[8]}</p>

          </div>

        </div>
        <div title="18" className={style.day}>
          <h2 title="18" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 18 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>18</h2>

          <div title="18" onClick={this.props.handle} className={style.mañana}>
            <h5 title="18" className={this.dayAvailable(18)}>{`${this.state.estado.title}`}</h5>

            <div title="18" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="18" style={{backgroundColor: this.state.day18[9], display: this.circleAvalaible(18)}} className={style.circle}></div>
              <div title="18" style={{backgroundColor: this.state.day18[10], display: this.circleAvalaible(18)}} className={style.circle}></div>
              <div title="18" style={{backgroundColor: this.state.day18[11], display: this.circleAvalaible(18)}} className={style.circle}></div>

              <p className={style.name} title="18">{this.state.day18[0]}</p>
              <p className={style.name} title="18">{this.state.day18[1]}</p>
              <p className={style.name} title="18">{this.state.day18[2]}</p>
            </div>

            <div title="18" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="18" style={{backgroundColor: this.state.day18[12], display: this.circleAvalaible(18)}} className={style.circle}></div>
              <div title="18" style={{backgroundColor: this.state.day18[13], display: this.circleAvalaible(18)}} className={style.circle}></div>
              <div title="18" style={{backgroundColor: this.state.day18[14], display: this.circleAvalaible(18)}} className={style.circle}></div>

              <p className={style.name} title="18">{this.state.day18[3]}</p>
              <p className={style.name} title="18">{this.state.day18[4]}</p>
              <p className={style.name} title="18">{this.state.day18[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(18) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="18" className={this.dayAvailable(18) + " " + style.sepador} />

          <div title="18" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(18) === 6 ? 'none' : 'flex'}}>
            <h5 title="18" className={this.dayAvailable(18)}>5:00 a 7:00 PM</h5>

            <div title="18" style={{backgroundColor: this.state.day18[15], display: this.circleAvalaible(18)}} className={style.circle}></div>
            <div title="18" style={{backgroundColor: this.state.day18[16], display: this.circleAvalaible(18)}} className={style.circle}></div>
            <div title="18" style={{backgroundColor: this.state.day18[17], display: this.circleAvalaible(18)}} className={style.circle}></div>

            <p className={style.name} title="18">{this.state.day18[6]}</p>
            <p className={style.name} title="18">{this.state.day18[7]}</p>
            <p className={style.name} title="18">{this.state.day18[8]}</p>
          </div>

        </div>
        <div title="19" className={style.day}>
          <h2 title="19" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 19 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>19</h2>

          <div title="19" onClick={this.props.handle} className={style.mañana}>
            <h5 title="19" className={this.dayAvailable(19)}>{`${this.state.estado.title}`}</h5>

            <div title="19" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="19" style={{backgroundColor: this.state.day19[9], display: this.circleAvalaible(19)}} className={style.circle}></div>
              <div title="19" style={{backgroundColor: this.state.day19[10], display: this.circleAvalaible(19)}} className={style.circle}></div>
              <div title="19" style={{backgroundColor: this.state.day19[11], display: this.circleAvalaible(19)}} className={style.circle}></div>

              <p className={style.name} title="19">{this.state.day19[0]}</p>
              <p className={style.name} title="19">{this.state.day19[1]}</p>
              <p className={style.name} title="19">{this.state.day19[2]}</p>
            </div>

            <div title="19" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="19" style={{backgroundColor: this.state.day19[12], display: this.circleAvalaible(19)}} className={style.circle}></div>
              <div title="19" style={{backgroundColor: this.state.day19[13], display: this.circleAvalaible(19)}} className={style.circle}></div>
              <div title="19" style={{backgroundColor: this.state.day19[14], display: this.circleAvalaible(19)}} className={style.circle}></div>

              <p className={style.name} title="19">{this.state.day19[3]}</p>
              <p className={style.name} title="19">{this.state.day19[4]}</p>
              <p className={style.name} title="19">{this.state.day19[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(19) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="19" className={this.dayAvailable(19) + " " + style.sepador} />

          <div title="19" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(19) === 6 ? 'none' : 'flex'}}>
            <h5 title="19" className={this.dayAvailable(19)}>5:00 a 7:00 PM</h5>

            <div title="19" style={{backgroundColor: this.state.day19[15], display: this.circleAvalaible(19)}} className={style.circle}></div>
            <div title="19" style={{backgroundColor: this.state.day19[16], display: this.circleAvalaible(19)}} className={style.circle}></div>
            <div title="19" style={{backgroundColor: this.state.day19[17], display: this.circleAvalaible(19)}} className={style.circle}></div>

            <p className={style.name} title="19">{this.state.day19[6]}</p>
            <p className={style.name} title="19">{this.state.day19[7]}</p>
            <p className={style.name} title="19">{this.state.day19[8]}</p>
          </div>

        </div>
        <div title="20" className={style.day}>
          <h2 title="20" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 20 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>20</h2>

          <div title="20" onClick={this.props.handle} className={style.mañana}>
            <h5 title="20" className={this.dayAvailable(20)}>{`${this.state.estado.title}`}</h5>

            <div title="20" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="20" style={{backgroundColor: this.state.day20[9], display: this.circleAvalaible(20)}} className={style.circle}></div>
              <div title="20" style={{backgroundColor: this.state.day20[10], display: this.circleAvalaible(20)}} className={style.circle}></div>
              <div title="20" style={{backgroundColor: this.state.day20[11], display: this.circleAvalaible(20)}} className={style.circle}></div>

              <p className={style.name} title="20">{this.state.day20[0]}</p>
              <p className={style.name} title="20">{this.state.day20[1]}</p>
              <p className={style.name} title="20">{this.state.day20[2]}</p>
            </div>

            <div title="20" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="20" style={{backgroundColor: this.state.day20[12], display: this.circleAvalaible(20)}} className={style.circle}></div>
              <div title="20" style={{backgroundColor: this.state.day20[13], display: this.circleAvalaible(20)}} className={style.circle}></div>
              <div title="20" style={{backgroundColor: this.state.day20[14], display: this.circleAvalaible(20)}} className={style.circle}></div>

              <p className={style.name} title="20">{this.state.day20[3]}</p>
              <p className={style.name} title="20">{this.state.day20[4]}</p>
              <p className={style.name} title="20">{this.state.day20[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(20) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="20" className={this.dayAvailable(20) + " " + style.sepador} />

          <div title="20" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(20) === 6 ? 'none' : 'flex'}}>
            <h5 title="20" className={this.dayAvailable(20)}>5:00 a 7:00 PM</h5>

            <div title="20" style={{backgroundColor: this.state.day20[15], display: this.circleAvalaible(20)}} className={style.circle}></div>
            <div title="20" style={{backgroundColor: this.state.day20[16], display: this.circleAvalaible(20)}} className={style.circle}></div>
            <div title="20" style={{backgroundColor: this.state.day20[17], display: this.circleAvalaible(20)}} className={style.circle}></div>

            <p className={style.name} title="20">{this.state.day20[6]}</p>
            <p className={style.name} title="20">{this.state.day20[7]}</p>
            <p className={style.name} title="20">{this.state.day20[8]}</p>
          </div>

        </div>
        <div title="21" className={style.day}>
          <h2 title="21" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 21 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>21</h2>

          <div title="21" onClick={this.props.handle} className={style.mañana}>
            <h5 title="21" className={this.dayAvailable(21)}>{`${this.state.estado.title}`}</h5>

            <div title="21" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="21" style={{backgroundColor: this.state.day21[9], display: this.circleAvalaible(21)}} className={style.circle}></div>
              <div title="21" style={{backgroundColor: this.state.day21[10], display: this.circleAvalaible(21)}} className={style.circle}></div>
              <div title="21" style={{backgroundColor: this.state.day21[11], display: this.circleAvalaible(21)}} className={style.circle}></div>

              <p className={style.name} title="21">{this.state.day21[0]}</p>
              <p className={style.name} title="21">{this.state.day21[1]}</p>
              <p className={style.name} title="21">{this.state.day21[2]}</p>
            </div>

            <div title="21" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="21" style={{backgroundColor: this.state.day21[12], display: this.circleAvalaible(21)}} className={style.circle}></div>
              <div title="21" style={{backgroundColor: this.state.day21[13], display: this.circleAvalaible(21)}} className={style.circle}></div>
              <div title="21" style={{backgroundColor: this.state.day21[14], display: this.circleAvalaible(21)}} className={style.circle}></div>

              <p className={style.name} title="21">{this.state.day21[3]}</p>
              <p className={style.name} title="21">{this.state.day21[4]}</p>
              <p className={style.name} title="21">{this.state.day21[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(21) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="21" className={this.dayAvailable(21) + " " + style.sepador} />

          <div title="21" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(21) === 6 ? 'none' : 'flex'}}>
            <h5 title="21" className={this.dayAvailable(21)}>5:00 a 7:00 PM</h5>

            <div title="21" style={{backgroundColor: this.state.day21[15], display: this.circleAvalaible(21)}} className={style.circle}></div>
            <div title="21" style={{backgroundColor: this.state.day21[16], display: this.circleAvalaible(21)}} className={style.circle}></div>
            <div title="21" style={{backgroundColor: this.state.day21[17], display: this.circleAvalaible(21)}} className={style.circle}></div>

            <p className={style.name} title="21">{this.state.day21[6]}</p>
            <p className={style.name} title="21">{this.state.day21[7]}</p>
            <p className={style.name} title="21">{this.state.day21[8]}</p>
          </div>

        </div>
        <div title="22" className={style.day}>
          <h2 title="22" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 22 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>22</h2>

          <div title="22" onClick={this.props.handle} className={style.mañana}>
            <h5 title="22" className={this.dayAvailable(22)}>{`${this.state.estado.title}`}</h5>

            <div title="22" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="22" style={{backgroundColor: this.state.day22[9], display: this.circleAvalaible(22)}} className={style.circle}></div>
              <div title="22" style={{backgroundColor: this.state.day22[10], display: this.circleAvalaible(22)}} className={style.circle}></div>
              <div title="22" style={{backgroundColor: this.state.day22[11], display: this.circleAvalaible(22)}} className={style.circle}></div>

              <p className={style.name} title="22">{this.state.day22[0]}</p>
              <p className={style.name} title="22">{this.state.day22[1]}</p>
              <p className={style.name} title="22">{this.state.day22[2]}</p>
            </div>

            <div title="22" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="22" style={{backgroundColor: this.state.day22[12], display: this.circleAvalaible(22)}} className={style.circle}></div>
              <div title="22" style={{backgroundColor: this.state.day22[13], display: this.circleAvalaible(22)}} className={style.circle}></div>
              <div title="22" style={{backgroundColor: this.state.day22[14], display: this.circleAvalaible(22)}} className={style.circle}></div>

              <p className={style.name} title="22">{this.state.day22[3]}</p>
              <p className={style.name} title="22">{this.state.day22[4]}</p>
              <p className={style.name} title="22">{this.state.day22[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(22) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="22" className={this.dayAvailable(22) + " " + style.sepador} />

          <div title="22" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(22) === 6 ? 'none' : 'flex'}}>
            <h5 title="22" className={this.dayAvailable(22)}>5:00 a 7:00 PM</h5>

            <div title="22" style={{backgroundColor: this.state.day22[15], display: this.circleAvalaible(22)}} className={style.circle}></div>
            <div title="22" style={{backgroundColor: this.state.day22[16], display: this.circleAvalaible(22)}} className={style.circle}></div>
            <div title="22" style={{backgroundColor: this.state.day22[17], display: this.circleAvalaible(22)}} className={style.circle}></div>

            <p className={style.name} title="22">{this.state.day22[6]}</p>
            <p className={style.name} title="22">{this.state.day22[7]}</p>
            <p className={style.name} title="22">{this.state.day22[8]}</p>
          </div>

        </div>
        <div title="23" className={style.day}>
          <h2 title="23" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 23 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>23</h2>

          <div title="23" onClick={this.props.handle} className={style.mañana}>
            <h5 title="23" className={this.dayAvailable(23)}>{`${this.state.estado.title}`}</h5>

            <div title="23" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="23" style={{backgroundColor: this.state.day23[9], display: this.circleAvalaible(23)}} className={style.circle}></div>
              <div title="23" style={{backgroundColor: this.state.day23[10], display: this.circleAvalaible(23)}} className={style.circle}></div>
              <div title="23" style={{backgroundColor: this.state.day23[11], display: this.circleAvalaible(23)}} className={style.circle}></div>

              <p className={style.name} title="23">{this.state.day23[0]}</p>
              <p className={style.name} title="23">{this.state.day23[1]}</p>
              <p className={style.name} title="23">{this.state.day23[2]}</p>
            </div>

            <div title="23" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="23" style={{backgroundColor: this.state.day23[12], display: this.circleAvalaible(23)}} className={style.circle}></div>
              <div title="23" style={{backgroundColor: this.state.day23[13], display: this.circleAvalaible(23)}} className={style.circle}></div>
              <div title="23" style={{backgroundColor: this.state.day23[14], display: this.circleAvalaible(23)}} className={style.circle}></div>

              <p className={style.name} title="23">{this.state.day23[3]}</p>
              <p className={style.name} title="23">{this.state.day23[4]}</p>
              <p className={style.name} title="23">{this.state.day23[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(23) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="23" className={this.dayAvailable(23) + " " + style.sepador} />

          <div title="23" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(23) === 6 ? 'none' : 'flex'}}>
            <h5 title="23" className={this.dayAvailable(23)}>5:00 a 7:00 PM</h5>

            <div title="23" style={{backgroundColor: this.state.day23[15], display: this.circleAvalaible(23)}} className={style.circle}></div>
            <div title="23" style={{backgroundColor: this.state.day23[16], display: this.circleAvalaible(23)}} className={style.circle}></div>
            <div title="23" style={{backgroundColor: this.state.day23[17], display: this.circleAvalaible(23)}} className={style.circle}></div>

            <p className={style.name} title="23">{this.state.day23[6]}</p>
            <p className={style.name} title="23">{this.state.day23[7]}</p>
            <p className={style.name} title="23">{this.state.day23[8]}</p>
          </div>

        </div>
        <div title="24" className={style.day}>
          <h2 title="24" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 24 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>24</h2>

          <div title="24" onClick={this.props.handle} className={style.mañana}>
            <h5 title="24" className={this.dayAvailable(24)}>{`${this.state.estado.title}`}</h5>

            <div title="24" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="24" style={{backgroundColor: this.state.day24[9], display: this.circleAvalaible(24)}} className={style.circle}></div>
              <div title="24" style={{backgroundColor: this.state.day24[10], display: this.circleAvalaible(24)}} className={style.circle}></div>
              <div title="24" style={{backgroundColor: this.state.day24[11], display: this.circleAvalaible(24)}} className={style.circle}></div>

              <p className={style.name} title="24">{this.state.day24[0]}</p>
              <p className={style.name} title="24">{this.state.day24[1]}</p>
              <p className={style.name} title="24">{this.state.day24[2]}</p>
            </div>

            <div title="24" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="24" style={{backgroundColor: this.state.day24[12], display: this.circleAvalaible(24)}} className={style.circle}></div>
              <div title="24" style={{backgroundColor: this.state.day24[13], display: this.circleAvalaible(24)}} className={style.circle}></div>
              <div title="24" style={{backgroundColor: this.state.day24[14], display: this.circleAvalaible(24)}} className={style.circle}></div>

              <p className={style.name} title="24">{this.state.day24[3]}</p>
              <p className={style.name} title="24">{this.state.day24[4]}</p>
              <p className={style.name} title="24">{this.state.day24[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(24) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="24" className={this.dayAvailable(24) + " " + style.sepador} />

          <div title="24" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(24) === 6 ? 'none' : 'flex'}}>
            <h5 title="24" className={this.dayAvailable(24)}>5:00 a 7:00 PM</h5>

            <div title="24" style={{backgroundColor: this.state.day24[15], display: this.circleAvalaible(24)}} className={style.circle}></div>
            <div title="24" style={{backgroundColor: this.state.day24[16], display: this.circleAvalaible(24)}} className={style.circle}></div>
            <div title="24" style={{backgroundColor: this.state.day24[17], display: this.circleAvalaible(24)}} className={style.circle}></div>

            <p className={style.name} title="24">{this.state.day24[6]}</p>
            <p className={style.name} title="24">{this.state.day24[7]}</p>
            <p className={style.name} title="24">{this.state.day24[8]}</p>
          </div>

        </div>
        <div title="25" className={style.day}>
          <h2 title="25" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 25 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>25</h2>

          <div title="25" onClick={this.props.handle} className={style.mañana}>
            <h5 title="25" className={this.dayAvailable(25)}>{`${this.state.estado.title}`}</h5>

            <div title="25" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="25" style={{backgroundColor: this.state.day25[9], display: this.circleAvalaible(25)}} className={style.circle}></div>
              <div title="25" style={{backgroundColor: this.state.day25[10], display: this.circleAvalaible(25)}} className={style.circle}></div>
              <div title="25" style={{backgroundColor: this.state.day25[11], display: this.circleAvalaible(25)}} className={style.circle}></div>

              <p className={style.name} title="25">{this.state.day25[0]}</p>
              <p className={style.name} title="25">{this.state.day25[1]}</p>
              <p className={style.name} title="25">{this.state.day25[2]}</p>
            </div>

            <div title="25" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="25" style={{backgroundColor: this.state.day25[12], display: this.circleAvalaible(25)}} className={style.circle}></div>
              <div title="25" style={{backgroundColor: this.state.day25[13], display: this.circleAvalaible(25)}} className={style.circle}></div>
              <div title="25" style={{backgroundColor: this.state.day25[14], display: this.circleAvalaible(25)}} className={style.circle}></div>

              <p className={style.name} title="25">{this.state.day25[3]}</p>
              <p className={style.name} title="25">{this.state.day25[4]}</p>
              <p className={style.name} title="25">{this.state.day25[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(25) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="25" className={this.dayAvailable(25) + " " + style.sepador} />

          <div title="25" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(25) === 6 ? 'none' : 'flex'}}>
            <h5 title="25" className={this.dayAvailable(25)}>5:00 a 7:00 PM</h5>

            <div title="25" style={{backgroundColor: this.state.day25[15], display: this.circleAvalaible(25)}} className={style.circle}></div>
            <div title="25" style={{backgroundColor: this.state.day25[16], display: this.circleAvalaible(25)}} className={style.circle}></div>
            <div title="25" style={{backgroundColor: this.state.day25[17], display: this.circleAvalaible(25)}} className={style.circle}></div>

            <p className={style.name} title="25">{this.state.day25[6]}</p>
            <p className={style.name} title="25">{this.state.day25[7]}</p>
            <p className={style.name} title="25">{this.state.day25[8]}</p>
          </div>
        </div>
        <div title="26" className={style.day}>
          <h2 title="26" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 26 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>26</h2>

          <div title="26" onClick={this.props.handle} className={style.mañana}>
            <h5 title="26" className={this.dayAvailable(26)}>{`${this.state.estado.title}`}</h5>

            <div title="26" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="26" style={{backgroundColor: this.state.day26[9], display: this.circleAvalaible(26)}} className={style.circle}></div>
              <div title="26" style={{backgroundColor: this.state.day26[10], display: this.circleAvalaible(26)}} className={style.circle}></div>
              <div title="26" style={{backgroundColor: this.state.day26[11], display: this.circleAvalaible(26)}} className={style.circle}></div>

              <p className={style.name} title="26">{this.state.day26[0]}</p>
              <p className={style.name} title="26">{this.state.day26[1]}</p>
              <p className={style.name} title="26">{this.state.day26[2]}</p>
            </div>

            <div title="26" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="26" style={{backgroundColor: this.state.day26[12], display: this.circleAvalaible(26)}} className={style.circle}></div>
              <div title="26" style={{backgroundColor: this.state.day26[13], display: this.circleAvalaible(26)}} className={style.circle}></div>
              <div title="26" style={{backgroundColor: this.state.day26[14], display: this.circleAvalaible(26)}} className={style.circle}></div>

              <p className={style.name} title="26">{this.state.day26[3]}</p>
              <p className={style.name} title="26">{this.state.day26[4]}</p>
              <p className={style.name} title="26">{this.state.day26[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(26) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="26" className={this.dayAvailable(26) + " " + style.sepador} />

          <div title="26" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(26) === 6 ? 'none' : 'flex'}}>
            <h5 title="26" className={this.dayAvailable(26)}>5:00 a 7:00 PM</h5>

            <div title="26" style={{backgroundColor: this.state.day26[15], display: this.circleAvalaible(26)}} className={style.circle}></div>
            <div title="26" style={{backgroundColor: this.state.day26[16], display: this.circleAvalaible(26)}} className={style.circle}></div>
            <div title="26" style={{backgroundColor: this.state.day26[17], display: this.circleAvalaible(26)}} className={style.circle}></div>

            <p className={style.name} title="26">{this.state.day26[6]}</p>
            <p className={style.name} title="26">{this.state.day26[7]}</p>
            <p className={style.name} title="26">{this.state.day26[8]}</p>
          </div>

        </div>
        <div title="27" className={style.day}>
          <h2 title="27" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 27 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>27</h2>

          <div title="27" onClick={this.props.handle} className={style.mañana}>
            <h5 title="27" className={this.dayAvailable(27)}>{`${this.state.estado.title}`}</h5>

            <div title="27" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="27" style={{backgroundColor: this.state.day27[9], display: this.circleAvalaible(27)}} className={style.circle}></div>
              <div title="27" style={{backgroundColor: this.state.day27[10], display: this.circleAvalaible(27)}} className={style.circle}></div>
              <div title="27" style={{backgroundColor: this.state.day27[11], display: this.circleAvalaible(27)}} className={style.circle}></div>

              <p className={style.name} title="27">{this.state.day27[0]}</p>
              <p className={style.name} title="27">{this.state.day27[1]}</p>
              <p className={style.name} title="27">{this.state.day27[2]}</p>
            </div>

            <div title="27" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="27" style={{backgroundColor: this.state.day27[12], display: this.circleAvalaible(27)}} className={style.circle}></div>
              <div title="27" style={{backgroundColor: this.state.day27[13], display: this.circleAvalaible(27)}} className={style.circle}></div>
              <div title="27" style={{backgroundColor: this.state.day27[14], display: this.circleAvalaible(27)}} className={style.circle}></div>

              <p className={style.name} title="27">{this.state.day27[3]}</p>
              <p className={style.name} title="27">{this.state.day27[4]}</p>
              <p className={style.name} title="27">{this.state.day27[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(27) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="27" className={this.dayAvailable(27) + " " + style.sepador} />

          <div title="27" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(27) === 6 ? 'none' : 'flex'}}>
            <h5 title="27" className={this.dayAvailable(27)}>5:00 a 7:00 PM</h5>

            <div title="27" style={{backgroundColor: this.state.day27[15], display: this.circleAvalaible(27)}} className={style.circle}></div>
            <div title="27" style={{backgroundColor: this.state.day27[16], display: this.circleAvalaible(27)}} className={style.circle}></div>
            <div title="27" style={{backgroundColor: this.state.day27[17], display: this.circleAvalaible(27)}} className={style.circle}></div>

            <p className={style.name} title="27">{this.state.day27[6]}</p>
            <p className={style.name} title="27">{this.state.day27[7]}</p>
            <p className={style.name} title="27">{this.state.day27[8]}</p>
          </div>

        </div>
        <div title="28" className={style.day}>
          <h2 title="28" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 28 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>28</h2>

          <div title="28" onClick={this.props.handle} className={style.mañana}>
            <h5 title="28" className={this.dayAvailable(28)}>{`${this.state.estado.title}`}</h5>

            <div title="28" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="28" style={{backgroundColor: this.state.day28[9], display: this.circleAvalaible(28)}} className={style.circle}></div>
              <div title="28" style={{backgroundColor: this.state.day28[10], display: this.circleAvalaible(28)}} className={style.circle}></div>
              <div title="28" style={{backgroundColor: this.state.day28[11], display: this.circleAvalaible(28)}} className={style.circle}></div>

              <p className={style.name} title="28">{this.state.day28[0]}</p>
              <p className={style.name} title="28">{this.state.day28[1]}</p>
              <p className={style.name} title="28">{this.state.day28[2]}</p>
            </div>

            <div title="28" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="28" style={{backgroundColor: this.state.day28[12], display: this.circleAvalaible(28)}} className={style.circle}></div>
              <div title="28" style={{backgroundColor: this.state.day28[13], display: this.circleAvalaible(28)}} className={style.circle}></div>
              <div title="28" style={{backgroundColor: this.state.day28[14], display: this.circleAvalaible(28)}} className={style.circle}></div>

              <p className={style.name} title="28">{this.state.day28[3]}</p>
              <p className={style.name} title="28">{this.state.day28[4]}</p>
              <p className={style.name} title="28">{this.state.day28[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(28) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="28" className={this.dayAvailable(28) + " " + style.sepador} />

          <div title="28" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(28) === 6 ? 'none' : 'flex'}}>
            <h5 title="28" className={this.dayAvailable(28)}>5:00 a 7:00 PM</h5>

            <div title="28" style={{backgroundColor: this.state.day28[15], display: this.circleAvalaible(28)}} className={style.circle}></div>
            <div title="28" style={{backgroundColor: this.state.day28[16], display: this.circleAvalaible(28)}} className={style.circle}></div>
            <div title="28" style={{backgroundColor: this.state.day28[17], display: this.circleAvalaible(28)}} className={style.circle}></div>

            <p className={style.name} title="28">{this.state.day28[6]}</p>
            <p className={style.name} title="28">{this.state.day28[7]}</p>
            <p className={style.name} title="28">{this.state.day28[8]}</p>
          </div>

        </div>
        <div title="29" className={style.day} style={{ display: this.props.days29.dia29 }}>
          <h2 title="29" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 29 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>29</h2>

          <div title="29" onClick={this.props.handle} className={style.mañana}>
            <h5 title="29" className={this.dayAvailable(29)}>{`${this.state.estado.title}`}</h5>

            <div title="29" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="29" style={{backgroundColor: this.state.day29[9], display: this.circleAvalaible(29)}} className={style.circle}></div>
              <div title="29" style={{backgroundColor: this.state.day29[10], display: this.circleAvalaible(29)}} className={style.circle}></div>
              <div title="29" style={{backgroundColor: this.state.day29[11], display: this.circleAvalaible(29)}} className={style.circle}></div>

              <p className={style.name} title="29">{this.state.day29[0]}</p>
              <p className={style.name} title="29">{this.state.day29[1]}</p>
              <p className={style.name} title="29">{this.state.day29[2]}</p>
            </div>

            <div title="29" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="29" style={{backgroundColor: this.state.day29[12], display: this.circleAvalaible(29)}} className={style.circle}></div>
              <div title="29" style={{backgroundColor: this.state.day29[13], display: this.circleAvalaible(29)}} className={style.circle}></div>
              <div title="29" style={{backgroundColor: this.state.day29[14], display: this.circleAvalaible(29)}} className={style.circle}></div>

              <p className={style.name} title="29">{this.state.day29[3]}</p>
              <p className={style.name} title="29">{this.state.day29[4]}</p>
              <p className={style.name} title="29">{this.state.day29[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(29) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="29" className={this.dayAvailable(29) + " " + style.sepador} />

          <div title="29" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(29) === 6 ? 'none' : 'flex'}}>
            <h5 title="29" className={this.dayAvailable(29)}>5:00 a 7:00 PM</h5>

            <div title="29" style={{backgroundColor: this.state.day29[15], display: this.circleAvalaible(29)}} className={style.circle}></div>
            <div title="29" style={{backgroundColor: this.state.day29[16], display: this.circleAvalaible(29)}} className={style.circle}></div>
            <div title="29" style={{backgroundColor: this.state.day29[17], display: this.circleAvalaible(29)}} className={style.circle}></div>

            <p className={style.name} title="29">{this.state.day29[6]}</p>
            <p className={style.name} title="29">{this.state.day29[7]}</p>
            <p className={style.name} title="29">{this.state.day29[8]}</p>
          </div>

        </div>
        <div title="30" className={style.day} style={{ display: this.props.days30.dia30 }}>
          <h2 title="30" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 30 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>30</h2>

          <div title="30" onClick={this.props.handle} className={style.mañana}>
            <h5 title="30" className={this.dayAvailable(30)}>{`${this.state.estado.title}`}</h5>

            <div title="30" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="30" style={{backgroundColor: this.state.day30[9], display: this.circleAvalaible(30)}} className={style.circle}></div>
              <div title="30" style={{backgroundColor: this.state.day30[10], display: this.circleAvalaible(30)}} className={style.circle}></div>
              <div title="30" style={{backgroundColor: this.state.day30[11], display: this.circleAvalaible(30)}} className={style.circle}></div>

              <p className={style.name} title="30">{this.state.day30[0]}</p>
              <p className={style.name} title="30">{this.state.day30[1]}</p>
              <p className={style.name} title="30">{this.state.day30[2]}</p>
            </div>

            <div title="30" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="30" style={{backgroundColor: this.state.day30[12], display: this.circleAvalaible(30)}} className={style.circle}></div>
              <div title="30" style={{backgroundColor: this.state.day30[13], display: this.circleAvalaible(30)}} className={style.circle}></div>
              <div title="30" style={{backgroundColor: this.state.day30[14], display: this.circleAvalaible(30)}} className={style.circle}></div>

              <p className={style.name} title="30">{this.state.day30[3]}</p>
              <p className={style.name} title="30">{this.state.day30[4]}</p>
              <p className={style.name} title="30">{this.state.day30[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(30) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="30" className={this.dayAvailable(30)  + " " + style.sepador} />

          <div title="30" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(30) === 6 ? 'none' : 'flex'}}>
            <h5 title="30" className={this.dayAvailable(30)}>5:00 a 7:00 PM</h5>

            <div title="30" style={{backgroundColor: this.state.day30[15], display: this.circleAvalaible(30)}} className={style.circle}></div>
            <div title="30" style={{backgroundColor: this.state.day30[16], display: this.circleAvalaible(30)}} className={style.circle}></div>
            <div title="30" style={{backgroundColor: this.state.day30[17], display: this.circleAvalaible(30)}} className={style.circle}></div>

            <p className={style.name} title="30">{this.state.day30[6]}</p>
            <p className={style.name} title="30">{this.state.day30[7]}</p>
            <p className={style.name} title="30">{this.state.day30[8]}</p>
          </div>

        </div>
        <div title="31" className={style.day} style={{ display: this.props.days31.dia31 }}>
          <h2 title="31" className={this.props.monthCurrent === this.props.mesActual && this.props.today === 31 && this.props.year == this.props.yearCurrent ? style.today : 'none'}>31</h2>

          <div title="31" onClick={this.props.handle} className={style.mañana}>
            <h5 title="31" className={this.dayAvailable(31)}>{`${this.state.estado.title}`}</h5>

            <div title="31" className={style.turno1} style={{display: this.state.matches === false ? this.state.estado.display2 : 'flex'}}>
              <div title="31" style={{backgroundColor: this.state.day31[9], display: this.circleAvalaible(31)}} className={style.circle}></div>
              <div title="31" style={{backgroundColor: this.state.day31[10], display: this.circleAvalaible(31)}} className={style.circle}></div>
              <div title="31" style={{backgroundColor: this.state.day31[11], display: this.circleAvalaible(31)}} className={style.circle}></div>

              <p className={style.name} title="31">{this.state.day31[0]}</p>
              <p className={style.name} title="31">{this.state.day31[1]}</p>
              <p className={style.name} title="31">{this.state.day31[2]}</p>
            </div>

            <div title="31" className={style.turno2} style={{display: this.state.matches === false ? this.state.estado.display1 : 'flex'}}>
              <div title="31" style={{backgroundColor: this.state.day31[12], display: this.circleAvalaible(31)}} className={style.circle}></div>
              <div title="31" style={{backgroundColor: this.state.day31[13], display: this.circleAvalaible(31)}} className={style.circle}></div>
              <div title="31" style={{backgroundColor: this.state.day31[14], display: this.circleAvalaible(31)}} className={style.circle}></div>

              <p className={style.name} title="31">{this.state.day31[3]}</p>
              <p className={style.name} title="31">{this.state.day31[4]}</p>
              <p className={style.name} title="31">{this.state.day31[5]}</p>
            </div>
          </div>

          <span className={style.btnUpdate} style={{display: this.dayAvailable(31) === style.dayActive && this.state.matches === false ? 'flex' : 'none'}} onClick={this.handleClick}>
            <img src="img/cambiar.svg" alt="cambiar horario" />
          </span>

          <hr title="31" className={this.dayAvailable(31) + " " + style.sepador} />

          <div title="31" onClick={this.props.handle} className={style.tarde} style={{display: this.SabTarde(31) === 6 ? 'none' : 'flex'}}>
            <h5 title="31" className={this.dayAvailable(31)}>5:00 a 7:00 PM</h5>

            <div title="31" style={{backgroundColor: this.state.day31[15], display: this.circleAvalaible(31)}} className={style.circle}></div>
            <div title="31" style={{backgroundColor: this.state.day31[16], display: this.circleAvalaible(31)}} className={style.circle}></div>
            <div title="31" style={{backgroundColor: this.state.day31[17], display: this.circleAvalaible(31)}} className={style.circle}></div>

            <p className={style.name} title="31">{this.state.day31[6]}</p>
            <p className={style.name} title="31">{this.state.day31[7]}</p>
            <p className={style.name} title="31">{this.state.day31[8]}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Day;
