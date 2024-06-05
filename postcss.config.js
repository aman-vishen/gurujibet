module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    test: /\.(sass|less|css)$/,
    use: ['style-loader', 'css-loader', 'less-loader']
  },
}
