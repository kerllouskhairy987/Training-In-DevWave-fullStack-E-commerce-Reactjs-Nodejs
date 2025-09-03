
import './App.css'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { ModeToggle } from './components/mode-toggle'
import  Products  from './components/products/Product'
import  ProductDetails  from './components/ProductDetails/ProductDetails'

function App() {

  return (
    <>
      {/* <div>
        <ModeToggle />
      </div>
      <Button>Button Test</Button>
      <Input /> */}
    <Products />
    {/* <ProductDetails/> */}
    </>
  )
}

export default App
