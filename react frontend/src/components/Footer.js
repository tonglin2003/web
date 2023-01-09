import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div class="footer-content">
                <h3>JustWorks Market</h3>
                <p>meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow</p>
                <ul class="socials">
                    <li><Link to="#"><i class="fa fa-facebook"></i></Link></li>
                    <li><Link to="#"><i class="fa fa-twitter"></i></Link></li>
                    <li><Link to="#"><i class="fa fa-youtube"></i></Link></li>
                    <li><Link to="#"><i class="fa fa-linkedin-square"></i></Link></li>
                </ul>
            </div>
            <div class="footer-bottom">
                <p>copyright &copy;2023 JustWorks. designed by <span>The Sprinterns</span></p>
            </div>
        </footer>
    )
}
export default Footer