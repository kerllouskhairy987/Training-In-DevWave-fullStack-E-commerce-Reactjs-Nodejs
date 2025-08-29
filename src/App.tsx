
import './App.css'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { ModeToggle } from './components/mode-toggle'

function App() {

  return (
    <>
      <div>
        <ModeToggle />
      </div>
      <Button>Button Test</Button>
      <Input />
    </>
  )
}

export default App
