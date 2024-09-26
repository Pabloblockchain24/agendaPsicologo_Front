/*Import dependencies*/
import axios from "./axios";


export const getAppointments = () => axios.get('/appointments')
export const createAppointmentRequest = (cita) => axios.post('/appointment', cita)