import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

function ProtectedRoute(props: { children: any, authenticated: boolean }) {
    const {children, authenticated} = props
    const navigate = useNavigate()
    useEffect(() => {
        if (!authenticated) {
            navigate('/login')
        }
    }, [authenticated])
    return children;
}

export default ProtectedRoute;