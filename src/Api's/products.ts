
// import axios from "axios"

// const token = localStorage.getItem("userToken")
// type TPropsGetProducts = {
//     page?: number
// }
// export async function getProducts({page}: TPropsGetProducts) {
//     try {
//         const { data } = await axios.get(`https://training-in-dev-wave-full-stack-e-c.vercel.app/api/products/filter?page=${page}`)
//         console.log("000-----", data)
//         return data

//     } catch (error) {
//         console.log("000-----", error)
//         const err = error as { message: string }
//         return err?.message
//     }
// }

// export async function getSingleProduct(id: string) {
//     try {

//         const { data } = await axios.get(`https://training-in-dev-wave-full-stack-e-c.vercel.app/api/products/${id}`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         return data

//     } catch (error) {
//         const err = error as { message: string }
//         return err?.message
//     }
// }

// export async function getFilterdProducts(filterObj) {
//     try {

//         const { data } = await axios.get('https://training-in-dev-wave-full-stack-e-c.vercel.app/api/products/filter', {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             },
//             params: filterObj
//         })
//         return data

//     } catch (error) {
//         const err = error as { message: string }
//         return err?.message
//     }
// }
// export async function getProductFeedback(productId) {
//     try {

//         const { data } = await axios.get(`https://training-in-dev-wave-full-stack-e-c.vercel.app/api/feedback/product-feedback/${productId}`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         return data

//     } catch (error) {
//         const err = error as { message: string }
//         return err?.message
//     }
// }

// export async function getProductStats(productId) {
//     try {

//         const { data } = await axios.get(`https://training-in-dev-wave-full-stack-e-c.vercel.app/api/feedback/product-feedback-stats/${productId}`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         return data

//     } catch (error) {
//         const err = error as { message: string }
//         return err?.message
//     }
// }