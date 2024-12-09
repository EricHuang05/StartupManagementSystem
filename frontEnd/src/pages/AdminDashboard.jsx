import AdminSideBar from '../components/dashboard/AdminSideBar'
// import { useAuth } from '../context/authContext'
import Navbar from '../components/dashboard/NavBar'
// import AdminSummary from '../components/dashboard/AdminSummary'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
    // const {user} = useAuth()


    return (
        <div className='flex'> 
            <AdminSideBar />
            <div className='flex-1 ml-64 bg-gray-100 h-screen'>
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default AdminDashboard