import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import WeaponsBase from './weaponsBase';
import { Canvas } from '@react-three/fiber';
import './weapontype.css';
import Pagination from '@mui/material/Pagination';

function WeaponsType({ type, data }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;

  const getWeaponsForPage = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const handlePageChange = (evt, value) => {
    setCurrentPage(value - 1);
  };

  return (
    <Box key={type} sx={{ mb: 4 }}>
      <Typography className='main-heading' SSvariant="h4" gutterBottom color="aqua">
        {type.toString().toUpperCase()}
      </Typography>
      <div className='main-weapon-card'>
      {getWeaponsForPage().map((item) => (
        <Box key={item.id} sx={{ m: 1 }} className='card-box'>
          <Paper sx={{ p: 2, backgroundColor: '#000000 !important' }} className='main-section'>
            <Typography gutterBottom color="aqua" className='in-heading'>
              {item.name.toString().toUpperCase()}
            </Typography>
            <Canvas className='weapon'>
              <WeaponsBase glbFile={'glb/' + item.modelUrl + '.glb'} />
            </Canvas>
          </Paper>
        </Box>
      ))}
      </div>
      <div className='pagination-section'>
      {data.length > 2 && 
        <Pagination 
          count={2} 
          defaultPage={1} 
          onChange={handlePageChange}
          siblingCount={0} />
        }
    </div>
    </Box>
  );
}

export default WeaponsType;