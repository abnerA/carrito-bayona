import { createSlice } from "@reduxjs/toolkit";

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
let monthNumber = currentDate.getMonth(); // Mes
let meses = monthNames[monthNumber];


const initialState = {
    title: 'Iniciar sesión',
    name: 'Blanco', // Cambiar esta linea a ''
    display1: 'none',
    display2: 'block',
    display3: 'none',
    estado: false,
    ventanaModal: 'none',
    diaClick: 0,
    diaSelect: 1,
    month: meses,
    diaModal: 0,
    monthCambiante: 'Abril'
};

export const iniciarSesion = createSlice({
    name: 'inicio',
    initialState,
    reducers: {
        startSection: (state) => {
            state.display1 = 'flex';
            state.display2 = 'none';
            state.display3 = 'flex';
        },
        closeSection: (state) => {
            state.display3 = 'none';
            state.display2 = 'flex';
            state.name = 'Blanco';
            state.estado = false;
        },
        handleClick: (state, action) => {
            state.name = action.payload;
            state.display1 = 'none';
            state.title = 'Cerrar sesión';
            state.estado = true;
        },
        modal: (state) => {
            state.ventanaModal = 'none'
        },
        openModal: (state, action) => {
            state.diaSelect = action.payload[0];
            state.ventanaModal = 'flex';
            state.diaClick = action.payload[0];
            state.month = action.payload[1]
        },
        diaWeek: (state, action) => {
            state.diaModal = action.payload;
        },
        cambioMonth: (state, action) => {
            state.monthCambiante = action.payload;
        }
    }
});

export const { startSection, closeSection, handleClick, modal, openModal, diaWeek, cambioMonth } = iniciarSesion.actions;
export default iniciarSesion.reducer;