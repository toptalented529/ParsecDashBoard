import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Mentor } from '@/interfaces/mentor'
import { Button } from '@mui/material'

interface Props {
  item: Mentor
}

const MentorCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 5,

      }}
    >
      <Box
        sx={{
          backgroundColor: '#d9d9d9',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
          },
          minHeight: 450,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            height: 200,
            mb: 2,
          }}
        >
          <Image src={item.photo as string} width={570} height={427} alt={'Mentor ' + item.id} />
        </Box>
        <Box sx={{ mb: 2, p: 2, justifyContent: "center", alignItems: "center" }}>
          <Typography component="h2" variant="h4" sx={{ fontSize: '1.4rem' }}>
            {item.name}
          </Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary' }} variant="subtitle1">
            {item.description}
          </Typography>
          <Box sx={{ '& img': { height: 26 } }}>
            <Button sx={{ border: "1px", borderStyle: "solid", borderRadius: "50px" }} onClick={() => { }}>View more</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default MentorCardItem
