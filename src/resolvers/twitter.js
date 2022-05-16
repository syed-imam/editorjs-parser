export default (data, config) => {
  return `<blockquote class=\"${config.tweet.class}\">\n <a href=\"${data.url}\"></a>\n</blockquote>\n`
}
