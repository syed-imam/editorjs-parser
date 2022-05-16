export default (data, config) => {
  return `
    <div class=\"${config.embed.class}\">
      <embed class=\"${config.embed.carousel.class}\" src=\"${data.embed}\">  
      <em>${data.caption}</em>
    </div>`
}
