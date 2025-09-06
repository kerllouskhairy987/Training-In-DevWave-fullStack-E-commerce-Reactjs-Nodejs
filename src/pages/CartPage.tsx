import CartItems from '@/components/cart/CartItems'
import CheckoutForm from '@/components/cart/CheckoutForm'

const CartPage = () => {
  return (
    <div className=" bg-black">
    <div className="container mx-auto px-4 bg-black grid grid-cols-1 lg:grid-cols-2 gap-10 section-gap py-5">
        <CartItems />
        <CheckoutForm />
    </div>
    </div>
  )
}

export default CartPage