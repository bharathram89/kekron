import React, { useState } from 'react';
import { Box, Card, Typography } from '@mui/material';
import WeaponsBase from './weaponsBase';
import { Canvas } from '@react-three/fiber';
import ReactPaginate from 'react-paginate';
import './weapons.css'
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

  const handleWeaponClick = (item) => () => {
    console.log('Clicked!', item.id);
  };
  return (
    <Box key={type} sx={{ mb: 4 }}>
      <Typography className='main-heading' SSvariant="h4" gutterBottom color="aqua">
        {type.toString().toUpperCase()}
      </Typography>
      {getWeaponsForPage().map((item) => (
        <Box key={item.id} sx={{ m: 1 }} className='card-box'>
          <Card sx={{ p: 2 , backgroundColor: '#000000 !important' }} className='main-section'>
            <Typography onClick={handleWeaponClick(item)} gutterBottom color="aqua" className='in-heading'>
              {item.name.toString().toUpperCase()}
            </Typography>
            <Canvas >
              <WeaponsBase glbFile={'glb/' + item.modelUrl + '.glb'} />
            </Canvas>
          </Card>
        </Box>
      ))}
      <ReactPaginate
        breakClassName={'item break-me '}
        breakLabel={'...'}
        disabledClassName={'disabled-page'}
        nextClassName={"item next "}
        pageClassName={'item pagination-page '}
        previousClassName={"item previous"}
        pageCount={Math.ceil(data.length / itemsPerPage)}
        nextLabel=">"
        previousLabel="<"
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'item active'}
      />
    </Box>
  );
}

export default WeaponsType;
