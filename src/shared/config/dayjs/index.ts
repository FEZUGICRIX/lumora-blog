import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/en'
import 'dayjs/locale/ru'

dayjs.extend(localizedFormat)

export { dayjs }
export { useFormattedDate } from './useFormattedDate'
