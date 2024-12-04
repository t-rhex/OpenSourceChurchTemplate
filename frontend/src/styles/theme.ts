export const theme = {
  spacing: {
    xs: '0.5rem',    // 8px
    sm: '1rem',      // 16px
    md: '1.5rem',    // 24px
    lg: '2rem',      // 32px
    xl: '3rem',      // 48px
    '2xl': '4rem',   // 64px
  },
  colors: {
    primary: {
      DEFAULT: '#16a34a',  // green-600
      light: '#22c55e',    // green-500
      dark: '#15803d',     // green-700
    },
    text: {
      primary: '#1f2937',  // gray-800
      secondary: '#4b5563', // gray-600
      light: '#9ca3af',    // gray-400
    },
    background: {
      primary: '#ffffff',
      secondary: '#f9fafb', // gray-50
      dark: '#111827',     // gray-900
    }
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
    },
  },
  animation: {
    transition: {
      fast: '150ms',
      base: '300ms',
      slow: '500ms',
    },
    scale: {
      hover: 1.02,
    },
  },
  borderRadius: {
    sm: '0.375rem',  // 6px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  },
}
