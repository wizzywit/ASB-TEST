import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  primaryColor: '#3cb251',
  white: '#ffffff',
  navbarColor: '#f8f8f8',
  inputFieldColor: '#F3F7F9',
  inputFieldBorder: '#D8D8D8',
  dangerColor: '#EB5757',
  primaryFont: 'Google Sans',
  secondaryFont: 'Signika',
  font12: '12px',
  font14: '14px',
  secondaryTextColor: '#8A8A8A',
  primaryTextColor: '#333333'
}
export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
