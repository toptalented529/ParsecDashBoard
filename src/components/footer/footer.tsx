import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'
import { Girl } from '@mui/icons-material'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: '#141436', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>

              <Grid item md={12}>
                <Box sx={{ width: { xs: '100%', md: 360, display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", gap: "10px" }, mb: { xs: 3, md: 0 } }}>
                  <img src="/images/logo.png" alt="logo" />
                  <Typography variant="h4" component="h2" style={{ fontWeight: 300, color: 'white' }}>
                    Parsec
                  </Typography>
                </Box>
              </Grid>

              <Grid item md={12} sx={{ mt: 3 }}>
                <FooterNavigation />
              </Grid>

            </Grid>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography>info@parsecSwap.org</Typography>
            <FooterSocialLinks />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
