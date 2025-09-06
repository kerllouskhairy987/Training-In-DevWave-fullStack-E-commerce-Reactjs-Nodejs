/* eslint-disable @typescript-eslint/no-explicit-any */
import photo2 from '../../assets/5cc80a9ff9fcf40affa52f2a3e86ee3e879a6fe1.png'
import photo3 from '../../assets/cab539f5cc8b103f8019e86842eaf42547935781.png'
import photo4 from '../../assets/263e07897ddddc42823681e36d66cce284e8486d.png'
import { Star, Locate } from 'lucide-react'
import MultipleSelect from '../ui/SelectionButton'
import RatingBreakdown from '../ui/RatingProgress'
import ReviewCard from '../ui/ReviewCard'
import { getProductFeedback, getProductStats, getSingleProduct } from '../../Api\'s/products'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { useAddToCartMutation } from '@/app/features/shopping/shoppingSlice'
import { useAppSelector } from '@/app/hooks/hooks'
import type { RootState } from '@/app/store'
import SpinnerComponent from '../ui/Spinner'
import { useEffect } from 'react'
import { ErrorToast, successToast } from '@/notification'
import { Button } from '../ui/button'

export default function ProductDetails() {

  const { id } = useParams()

  const {
    data: singleProduct,
  } = useQuery({
    queryKey: ["singleProduct"],
    queryFn: () => getSingleProduct(String(id)),
    refetchOnMount: true
  });

  console.log("--/......", singleProduct)


  const {
    data: productStats
  } = useQuery({
    queryKey: ["productStats"],
    queryFn: () => getProductStats(id),
  });

  const {
    data: productfeedback
  } = useQuery({
    queryKey: ["productFeedback", id], // include id in the key
    queryFn: () => getProductFeedback(id),
    enabled: !!id, // only run if id exists
  });


  const feedbackList = productfeedback?.feedbacks ?? [];

  const ourProduct = singleProduct?.product

  const formattedDate = ourProduct?.deliveryDate
    ? new Date(ourProduct.deliveryDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    : "N/A";

  // ---------------------------------------------- State Management ----------------------------------------------
  // Add To Cart

  const [addToCart, { isLoading, data, isSuccess, error }] = useAddToCartMutation()
  console.log("=-=-= product", data, error)

  const { quantityInCart } = useAppSelector((state: RootState) => state.globals)


  const handleAddToCart = () => {
    console.log("added to cart")
    addToCart({ productId: ourProduct?._id, quantity: Number(quantityInCart) })
  }

  useEffect(() => {
    if (error) {
      const err = error as { data: { error: string } }
      ErrorToast({ message: err.data.error })
    }
    if (isSuccess) {
      successToast({ message: data.message })
    }
  }, [error, isSuccess, data?.message])

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 p-6">

        {/* Left Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <img src={ourProduct?.images[0]} alt="Product" className="w-full max-w-md object-contain rounded-lg " />
        </div>

        {/* Middle Product Info */}
        <div className="flex-1 max-w-xl space-y-4">
          <p className="text-[#1F8394] text-sm">Brand: {ourProduct?.brand}</p>

          <h2 className="text-lg font-semibold leading-snug text-gray-500">
            {ourProduct?.name}
            <br />
            {ourProduct?.description}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-1 text-sm">
            <span className="">4.1</span>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={i < ourProduct?.stars ? "fill-yellow-500 text-yellow-500" : "text-gray-300"} />
            ))}
            {/* <Star className="w-4 h-4 text-gray-300" /> */}
            <span className="ml-2 text-[#1F8394]">76 ratings</span>
            <span className="mx-2">|</span>
            <span className="text-[#1F8394] cursor-pointer">Search this page</span>
          </div>

          <hr />

          {/* Price Section */}
          <div className="text-2xl  ">
            <sup className="text-sm align-top">SAR</sup> {ourProduct?.price}<sup className="text-sm align-top">14</sup>
          </div>
          <p className="text-sm text-gray-500">All prices include VAT.</p>

          <p className=" font-medium">
            <span className='text-gray-500'>Sign in to redeem.</span>
            <span className='bg-[#71ED58]'>Extra {ourProduct?.discount}%</span>

            <span className=" font-normal">off with meem credit cards.</span>
          </p>
          <p >Enter code MEEM20 at checkout. Discount by Amazon.</p>

          {/* Small Icons Row */}
          <div className="flex gap-6 mt-4">
            <div className="flex flex-col items-center text-center text-sm">
              <img src={photo2} alt="" className="w-10 h-10" />
              <p className='text-[#1F8394]'>Electronic<br />Payment Only</p>
            </div>
            <div className="flex flex-col items-center text-center text-sm">
              <img src={photo3} alt="" className="w-10 h-10" />
              <p className='text-[#1F8394]'>30 Days<br />Returnable</p>
            </div>
            <div className="flex flex-col items-center text-center text-sm">
              <img src={photo4} alt="" className="w-10 h-10" />
              <p className='text-[#1F8394]'>Secure<br />Transaction</p>
            </div>
          </div>

          <hr />

          {/* About this item */}
          <h3 className="text-lg font-bold mt-4">About this item</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm ">
            {ourProduct?.aboutItem?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Right Cart Section */}
        <div className="w-full md:w-64 border rounded-lg shadow-md p-4 space-y-3">
          <h3 className="text-2xl ">
            <sup className="text-sm">SAR</sup> {ourProduct?.price}<sup className="text-sm">14</sup>
          </h3>
          <p className="text-sm ">
            SAR96 delivery <span className="font-medium">{formattedDate}</span>
          </p>
          <p className="text-sm text-[#1F8394] cursor-pointer">Details</p>

          <p className="flex items-center text-sm text-[#1F8394]">
            <Locate className="w-4 h-4 mr-1" /> Delivery to Riyadh - Update location
          </p>

          <p className="font-bold text-[#B12704]">Usually ships within 4 to 5 days</p>
          <MultipleSelect />
          <Button
            className="cursor-pointer w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded-md"
            onClick={() => {
              if (isLoading) return
              handleAddToCart()
            }}
          >
            {isLoading ? <SpinnerComponent /> : "Add to Cart"}
          </Button>
          <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-medium py-2 rounded-md">
            Buy Now
          </button>

          <div className='flex text-gray-500 gap-3'>
            <div>
              <p>Ships from</p>
              <p>Sold by</p>
              <p>Payment</p>
            </div>
            <div>
              <p>Monatik LLC</p>
              <p className='text-[#1F8394]'>Monatik LLC</p>
              <p className='text-[#1F8394]'>Secure transaction</p>
            </div>
          </div>
          <hr />

          <button className="w-full bg-transparent border-1 border-gray-600  font-medium py-2 rounded-md">
            Add to List
          </button>
        </div>
      </div>
      <hr />






      {feedbackList.length > 0 ? (

        <div className='flex   flex-col md:flex-row gap-16 p-6'>
          <div className='progress-reviews'>
            <h3 className='text-lg font-bold mb-3'>Customer Reviews</h3>
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < 4 ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}
                />
              ))}
              <span className="font-semibold mx-2">4.1 out of 5</span>
            </div>
            <p className="mb-2 text-gray-600">1 global rating</p>
            <RatingBreakdown stats={productStats.stats[0]} />
          </div>

          <div className="card-review flex-1 flex flex-col gap-6 " >
            {feedbackList.map((feedback: any) => (
              <ReviewCard feedback={feedback} key={feedback._id} />
            ))}
          </div>


        </div>
      ) : (
        <div>
          <h3 className="text-lg font-bold">No Reviews</h3>
          <p className="text-gray-600">Be the first to review this item</p>
        </div>
      )}
    </div>

  )
}




//   <div className='flex'>
// <div className='flex-1'>
//   <img src={photo1} alt="" />
// </div>
// <div className='max-w-[450px]'>
//   <p>Brand: WDIRARA</p>
//   <p>LG 7 Kg, 5 Star, Direct Drive Technology, Steam Wash,
//      6 Motion DD,
//     Smart Diagnosis, Fully-Automatic Front Load</p>
//     <p className='flex'>4.1
//       <Star className='fill-yellow-500 text-yellow-500'></Star>
//       <Star className='fill-yellow-500 text-yellow-500'></Star>
//       <Star className='fill-yellow-500 text-yellow-500'></Star>
//       <Star className='fill-yellow-500 text-yellow-500'></Star>
//       <Star className='text-gray-300'></Star>
//       <span>76 rating</span>| <span>Search this page</span>

//        </p>
//        <hr />
//        <p> <sup>sar</sup> 203 <sup>14</sup></p>
//        <p>All price include VAT.</p>
//        <p>Sign in to redeem. <span>Extra 20%</span> <span>off  with meem credit cards.</span></p>
//        <p>Enter code MEEM20 at checkout. Discount by Amazon.</p>
//        <div className='flex'>
// <div>
//   <img src={photo2} alt="" />
//   <p>Electronic
// payment Only</p>
// </div>
// <div>
//   <img src={photo3} alt="" />
//   <p>30 days
// Returnable</p>
// </div>
// <div>
//   <img src={photo4} alt="" />
//   <p>Secure
// transaction</p>
// </div>
//        </div>
//        <hr />
//        <h3>about this item</h3>
//        <ul>
//         <li>Feature: square neck, cutout,
//            puff sleeve, ruffle hem, tie back aline dress</li>
//            <li>Fabric has some stretch,and it's soft and comfortable</li>
//            <li>Suitable for daily wear, holidays, dating, vacation, weekend casual</li>
//            <li>Care Instructions: Machine wash or professional dry clean</li>
//        </ul>
// </div>
// <div className='cart'>
// <h3>
//   <sup>sar</sup>
//   203<sup>14</sup>
// </h3>
// <p>SAR96 delivery <span>6-9 October</span></p>
// <p>Details</p>
// <p> <Locate></Locate> Delivery to Riyadh - Update
// Location </p>
// <p>Usually ships within 4 to 5
// days</p>
// </div>

//     </div>