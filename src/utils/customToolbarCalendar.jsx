import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function CustomToolbar({ label, onNavigate }) {
  return (
    <div className="rbc-toolbar">
      {/* Flecha hacia atrás */}
      <IconButton onClick={() => onNavigate('PREV')}>
        <ArrowBackIcon />
      </IconButton>
      
      {/* Título del mes y año */}
      <span className="rbc-toolbar-label">{label}</span>
      
      {/* Flecha hacia adelante */}
      <IconButton onClick={() => onNavigate('NEXT')}>
        <ArrowForwardIcon />
      </IconButton>
    </div>
  );
}

export default CustomToolbar;