import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function useTheme() {
 let context = useContext(ThemeContext) // theme : 'dark'
 if (context === undefined) {
    new Error('Theme context should be used in ThemeContextProvider only')
 }

 return context;
}
