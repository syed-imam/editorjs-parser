export default (data, config) => {
  return `
    <div class=\"${config.embed.class}\" style=\"width: ${data.width}px;\">
      <embed class=\"${config.embed.class}\" height=\"${data.height}\"
        width=\"${data.width}\" src=\"${data.embed}\">
      <em>${data.caption}</em>
    </div>`
}
