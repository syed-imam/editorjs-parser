import { format } from 'prettier'

export default (str) => format(str, { parser: 'html' })
