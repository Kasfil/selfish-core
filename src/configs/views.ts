import * as Eta from 'eta'

import { Configs } from 'configs/configs'

const useCache = Configs.env === 'production'

const etaConfigs = Eta.getConfig({
  cache: useCache,
  parse: {
    exec: '#',
    interpolate: '',
    raw: '!'
  },
  rmWhitespace: true,
  tags: ['{{', '}}']
})

Eta.configure(etaConfigs)
const RenderEngine = Eta.renderFile

export default RenderEngine
