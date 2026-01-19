export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        link: 'var(--link)',
        'link-hover': 'var(--link-hover)',
        'button-bg': 'var(--button-bg)',
      },
    },
  },
  plugins: [],
};
