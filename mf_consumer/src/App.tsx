import { memo, useEffect, useState } from 'react'
import './App.css'
import loadable from '@loadable/component'
import { importRemote } from '@module-federation/utilities'

const App = () => {
  const [Provider, setComponent] = useState<any>(null)

  useEffect(() => {
    importRemote({
      url: 'http://localhost:3001',
      scope: 'mf_provider',
      module: '.',
      bustRemoteEntryCache: false,
    }).then((RemoteModule: any) => {
      console.log('🚀 ~ useEffect ~ RemoteModule:', RemoteModule)
      setComponent(loadable(async () => memo(RemoteModule.default)))
    })
  }, [])

  return <div className="content">{Provider && <Provider />}</div>
}

export default App
