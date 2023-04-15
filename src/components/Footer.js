import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#D5E3E3">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <div className="Footer-Logo">
        <img src={Logo} alt="logo" style={{ width: '70px', height: '70px' }} />
        <Typography className="Footer-Text" sx={{ fontSize: { lg: '20px', xs: '20px' } }} ml="3px" mt="1px">HealFit</Typography>
      </div>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="1px" textAlign="center" pb="40px">Made with ❤️ by DevKins</Typography>
  </Box>
);

export default Footer;
