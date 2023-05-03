import * as React from 'react';
import PropTypes from 'prop-types';
import { Canvas, useFrame } from '@react-three/fiber'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import WeaponBase from '../../weapons/components/weaponsBase'

function MainFeaturedPost(props) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: '#0E0C0A',
        borderImage: 'linear-gradient(to right, #0083c5 0%, #0083c5 33%, #ec4a26 66%, #ec4a26 100%)',
        borderImageSlice: '1;', // note the quotes and the semi-colon.
        // color: '#0E0C0A',
        mb: 4,
      }}
    >
        <Typography variant="h1" color="common.white" component="h2">
            {props.title}
        </Typography>;
      <Grid style={{ height: "50vh" }}>
        
        <Canvas dpr={[4, 8]} camera={{ fov: 45 }}>
            <WeaponBase glbFile="glb/Scar.glb"></WeaponBase>
        </Canvas>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;