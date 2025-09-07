import DashboardAside from '@/components/admin/DashboardAside'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <div className='flex items-start bg-[#15283c] gap-5'>
            <DashboardAside />
            <div className="h-full w-full overflow-x-hidden">
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout