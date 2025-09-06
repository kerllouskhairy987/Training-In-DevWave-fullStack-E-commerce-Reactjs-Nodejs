import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";


const CheckoutForm = () => {
    const total = true;
    const cart = [
        {
            id: 1,
            name: "Product 1",
            image: "https://via.placeholder.com/150",
            price: 19.99,
            quantity: 2
        }
    ];

    return (
        total && cart && cart.length > 0 ? (
            <div className='grid gap-6 border rounded-md p-4'>
                <h2 className='text-2xl font-semibold'>Checkout</h2>
                <form>
                    <div className='grid gap-4'>
                        <div className='grid gap-1'>
                            <Label htmlFor='phone' className='text-accent-foreground/50'>
                                Phone
                            </Label>
                            <Input
                                id='phone'
                                placeholder='Enter your phone'
                                type='text'
                                name='phone'
                            />
                        </div>
                        <div className='grid gap-1'>
                            <Label htmlFor='address' className='text-accent-foreground/50'>
                                Street address
                            </Label>
                            <Textarea
                                id='address'
                                placeholder='Enter your address'
                                name='address'
                                className='resize-none'
                            />
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div className='grid gap-1'>
                                <Label htmlFor='postal-code' className='text-accent-foreground/50'>
                                    Postal code
                                </Label>
                                <Input
                                    type='text'
                                    id='postal-code'
                                    placeholder='Enter postal code'
                                    name='postal-code'
                                />
                            </div>
                            <div className='grid gap-1'>
                                <Label htmlFor='city' className='text-accent-foreground/50'>
                                    City
                                </Label>
                                <Input
                                    type='text'
                                    id='city'
                                    placeholder='Enter your City'
                                    name='city'
                                />
                            </div>
                            <div className='grid gap-1'>
                                <Label htmlFor='country' className='text-accent-foreground/50'>
                                    Country
                                </Label>
                                <Input
                                    type='text'
                                    id='country'
                                    placeholder='Enter your country'
                                    name='country'
                                />
                            </div>
                        </div>
                        <Button className='h-10'>Pay total 8723</Button>
                    </div>
                </form>
            </div>
        ) : null
    );
}

export default CheckoutForm