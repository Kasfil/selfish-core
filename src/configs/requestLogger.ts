/**
 * Request logger handler
 *
 * This file generate a name for log file and create instance of rfs library.
 */

import { createStream } from 'rotating-file-stream'
import { Dirs } from 'configs/directory'
import Path from 'path'

// add zero pad to single number
const zeroPad = (num: number): string => (num > 9 ? '' : '0') + num

// Generate log file name
const logNameGen = (time: number | Date, index: number | undefined): string => {
  // if no time is provided retun name as request.log
  if (!time) return 'request.log'

  // force format to Date
  time = typeof time === 'number' ? new Date(time) : time

  // File name describe it's year, month, day and index
  const year = time.getFullYear()
  const month = zeroPad(time.getMonth() + 1)
  const day = zeroPad(time.getDate())

  return `${year}${month}${day}-${index}-req.log`
}

export const LogStream = createStream(logNameGen, {
  size: '15M',
  interval: '8h',
  path: Path.join(Dirs.logs, 'request'),
  compress: 'gzip'
})
