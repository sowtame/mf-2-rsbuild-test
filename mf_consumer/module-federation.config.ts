import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin'

export default createModuleFederationConfig({
  name: 'mf_consumer',
  remotes: {
    provider: 'mf_provider@http://localhost:3001/remoteEntry.js',
  },
  dts: false,
  manifest: false,
  shareStrategy: 'loaded-first',
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})
