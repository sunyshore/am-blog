import * as React from 'react'
import { Link } from 'react-router'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'

const sections = [
  { title: 'About', url: '/about' },
  { title: 'Eurovision', url: '/eurovision' },
  { title: 'Music', url: '/music' },
  { title: 'Contact', url: '/contact' },
]

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

const Blog = () => {
  const navigate = useNavigate()
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header
          title="| music |"
          sections={sections}
          url="/"
          navigate={navigate}
        />
      </Container>
    </ThemeProvider>
  )
}
export default Blog
