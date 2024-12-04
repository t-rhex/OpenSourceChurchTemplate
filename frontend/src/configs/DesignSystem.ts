export const theme = {
  colors: {
    // Primary Colors
    darkMossGreen: {
      DEFAULT: '#4A5D23',
      light: '#5B7229',
      dark: '#3A4A1C',
    },
    pakistanGreen: {
      DEFAULT: '#2A4D14',
      light: '#375F1B',
      dark: '#1E3B0E',
    },
    earthYellow: {
      DEFAULT: '#E1B067',
      light: '#E9C288',
      dark: '#D99F46',
    },
    cornsilk: {
      DEFAULT: '#FFF8DC',
      light: '#FFFBEB',
      dark: '#FFF5CD',
    },
    // UI Colors
    background: {
      primary: '#1a1a1a',
      secondary: '#FFFFFF',
      tertiary: '#F5F5F5',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#4A5D23',
      muted: 'rgba(26, 26, 26, 0.7)',
    },
  },
  spacing: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      maxWidth: '80rem',
    },
    section: {
      padding: {
        y: {
          DEFAULT: '5rem',
          sm: '6rem',
          lg: '8rem',
        },
      },
    },
  },
  borderRadius: {
    sm: '0.375rem',
    DEFAULT: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '3rem',
    full: '9999px',
  },
  animation: {
    duration: {
      fast: '150ms',
      DEFAULT: '300ms',
      slow: '500ms',
    },
    timing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const components = {
  buttons: {
    primary: `
      px-6 py-3 
      bg-darkMossGreen text-white 
      rounded-full
      hover:bg-darkMossGreen/90
      transition-all duration-300
      border border-earthYellow/20 
      shadow-md hover:shadow-lg
    `,
    secondary: `
      px-6 py-3 
      bg-earthYellow text-darkMossGreen 
      rounded-full
      hover:bg-earthYellow/90
      transition-all duration-300
      border border-earthYellow 
      shadow-md hover:shadow-lg
    `,
    outline: `
      px-6 py-3 
      bg-transparent 
      text-white 
      rounded-full
      hover:bg-white/10
      transition-all duration-300
      border-2 border-white/30 
      shadow-md hover:shadow-lg
    `,
  },
  cards: {
    default: `
      bg-white/90 
      backdrop-blur-sm 
      rounded-3xl 
      overflow-hidden
      shadow-md hover:shadow-xl 
      transition-all duration-300
      border border-earthYellow/10 
      hover:border-earthYellow/20
    `,
    highlight: `
      bg-white/90 
      backdrop-blur-sm 
      rounded-3xl 
      overflow-hidden
      shadow-md hover:shadow-xl 
      transition-all duration-300
      border border-earthYellow/10 
      hover:border-earthYellow/20
    `,
  },
  sections: {
    default: `
      py-20 
      bg-cornsilk/30
    `,
    dark: `
      py-20 
      bg-darkMossGreen 
      text-white
    `,
  },
}; 