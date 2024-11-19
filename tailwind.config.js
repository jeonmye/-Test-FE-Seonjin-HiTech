/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem'
      },

      screens: {
        sm: { min: '360px' },
        md: { min: '768px' },
        lg: { min: '1280px' }
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
        body: ['16px', { fontWeight: '400', lineHeight: '24px' }],
        'body-bold': ['16px', { fontWeight: '500', lineHeight: '20px' }],
        caption1: ['14px', { fontWeight: '400', lineHeight: '20px' }],
        'caption1-bold': ['14px', { fontWeight: '500', lineHeight: '20px' }],
        caption2: ['12px', { fontWeight: '400', lineHeight: '18px' }],
        'caption2-bold': ['12px', { fontWeight: '600', lineHeight: '18px' }],
        caption3: ['11px', { fontWeight: '400', lineHeight: '14px' }],
        head: ['24px', { fontWeight: '500', lineHeight: '33px' }],
        'head-bold': ['24px', { fontWeight: '700', lineHeight: '33px' }],
        title: ['21px', { fontWeight: '500', lineHeight: '30px' }],
        'title-bold': ['21px', { fontWeight: '600', lineHeight: '30px' }],
        'title-extra-bold': ['21px', { fontWeight: '700', lineHeight: '30px' }],
        subTitle: ['18px', { fontWeight: '500', lineHeight: '26px' }],
        'subTitle-bold': ['18px', { fontWeight: '600', lineHeight: '26px' }],
        'subTitle-extra-bold': [
          '18px',
          { fontWeight: '700', lineHeight: '26px' }
        ]
      }
    }
  },
  variants: {
    backgroundColor: ['hover', 'focus']
  },
  plugins: []
}
