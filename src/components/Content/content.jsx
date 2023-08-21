import * as React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material'
import gambar from '../../assets/Picture/taufiiq.JPG'
import {
    LinkedIn as LinkedInIcon,
    Instagram as InstagramIcon,
    GitHub as GitHubIcon,
} from '@mui/icons-material';
import './movingText.css';

export default function Content() {

    
    return (
        <Box sx={{ flexGrow: 1, mt: '250px', px: '40px', backgroundColor: '#E0E5EC'}}>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={6} >
                    <Box sx={{ textAlign: 'center'}}>
                        <Typography variant='h4' sx={{ mb: '20px' }} className="moving-text">
                            Taufiiqulhakim Jubair
                        </Typography>
                        <Typography variant='body1' sx={{ mb: '2px' }}>
                            Saya seorang Web Develpoment yang ingin mengembangkan Website Portfolio
                            <br />
                            dengan menggunakan React.js dan Material ui
                        </Typography>
                        <Link href="https://www.linkedin.com/in/taufiiqulhakim-jubair" target="_blank" rel="noopener">
                            <LinkedInIcon sx={{ fontSize: '25px',color: 'black' }} />
                        </Link>
                        <Link href="https://www.instagram.com/taufiiqulhkm" target="_blank" rel="noopener">
                            <InstagramIcon sx={{ fontSize: '25px', color: 'black' }} />
                        </Link>
                        <Link href="https://github.com/taufiiqulhkm" target="_blank" rel="noopener">
                            <GitHubIcon sx={{ fontSize: '25px', color: 'black' }} />
                        </Link>
                        
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <div
                            style={{
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img src={gambar} alt="Foto Saya" style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}