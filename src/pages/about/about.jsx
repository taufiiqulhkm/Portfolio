import React from 'react'
import {Box, Grid, Typography} from '@mui/material';
import gambar from '../../assets/Picture/taufiiq.JPG'
import { Timeline, TimelineItem, TimelineSeparator,TimelineConnector,TimelineContent,TimelineDot, } from '@mui/lab';

const About = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: '100px', px: '40px'}}>
    <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6} >
            <Box sx={{ textAlign: 'center'}}>
                <Typography variant='h4' sx={{ mb: '20px' }} className="moving-text">
                    Taufiiqulhakim Jubair
                </Typography>
                <Typography variant='body1' sx={{ mb: '2px' }}>
                    Saya seorang lulusan S1 Teknik Elektro di Universitas Singaperbangsa Karawang pada tahun 2022
                    setelah lulus saya mengikuti kegiatan bootcamp java programing di indivara group pada tahun 2022,
                    kemudian saya di hire untuk mengikuti kegitan magang di indivara group pada tahun 2023
                </Typography>  
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
    <Box>
      <Typography sx={{ textAlign: 'center', mt: '20px'}}>
        Timeline
      </Typography>
      <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          1999 
          <br/>
          saya lahir
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          2006
          <br/>
          saya masuk sekolah dasar
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          2012
          <br/>
          saya masuk sekolah menengah pertama
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          2006
          <br/>
          saya masuk sekolah dasar
        </TimelineContent>
      </TimelineItem>
    </Timeline>

    </Box>
</Box>



  )
}

export default About