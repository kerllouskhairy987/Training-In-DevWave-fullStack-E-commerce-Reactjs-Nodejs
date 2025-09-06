import DashboardAside from '@/components/admin/DashboardAside'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <div className='  flex items-start  bg-[#F8F8F8] h-screen'>
            <DashboardAside />
             <div className="flex-1 h-full overflow-auto">
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout