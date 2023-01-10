import React from 'react'
import { Link } from 'react-router-dom'
import css from "../css/styles.css"


const Footer = () => {
    return (
        <footer>

            <div className="footer-content">
                <h4> Join Our Newsletter</h4>
            </div>

            <div className="flex-container">

                {/*Sub Button*/}
                <form action="action_page.php">
                    <div className="container" style={{backgroundColor:"white"}}>
                        <input type="text" placeholder="Name" name="name" required/>
                            <input type="text" placeholder="Email address" name="mail" required/>
                                <label>
                                    <input type="checkbox" checked="checked" name="subscribe"/> Sign Me Up!
                                </label>
                    </div>


                {/*Footer Content*/}
                    <div className="container">
                        <input type="submit" value="Subscribe"/>
                    </div>
                </form>

                <div className="content">
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Justworks Market</li>
                            <li><Link to="#">Home</Link></li>
                            <li><Link to="#">Contact us</Link></li>
                            <li><Link to="#">About us</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Categories</li>
                            <li><Link to="#">Services</Link></li>
                            <li><Link to="#">Technology</Link></li>
                            <li><Link to="#">Clothes</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Account</li>
                            <li><Link to="#">My Account</Link></li>
                            <li><Link to="#">Preferences</Link></li>
                            <li><Link to="#">Pricing</Link></li>
                        </ul>
                    </div>
                </div>

            </div>


                {/*Socials*/}
            <ul className="socials">
                <li><Link to="https://www.linkedin.com/company/justworks-" target="_blank"><i
                    className="fa fa-linkedin-square"></i></Link></li>
                <li><Link to="https://twitter.com/justworks?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                       target="_blank"><i className="fa fa-twitter"></i></Link></li>
                <li><Link to="https://www.facebook.com/JustworksHR/" target="_blank"><i
                    className="fa fa-facebook"></i></Link></li>
                <li><Link to="https://www.youtube.com/c/JustworksHR?app=desktop" target="_blank"><i
                    className="fa fa-youtube"></i></Link></li>
                <li><Link to="https://www.instagram.com/justworks_hr/?hl=en" target="_blank"><i
                    className="fa-brands fa-instagram"></i></Link></li>
            </ul>


                {/*Footer Bottom*/}
            <div className="footer-bottom">
                <p>Copyright &copy;2022 Justworks. Designed by <span>2023 Sprinterns</span></p>
            </div>

        </footer>
    )
}


export default Footer