export default (data, config) => {
  return `<amp-iframe layout=\"responsive\"
            width=\"100\"
            height=\"100\"
            src=\"https://longisland.news12.curds.io/poll?id=${data.id}\"
            sandbox=\"allow-scripts allow-same-origin\">
           <amp-img placeholder
              src=\"/loading-animation.gif\"
              height=\"64\"
              width=\"64\"
              layout=\"fixed\"></amp-img>
        </amp-iframe>`

}
