import React, { createContext, useContext, useEffect, useState } from 'react'

// Theme options
type Theme = 'dark' | 'light' | 'system'

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'dark' | 'light'
}

// Create context with default values
const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: 'system',
  setTheme: () => null,
  resolvedTheme: 'light',
})

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'coaching724-theme',
  ...props
}: ThemeProviderProps) {
  // Get initial theme from localStorage or use default
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem(storageKey) as Theme | null
      if (storedTheme) {
        return storedTheme
      }
    }
    return defaultTheme
  })
  
  // Track the actually applied theme (dark or light)
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('light')

  // Apply the theme to the HTML element
  const applyTheme = (newTheme: 'dark' | 'light') => {
    const root = window.document.documentElement
    
    // Remove both theme classes
    root.classList.remove('dark', 'light')
    
    // Add the new theme class
    root.classList.add(newTheme)
    
    // Update resolved theme state
    setResolvedTheme(newTheme)
  }
  
  // Watch for theme changes
  useEffect(() => {
    const root = window.document.documentElement
    
    if (theme === 'system') {
      // Check system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      
      applyTheme(systemTheme)
    } else {
      applyTheme(theme)
    }
    
    // Set a data attribute for debugging
    root.setAttribute('data-theme', theme)
  }, [theme])
  
  // Listen for system theme changes
  useEffect(() => {
    if (theme !== 'system') return
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    // Update theme when system preference changes
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? 'dark' : 'light'
      applyTheme(newTheme)
    }
    
    // Add listener
    mediaQuery.addEventListener('change', handleChange)
    
    // Cleanup
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])
  
  // Save theme to localStorage when it changes
  const value = {
    theme,
    resolvedTheme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme)
      setTheme(newTheme)
    },
  }
  
  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

// Hook for using the theme
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  
  return context
}
