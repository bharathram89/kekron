import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import WeaponsBase from './weaponsBase';
import { Canvas } from '@react-three/fiber';
import ReactPaginate from 'react-paginate';

function WeaponsType({ type, data }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;

  // get the weapons for the current page
  const getWeaponsForPage = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  // handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <Box key={type} sx={{ mb: 4 }}>
      <Typography variant="h2" gutterBottom>
        {type}
      </Typography>
      {getWeaponsForPage().map((item) => (
        <Box key={item.id} sx={{ mb: 2 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              {item.name}
            </Typography>
            <Canvas>
              <WeaponsBase glbFile={'glb/' + item.modelUrl + '.glb'} />
            </Canvas>
          </Paper>
        </Box>
      ))}
      <ReactPaginate
        pageCount={Math.ceil(data.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </Box>
  );
}

export default WeaponsType;
