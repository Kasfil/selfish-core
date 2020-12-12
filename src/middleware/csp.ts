import { Request, Response, NextFunction } from 'express'
import { Configs } from 'configs/configs'

const CSPContent = Configs.csp.join('; ')

export default function (_: Request, res: Response, next: NextFunction) {
  res.set('Content-Security-Policy', CSPContent)
  next()
}
