import Typography from 'typography'

import 'normalize.css'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Barlow',
      styles: ['400', '700'],
    },
    {
      name: 'Karla',
      styles: ['400', '700']
    }
  ],
  headerFontFamily: ['Barlow', 'sans-serif'],
  bodyFontFamily: ['Barlow', 'sans-serif'],
})

export default typography
