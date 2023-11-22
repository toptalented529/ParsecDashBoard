import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme, styled } from '@mui/material/styles'
import { Card, IconButton, useMediaQuery } from '@mui/material'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'

import { data } from './popular-course.data'
import { CourseCardItem } from '@/components/course'
import Image from 'next/image'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: { xs: '-70px !important', md: '-28px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: 'left',
    '& li': {
      marginRight: theme.spacing(2),
      '&.slick-active>div': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}))

const HomePopularCourse: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
  }

  return (
    <Box
      id="popular-course"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: 14,
        backgroundImage: 'url("/images/background2.png")',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>


          <Grid item xs={12} md={6}>
            <img src="images/img_ecosistema_universo-min.png" style={{ width: "30vw" }}></img>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                width: { xs: '100%', md: '90%' },
                display: 'flex',
                alignItems: 'start',
                justifyContent: { xs: 'center', md: 'center' },
                flexDirection: "column",
                marginLeft: { xs: "20px", md: "30px" }
              }}
            >
              <Typography variant="h1" sx={{ mt: { xs: 0, md: -5 }, fontSize: { xs: 30, md: 48 } }} color={"primary"}>
                Ecosistema Universo
              </Typography>

              <Typography sx={{ mt: { xs: 0, md: 5 }, fontSize: { xs: 20, md: 32 }, color: "white" }}>
                Provee liquidez e invierte tus tokens de liquidez en las granjas de rentabilidad
              </Typography>


              <Typography sx={{ mt: { xs: 0, md: 5 }, fontSize: { xs: 15, md: 20 }, color: "#d9d9d9" }}>
                Utiliza liquidez, pooles granjas
              </Typography>
            </Box>
          </Grid>
        </Grid>

      </Container>

      <Box sx={{ display: "flex", justifyContent: " center", alignItems: "center", marginTop: "60px" }}>
        <Image src="/images/Vector-min.png" width={77} height={78} alt="Hero img" />
      </Box>
    </Box>
  )
}

export default HomePopularCourse
