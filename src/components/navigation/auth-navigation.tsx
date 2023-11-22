import React, { FC } from 'react'
import { useRouter } from 'next/router';

import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {

  const router = useRouter()
  return (
    <Box sx={{ '& button:first-child': { mr: 1 } }}>
      <StyledButton onClick={() => {
        // router.push("https://parsec.com")
        window.open("https://app.parsecswap.io", '_blank');

      }} color='parsec' disableHoverEffect={true} variant="outlined">
        Launch App
      </StyledButton>
    </Box>
  )
}

export default AuthNavigation
