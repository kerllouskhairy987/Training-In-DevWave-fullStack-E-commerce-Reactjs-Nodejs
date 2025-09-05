import axios from "axios"

const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YjU4ZTMwMGIyOGQ5OTI3YWY2NzNmMSIsImVtYWlsIjoibW02MzMxMzI5QGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1NzA2MTMwMCwiZXhwIjoxNzU3MTQ3NzAwfQ.ei6-w_xZvkfs1QaLWCojhESG_nRM2xfS13aC8q7NGew"
export async function getProducts()
{
    try {
      
        let {data} = await axios.get('https://training-in-dev-wave-full-stack-e-c.vercel.app/api/products/all', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            } )
        return data
        
    } catch (error) {
          return error?.message
    }
}
export async function getSingleProduct(id)
{
    try {
      
        let {data} = await axios.get(`https://training-in-dev-wave-full-stack-e-c.vercel.app/api/products/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            } )
        return data
        
    } catch (error) {
          return error?.message
    }
}

export async function getFilterdProducts(filterObj)
{
    try {
      
        let {data} = await axios.get('https://training-in-dev-wave-full-stack-e-c.vercel.app/api/products/filter', {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: filterObj
            } )
        return data
        
    } catch (error) {
          return error?.message
    }
}
export async function getProductFeedback(productId) {
    try {
      
        let {data} = await axios.get(`https://training-in-dev-wave-full-stack-e-c.vercel.app/api/feedback/product-feedback/${productId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            } )
        return data
        
    } catch (error) {
          return error?.message
    }
}

export async function getProductStats(productId) {
    try {
      
        let {data} = await axios.get(`https://training-in-dev-wave-full-stack-e-c.vercel.app/api/feedback/product-feedback-stats/${productId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            } )
        return data
        
    } catch (error) {
          return error?.message
    }
}