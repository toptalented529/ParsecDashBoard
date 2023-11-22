import React, { FC } from 'react'
import { Box, Card, Grid, Typography } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {

  return (
<Box onClick={onClick} >
  <Grid container spacing={2}>
    <Grid item md={6}>
      <Card style={{ backgroundColor: 'transparent' }}>
        <img src="/images/logo.png" alt="image" />
      </Card>
    </Grid>
    <Grid item md={6} style ={{alignSelf:"center"}}>
      <Typography variant="h4" component="h2" style={{ fontWeight: 300, color: 'white' }}>
        Pasec<span>Swap</span>
      </Typography>
    </Grid>
  </Grid>
</Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
