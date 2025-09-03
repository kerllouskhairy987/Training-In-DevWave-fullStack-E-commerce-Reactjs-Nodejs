import axios from "axios"

const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YjdmYjdkNTBmNjM5ODY5ZDE4OTU4NiIsImVtYWlsIjoiYmFzbWFAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NTY5MTIwOTAsImV4cCI6MTc1Njk5ODQ5MH0.mNDPR6NOr1M1b-M_aN2dRV1TYGW2jU2k5z2utGIx7uU"
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
