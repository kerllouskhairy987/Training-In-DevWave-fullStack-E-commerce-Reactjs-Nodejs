import DashboardAside from '@/components/admin/DashboardAside'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <div className='container mx-auto pe-2 flex items-start gap-4'>
            <DashboardAside />
            <Outlet />
        </div>
    )
}

export default DashboardLayout