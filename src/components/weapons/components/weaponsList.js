import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import weaponsList from '../../mock';
import WeaponsType from './weaponType';
import { getWeapons } from '../../../service/weapons';

function WeaponsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async()=>{
      let x = await getWeapons();
      console.log(x,"asdf")
      setData(x);
    }
  }, []);

  // group weapons by type
  const groupedData = data.reduce((acc, curr) => {
    if (acc[curr.type]) {
      acc[curr.type].push(curr);
    } else {
      acc[curr.type] = [curr];
    }
    return acc;
  }, {});
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={{ flexDirection: 'row' }}>
        {Object.keys(groupedData).map((type) => (
          <Grid item xs={12} md={6} lg={4} key={type}>
            <WeaponsType key={type} type={type} data={groupedData[type]} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WeaponsList;
