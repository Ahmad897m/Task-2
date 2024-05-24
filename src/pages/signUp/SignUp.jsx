import React from "react";
import './signUp.css';
import { BsUpload } from "react-icons/bs";
import googleImg from '../../assests/images/Google Logo.png'
import appleImg from '../../assests/images/Apple Logo.png'
import facebookImg from '../../assests/images/Facebook Logo.png'
import { Link } from "react-router-dom";

const SignUp = () => {
    return(
        <>
            <section className="signup">
            <div className="main">
                <h2>إنشاء حساب</h2>
                    <div className="main-form">
                        <div className="form">
                            <form action="">
                            <div className="input">
                        <label htmlFor="name">الايميل</label>
                        <input type="email" name="email" id="name" />
                        </div>
                        <div className="input">
                            <label htmlFor="username">اسم المستخدم</label>
                            <input type="text" name="username" id="username" />
                        </div>
                        <div className="input">
                            <label htmlFor="phone">رقم الهاتف</label>
                            <input type="text" name="phone" id="phone" />
                        </div>
                        <div className="input">
                            <label htmlFor="password">كلمة المرور</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <div className="input">
                            <label htmlFor="confirmPassword">تأكيد كلمة المرور</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" />
                        </div>
                            </form>
                        </div>
                        <div className="info-box">
                    <div className="image-upload">
                        <label htmlFor="">الصورة الشخصية</label>
                        <p> اسحب و افلت الصورة هنا او قم برفعها من الملفات <a href=""> <BsUpload className="icon" /> </a> </p>
                        <span>الحجم الأقصى: 2MB</span>                    </div>
                    <div className="image-upload">
                        <label htmlFor="">اثبات شخصية</label>
                        <p> اسحب و افلت الصورة هنا او قم برفعها من الملفات <a href=""> <BsUpload className="icon" /> </a> </p>
                        <span>الحجم الاقصى: 1MB</span>
                    </div>
                    <div className="create-btn">
                        <Link to="/verify" className="button">إنشاء حساب</Link>
                        <p> لديك حساب؟ <a href="#">تسجيل الدخول</a></p>
                    </div>
                </div>   
                </div>
            <div className="line">
            <p className="text-line">أو</p>
            </div>
            <div className="icons">
            <ul>
                <li> <a href="#" className="icon facebook " > <span>Facebook </span><img src={facebookImg} alt="facebook-icon" /> </a> </li>
                <li > <a href="#" className="icon apple "><span> Apple </span><img src={appleImg} alt="Apple-icon" />  </a> </li>
                <li> <a href="#" className="icon google"> <span className="text-black">Google </span><img src={googleImg} alt="google-icon" /> </a> </li>
            </ul>
            </div>
            </div>
            </section>
        </>
    )
}

export default SignUp





// 
// 
//     <div className="form">

//         <div className="container">
//             <div className="left">
//             <form action="">

//             </form>
//             </div>


//             </div>
//         </div>
//     </div>

// </div>
// </div>