import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin'
import moduleFederationConfig from './module-federation.config'

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  source: {
    entry: {
      mf_provider: {
        import: './src/public-path.ts',
        html: false,
      },
      index: {
        import: './src/index',
      },
    },
  },
  server: {
    port: 3001,
  },
})
