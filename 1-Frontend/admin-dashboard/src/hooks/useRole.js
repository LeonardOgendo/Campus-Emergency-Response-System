import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


const useRole = () => {
    const { user } = useContext(AuthContext);
    return user?.role || "Guest";
}

export default useRole;