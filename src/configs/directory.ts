/**
 * This file holds commonly used direcotry alias
 */
import path from 'path'

const selfishPath: string = path.join(path.dirname(__dirname), '..')

export const Dirs = {
  /**
   * root hold workspace folder, directory that containt package.json
   */
  base: selfishPath,

  /**
   * View directory
   */
  views: path.join(selfishPath, 'view'),

  /**
   * Directory to store log
   */
  logs: path.join(selfishPath, 'log'),

  /**
   * Statics file parent to serve
   */
  static: path.join(selfishPath, 'static'),

  /**
   * Uploaded media storage
   */
  upload: path.join(selfishPath, 'uploaded')
}
