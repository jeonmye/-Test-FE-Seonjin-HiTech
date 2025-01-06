/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans KR"', 'sans-serif']
      },
      backgroundImage: {
        about01: "url('/images/about/about_01.png')",
        about02: "url('/images/about/about_02.png')",
        about03: "url('/images/about/about_03.png')",
        about04: "url('/images/about/about_04.jpg')"
      },

      keyframes: {
        reveal: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        zoomIn: {
          '0%': {
            transform: 'scale(1)'
          },
          '100%': {
            transform: 'scale(1.2)'
          }
        }
      },
      animation: {
        reveal: 'reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        zoomIn: 'zoomIn 4s ease-in-out forwards'
      },
      screens: {
        sm: { min: '361px' },
        md: { min: '769px' },
        lg: { min: '1025px' }
      },
      colors: {
        gray100: '#E8EBED',
        gray200: '#C9CDD2',
        gray300: '#9FA4AA',
        gray400: '#72787F',
        gray500: '#464C53',
        gray600: '#26282B'
      },
      fontSize: {
        bodyXS: ['12px', { fontWeight: '400', lineHeight: '20px' }],
        'bodyXS-bold': ['12px', { fontWeight: '500', lineHeight: '20px' }],
        bodyS: ['14px', { fontWeight: '400', lineHeight: '26px' }],
        'bodyS-bold': ['14px', { fontWeight: '500', lineHeight: '26px' }],
        'bodyS-extra-bold': ['14px', { fontWeight: '700', lineHeight: '26px' }],
        bodyM: ['16px', { fontWeight: '400', lineHeight: '30px' }],
        'bodyM-bold': ['16px', { fontWeight: '500', lineHeight: '30px' }],
        bodyL: ['18px', { fontWeight: '400', lineHeight: '36px' }],
        'bodyL-bold': ['18px', { fontWeight: '500', lineHeight: '36px' }],
        bodyXL: ['22px', { fontWeight: '400', lineHeight: '34px' }],
        'bodyXL-bold': ['22px', { fontWeight: '500', lineHeight: '40px' }],
        headM: ['28px', { fontWeight: '500', lineHeight: '33px' }],
        'headM-bold': ['28px', { fontWeight: '700', lineHeight: '40px' }],
        headL: ['38px', { fontWeight: '500', lineHeight: '33px' }],
        'headL-bold': ['38px', { fontWeight: '700', lineHeight: '40px' }],
        headXL: ['44px', { fontWeight: '500', lineHeight: '45px' }],
        'headXL-bold': ['44px', { fontWeight: '700', lineHeight: '45px' }],
        head2XL: ['54px', { fontWeight: '500', lineHeight: '50px' }],
        'head2XL-bold': ['54px', { fontWeight: '700', lineHeight: '50px' }],
        title: ['21px', { fontWeight: '500', lineHeight: '34px' }],
        'title-bold': ['21px', { fontWeight: '600', lineHeight: '34px' }],
        'title-extra-bold': ['21px', { fontWeight: '700', lineHeight: '30px' }],
        subTitle: ['18px', { fontWeight: '500', lineHeight: '30px' }],
        'subTitle-bold': ['18px', { fontWeight: '600', lineHeight: '30px' }],
        'subTitle-extra-bold': [
          '18px',
          { fontWeight: '700', lineHeight: '30px' }
        ]
      }
    }
  },
  variants: {
    backgroundColor: ['hover', 'focus']
  },
  plugins: []
}
