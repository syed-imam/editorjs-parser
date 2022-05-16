export default (data, config) => {
  return `<div class=\"${config.video.class}\" data-caption=\"\" data-isLive=\"${data.isLive}\" data-src=\"${data.url}\"></div>`
}
