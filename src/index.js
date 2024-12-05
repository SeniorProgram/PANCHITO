// src/index.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, AppBar, Toolbar, Button, Box, Container, Grid, Paper, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';
import logo from './imagen/logo.jpg';
import banner from './imagen/baner.jpg';

// Definir el tema
const theme = createTheme({
  palette: {
    primary: {
      main: '#00008B', // Azul oscuro
    },
    secondary: {
      main: '#FF0000', // Rojo
    },
    background: {
      default: '#FFFFFF', // Blanco
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

const MinimarketDashboard = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: '#00008B' }}>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ height: '60px', marginRight: '16px' }} />
          <Button color="inherit" onClick={() => handleSectionChange('inicio')}>Inicio</Button>
          <Button color="inherit" onClick={() => handleSectionChange('nosotros')}>Nosotros</Button>
          <Button color="inherit" onClick={() => handleSectionChange('contacto')}>Contacto</Button>
          <Button color="inherit" onClick={() => handleSectionChange('analisis')}>Análisis de Ventas</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box mt={4}>
          {activeSection === 'inicio' && (
            <div>
              <img src={banner} alt="Banner" style={{ width: '100%', borderRadius: '10px' }} />
              <Typography variant="h4" style={{ marginTop: '20px', textAlign: 'center' }}>
                ¡Bienvenidos a Minimarket Panchito!
              </Typography>
              <Typography variant="body1" style={{ marginTop: '10px', textAlign: 'center' }}>
                Aquí encontrarás dashboards de información sobre los reportes de ventas realizadas a cada proveedor. Nuestra misión es proporcionar datos precisos y útiles para la toma de decisiones.
              </Typography>
              <Grid container justifyContent="center" spacing={2} style={{ marginTop: '20px' }}>
                <Grid item xs={12} md={4}>
                  <Paper style={{ padding: '20px', textAlign: 'center', border: '2px solid #00008B', borderRadius: '10px', backgroundColor: '#FFF700' }}>
                    <Typography variant="h5">Dashboard de Ventas Anuales</Typography>
                    <Typography variant="body1">
                      Visualiza el resumen de ventas realizadas cada año.
                    </Typography>
                    <Button variant="contained" color="primary" style={{ marginTop: '10px' }} onClick={() => handleSectionChange('analisis')}>
                      Ver Dashboard
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          )}
          {activeSection === 'nosotros' && (
            <div>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Paper style={{ padding: '20px', textAlign: 'center', border: '2px solid #00008B', borderRadius: '10px', backgroundColor: '#FFF700' }}>
                    <Typography variant="h4" style={{ color: '#00008B', marginBottom: '20px' }}>MISIÓN</Typography>
                    <Typography variant="body1">
                      Nos dedicamos a la distribución y comercialización de una amplia variedad de abarrotes de alta calidad, que reflejan nuestra pasión por la satisfacción de nuestro país. Nuestra operación está respaldada por la certificación HACCP de seguridad alimentaria, garantizando que nuestros productos cumplen con los más altos estándares de calidad y seguridad para nuestros clientes.
                    </Typography>
                    <img src={`${process.env.PUBLIC_URL}/imagen/mision.jpg`} alt="Misión" style={{ width: '100%', borderRadius: '10px', marginTop: '20px' }} />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper style={{ padding: '20px', textAlign: 'center', border: '2px solid #00008B', borderRadius: '10px', backgroundColor: '#FFF700' }}>
                    <Typography variant="h4" style={{ color: '#00008B', marginBottom: '20px' }}>VISIÓN</Typography>
                    <Typography variant="body1">
                      Aspiramos a ser líderes en la industria de distribución de abarrotes, siendo la primera opción para nuestro público objetivo. Buscamos mantener vínculos duraderos con clientes y proveedores basados en la confianza y beneficio mutuo. Nuestra meta es enriquecer la vida de las familias peruanas con nuestros productos, contribuyendo al bienestar comunitario y desarrollo sostenible.
                    </Typography>
                    <img src={`${process.env.PUBLIC_URL}/imagen/vision.jpg`} alt="Visión" style={{ width: '100%', borderRadius: '10px', marginTop: '20px' }} />
                  </Paper>
                </Grid>
              </Grid>
            </div>
          )}
          {activeSection === 'contacto' && (
            <div>
              <h2>Contacto</h2>
              <Grid container spacing={2} style={{ marginTop: '20px' }}>
                <Grid item xs={12} md={6}>
                  <Paper style={{ padding: '20px', textAlign: 'center', border: '2px solid #00008B', borderRadius: '10px', backgroundColor: '#FFF700' }}>
                    <Typography variant="h5">Gonzalo Chuecas</Typography>
                    <Typography variant="body1">
                      Desarrollador
                    </Typography>
                    <Typography variant="body1">
                      Correo: gonzalo.chuecas@example.com
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper style={{ padding: '20px', textAlign: 'center', border: '2px solid #00008B', borderRadius: '10px', backgroundColor: '#FFF700' }}>
                    <Typography variant="h5">Milagro Arango</Typography>
                    <Typography variant="body1">
                      Desarrollador
                    </Typography>
                    <Typography variant="body1">
                      Correo: milagro.arango@example.com
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          )}
          {activeSection === 'analisis' && (
            <div>
              <h2>Análisis de Ventas</h2>
              <iframe
                title="Análisis de Ventas"
                src="https://app.powerbi.com/view?r=eyJrIjoiYzhmNTI0M2ItZmEwNi00NzhjLWE4OGQtNzk2ODE0MTM0ZDllIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
                style={{ width: '100%', height: '600px', border: 'none', borderRadius: '10px' }}
              ></iframe>
            </div>
          )}
        </Box>
      </Container>
      <Box mt={4} p={2} style={{ backgroundColor: '#00008B', color: '#FFFFFF', textAlign: 'center' }}>
        <Typography variant="body1">
          Desarrollado por Gonzalo Chuecas y Milagro Arango - 2023
        </Typography>
        <Typography variant="body1">
          Información de Contacto:
        </Typography>
        <Typography variant="body1">
          Gonzalo Chuecas: gonzalo.chuecas@example.com
        </Typography>
        <Typography variant="body1">
          Milagro Arango: milagro.arango@example.com
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MinimarketDashboard />
  </React.StrictMode>
);

// Medición de performance
reportWebVitals();
