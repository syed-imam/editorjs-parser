export default (data, config) => {
  return `<amp-iframe
            layout=\"responsive\"
            width=\"${data.width}\"
            height=\"${data.height}\"
            src=\"${data.embed}\"
            sandbox=\"allow-scripts allow-same-origin\"></amp-iframe>
          <em>${data.caption}</em>`
}
