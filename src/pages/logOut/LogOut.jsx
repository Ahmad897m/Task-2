import React from "react";
import './logOut.css';
import { useNavigate } from "react-router-dom";
import Home from "../../components/Home/Home";

const LogOut = ({ setSubmitSource     }) => {
    const navigate = useNavigate();

    const handleSubmit = () => {
      setSubmitSource('SecondPage');
      navigate('/');
    }

    return (
        <>
        <Home />
            <section className="logout">
                <div className="main">
                <div className="overlay"></div>
                    <div className="content">
                        <h2>هل انت متأكد من تسجيل الخروج</h2>
                        <div className="buttons">
                            <button className="confirm" onClick={handleSubmit}>تأكيد</button>
                            <button className="back">تراجع</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogOut;