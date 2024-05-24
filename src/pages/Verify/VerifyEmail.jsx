import React from "react";
import './verifyEmail.css';
import { Link } from "react-router-dom";
import Home from "../../components/Home/Home";


const VerifyEmail = () => {
    return (
        <>  
        <Home />    
            <section className="verifty">
                <div className="main">
                <div className="overlay"></div>
                    <div className="content">
                        <h2>مرحبا بك  <span>RED</span></h2>
                        <p>لقد تم أرسال رمز التأكيد إلى  <a href="">example@gmail.com</a></p>
                        <div className="code">
                            <ul className="code-number">
                                <li>...</li>
                                <li>3</li>
                                <li>3</li>
                                <li>0</li>
                                <li>4</li>
                                <li>5</li>
                            </ul>
                        </div>
                        <Link to="/" className="confirm d-block" >تأكيد</Link>
                        <p>إذا لم يصلك الرمز يمكنك إعادة المحاولة بعد <span>4:20د</span></p>
                        <button className="resent">إعادة الإرسال</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VerifyEmail;