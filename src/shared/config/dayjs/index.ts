import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import utc from 'dayjs/plugin/utc'
import 'dayjs/locale/en'
import 'dayjs/locale/ru'

dayjs.extend(localizedFormat)
dayjs.extend(utc)

export { dayjs }
export { useFormattedDate } from './use-formatted-date'
