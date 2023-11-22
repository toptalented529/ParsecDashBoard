import { PaletteOptions } from '@mui/material'
import { grey } from '@mui/material/colors'

const paletteDark: PaletteOptions = {
  mode: 'dark',
  background: {
    default: grey[900],
    paper: '#222128',
  },
  text: {
    primary: grey[100],
    secondary:'#d9d9d9',
    disabled: grey[300],
  },
}

export default paletteDark
