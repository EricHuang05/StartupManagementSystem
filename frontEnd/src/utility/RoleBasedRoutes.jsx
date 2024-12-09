import { Navigate } from "react-router-dom"
import { useAuth } from "../context/authContext"
import PropTypes from "prop-types";

const RoleBasedRoutes = ({children, requiredRole}) => {
        const {user, loading} = useAuth()

        if (loading) {
            return <div>Loading...</div>
        }

        if (!requiredRole.includes(user.role)) {
            <Navigate to="/unauthorized"/>
        }

        return user ? children : <Navigate to = "/login" />
}

RoleBasedRoutes.propTypes = {
    children: PropTypes.node.isRequired, // Ensures children is a valid React node
    requiredRole: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensures requiredRole is an array of strings
};


export default RoleBasedRoutes