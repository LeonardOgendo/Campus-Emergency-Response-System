import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersAPI from "../api/users";
import { toast } from "react-toastify";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        // Load user data from local storage
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null
    });

    const navigate = useNavigate();

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = async () => {
        try {
            const refreshToken = localStorage.getItem('refresh_token');
            const accessToken = localStorage.getItem('access_token')

            // PUSH token for blacklisting
            if (refreshToken) {
                await UsersAPI.post("/logout/", 
                    { refresh_token: refreshToken },
                    { 
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
            }

            // Clear user state and local storage
            setUser(null);
            localStorage.removeItem("user");
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");

            toast.success("Logout successful");
            setTimeout(() => {
                navigate('/');
            }, 1000)
            

        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider