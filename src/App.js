// import * as THREE from 'three'
import React, { Suspense, useState } from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import { Box } from '@mui/material';

import Header from './components/header';



export default function App() {
  const styles = {
    rootContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      width: '100%',
      height: '100vh',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      zIndex: 1, // Ensures the main container is above other elements on the page
    },
    header: {
      position: 'relative',
      width: '100%',
      minheight: '10%',
    },
    contentContainer: {
      position: 'relative',
      height: '90%',
      width: '100%',
      overflowY: 'auto', // Enables scrolling for content that exceeds container height
    },
    footer: {
      position: 'relative',
      width: '100%',
      minheight: '10%',
    },
  };

  return (
    <BrowserRouter>
      <Box sx={styles.rootContainer}>
        <Box sx={styles.header}>
          <Header/>
        </Box>
        <Box sx={styles.contentContainer}>
          <AppRoutes />
        </Box>
        <Box sx={styles.footer}>
          KEKRON
        </Box>    
      </Box>
    </BrowserRouter>
  );
}