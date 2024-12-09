import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import PropTypes from 'prop-types';
import { useEffect } from "react";
import axios from "axios";



const userContext = createContext()

const AuthContext = ({ children }) => {
        const [user, setUser] = useState(null)
        const [loading, setLoading] = useState(true)
        useEffect(() => {
            const verifyUser = async () => {
                try {
                    const token = localStorage.getItem('token')
                    if (token) {
                        const response = await axios.get('http://localhost:3000/api/auth/verify', {
                            headers: {
                                "Authorization" : `Bearer ${token}`
                            }
                        })
                        console.log(response)
                        if (response.data.success) {
                            setUser(response.data.user)
                        }
                    } else {
                        setUser(null)
                        setLoading(false)
                    }
                } catch(error) {
                    console.log(error)
                    if (error.response && !error.response.data.error) {
                        setUser(null)
                    }
                } finally {
                    setLoading(false)
                }
            }
            verifyUser()
        }, [])

        const login = (user) => {
            setUser(user)
        }

        const logout = () => {
            setUser(null)
            localStorage.removeItem("token")
        }
    return (
        <userContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </userContext.Provider>
    );
};

// Validate the children prop
AuthContext.propTypes = {
    children: PropTypes.node.isRequired, // Ensure children is a valid React node and is required
};

export const useAuth = () => useContext(userContext)
export default AuthContext