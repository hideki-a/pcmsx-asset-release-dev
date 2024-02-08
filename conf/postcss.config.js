module.exports = ctx => ({
  map: 'absolute',
  parser: ctx.options.parser,
  plugins: {
    "postcss-sort-media-queries": { sort: "mobile-first" },
    autoprefixer: {},
    "cssnano": { preset: 'default' },
  }
});
