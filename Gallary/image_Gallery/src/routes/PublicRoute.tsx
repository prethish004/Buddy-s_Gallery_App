import { FC } from "react";
import { useAuth } from "../hooks/useAuth"
import { Navigate } from "react-router-dom";
interface PublicRouteProps{
    children:React.ReactElement;
}
const PublicRoute:FC<PublicRouteProps> = ({children}) => {
    const {user}=useAuth();
    if(user){
        return <Navigate to='/h' />
    }
    return children;

}
export default PublicRoute;
