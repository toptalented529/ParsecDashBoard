import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface Props {
  title: string
}

const FooterSectionTitle: FC<Props> = ({ title }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mb: 3,
        gap: "5px"
      }}
    >
      <Typography component="p" variant="h5" sx={{ color: 'primary.contrastText', fontWeight: '700' }}>
        {title}
      </Typography>
    </Box>
  )
}

export default FooterSectionTitle
