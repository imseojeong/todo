import { Global } from '@emotion/react'
import { GlobalStyle } from './globalStyle'

const App: React.FC = () => {
  return (
    <div>
      <Global styles={GlobalStyle} />
    </div>
  )
}

export default App
