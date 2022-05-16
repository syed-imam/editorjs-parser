export default (data, config) => {
  return `
    <script src=\"https://launcher.spot.im/spot/${data.org_id}\" data-spotim-module=\"spotim-launcher\" data-live-blog=\"true\" 
      data-live-event-code=\"${data.id}\" data-enable-live-blog-replies=\"false\"></script>`
}
