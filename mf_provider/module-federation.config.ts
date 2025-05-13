import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin'

export default createModuleFederationConfig({
  name: 'mf_provider',
  exposes: {
    '.': './src/components/ProviderComponent.tsx',
  },
  filename: 'remoteEntry.js',
  // getPublicPath: `function() {return "https:" + "/resource/app/"}`,
  dts: false,
  manifest: false,
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})
