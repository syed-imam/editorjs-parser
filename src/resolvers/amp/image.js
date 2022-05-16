export default (data, config) => {
  return `<amp-img width=\"600\" height=\"338\" layout=\"responsive\" src=\"${data.file.url}\" alt=\"\"></amp-img>
          <em>${data.caption}</em>`
}
