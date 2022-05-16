export default (data, config) => {
  return `<blockquote class=\"${config.quote.class}\">\n  <p>${data.text}</p>\n  <footer>${data.caption}</footer>\n</blockquote>\n`
}
