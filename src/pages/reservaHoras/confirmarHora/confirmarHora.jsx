import React from "react";
import { useCitas } from '../../../context/CitasContext';
import { IoMdArrowRoundBack } from "react-icons/io";
import { formatearFecha } from '../../../utils/utils';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // Para la redirección

/* Import styles */
import './confirmarHora.css';
export const ConfirmarHora = () => {
    const navigate = useNavigate(); // Inicializa el hook de navegación
    const {
        rutUsuario,
        profesionalEscogido,
        citaDetails,
        createCita,
        prevStep,
        finalStep,
        currentStep
    } = useCitas(); 

    const handleConfirmarCita = async () => {
        const nuevaCita = {
            rut_paciente: rutUsuario,
            id_psicologo: profesionalEscogido.idPsicologoEscogido,
            fecha: formatearFecha(citaDetails.fecha),
            hora: citaDetails.hora,
        };
        try {
            await createCita(nuevaCita);
                Swal.fire({
                title: '¡Cita creada con éxito!',
                text: `Su cita ha sido creada con éxito para el día ${formatearFecha(nuevaCita.fecha)}. Recibirá una notificación por correo 24 horas antes para confirmar su cita.`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/');
                }
            });
            finalStep();
        } catch (error) {
            console.error("Error al confirmar la cita:", error);
    
            // Muestra un mensaje de error
            Swal.fire({
                title: 'Error',
                text: 'Hubo un error al confirmar la cita. Inténtalo nuevamente.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    return (
        <div className="citasCard">
            <h2>Confirmar Cita</h2>
            <div className="cita-details">
                <p><strong>RUT Paciente:</strong> {rutUsuario}</p>
                <p><strong>Profesional:</strong> {profesionalEscogido.nombrePsicologoEscogido}</p>
                <p><strong>Especialidad:</strong> {profesionalEscogido.especialidad}</p>
                <p><strong>Fecha:</strong> {citaDetails.fecha}</p>
                <p><strong>Hora:</strong> {citaDetails.hora}</p>
            </div>


            <footer className='formNavigationContainer'>
                {currentStep > 0 && (
                    <button type="button" onClick={prevStep} className='citasCardButtonBack'>
                        <IoMdArrowRoundBack />
                    </button>
                )}

                <button type="button" className='citasCardButton' onClick={handleConfirmarCita}>
                    CONFIRMAR HORA
                </button>
            </footer>
        </div>
    );
};

export default ConfirmarHora;
