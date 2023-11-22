import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

interface Exp {
  label: string
  value: string
  src: string
}
interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> = [
  {
    label: 'TRADE VOLUME',
    src: "/images/trade.png",
    value: '14TK+',
  },
  {
    label: 'ALL TIME TRADES',
    src: "/images/graph.png",

    value: '153M+',
  },
  {
    label: 'INTEGRATIONS',
    src: "/images/integrations.png",

    value: '300+',
  },
  {
    label: 'COMMUNITY DELEGATES',
    src: "/images/community.png",
    value: '4400+',
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label, src } = item
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>

      <img src={src} alt="alt" style={{ width: "100px" }} />
      <Typography
        sx={{ color: 'white', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
      >
        {value}
      </Typography>
      <Typography color="white" variant="h5">
        {label}
      </Typography>
    </Box>
  )
}

const HomeHero: FC = () => {
  return (
    <Box id="hero" sx={{ backgroundImage: 'url("/images/main_background.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid item xs={12} md={7} sx={{ marginBottom: "20px" }}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 40, md: 72 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                    color: "white"
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: 'primary.main',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                    Parsec exchange{' '}
                  </Typography>

                  <br />
                  with Different Way
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '90%' } }}>
                <Typography sx={{ color: '#d9d9d9', lineHeight: 0.6 }}>
                  {
                    "intercambia tokens y gana dinero con Uniserso Defi"
                  }
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 } }}>
                <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="parsec" size="large" variant="contained">
                    Get Started
                  </StyledButton>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            {/* Sertificate badge */}
            <Box sx={{ lineHeight: 0 }}>
              <Image src="/images/ilustracion_header-min.png" width={775} height={787} alt="Hero img" />
            </Box>
          </Grid>
        </Grid>

        {/* Experience */}

        <Box sx={{ boxShadow: 2, py: 4, px: 7, border: '1px', borderStyle: "solid", borderImage: "linear-gradient(to bottom, rgba(128, 128, 128, 1), transparent) 1", borderRadius: "20px" }}>
          <Grid container spacing={1}>
            {exps.map((item) => (
              <Grid key={item.value} item xs={12} md={3}>
                <ExpItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeHero
