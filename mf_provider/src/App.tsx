import './App.css'
import styles from './index.module.css'
import Provider from './components/ProviderComponent'

const App = () => {
  return (
    <div className={`content ${styles.test}`}>
      <Provider />
    </div>
  )
}

export default App
