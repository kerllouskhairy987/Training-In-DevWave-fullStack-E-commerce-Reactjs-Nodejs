import axios from "axios"

export async function getCategories()
{
    try {
      
        let {data} = await axios.get('http://plantcareapi.runasp.net/api/Category/GetAllCategories', {
        
      })
        return data
        
    } catch (error) {
          return error?.message
    }
}
