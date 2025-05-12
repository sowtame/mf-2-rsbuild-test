import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin'

export default createModuleFederationConfig({
  name: 'mf_provider',
  exposes: {
    '.': './src/components/ProviderComponent.tsx',
  },
  getPublicPath: `function() {return "https:" + "/resource/app/"}`,
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})
