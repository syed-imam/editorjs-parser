export default (data, config) => {
  return `<amp-iframe
          layout=\"responsive\"
          width=\"100\"
          height=\"100\"
          class=\"${config.embed.form.class}\"
          src=\"${data.embed}\"
          sandbox=\"allow-scripts allow-same-origin\">
            <amp-img placeholder
              src=\"/loading-animation.gif\"
              height=\"64\"
              width=\"64\"
              layout=\"fixed\"></amp-img>
        </amp-iframe>
        <em>${data.caption}</em>`
}