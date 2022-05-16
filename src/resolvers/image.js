export default (data, config) => {
  return `<div>\n <img src=\"${data.file.url}\" alt=\"\"/>\n <em>${data.caption}</em>\n</div>\n`
}
