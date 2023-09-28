import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFount = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const backToHome = setTimeout(() => {
            navigate("/");
        }, 3000);
        return () => {
            clearTimeout(backToHome);
        };
    }, []);

    return (
        <div>
            <h2>Effor: 404</h2>
            <p>Page not found</p>
        </div>
    );
};

export default NotFount;
