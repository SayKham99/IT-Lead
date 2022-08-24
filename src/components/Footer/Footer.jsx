
import "./footer.scss";

export default function Footer(){
    return(
        <section id="footer">
            <div className="footer-wrapper">
                <div className="left">
                    <div className="contact">
                        <div className="title">
                            <h2>Contact</h2>
                        </div>
                        <div className="mail">
                            <p>You can text me on</p>
                            <p className="g-mail">abbosarabboyev9@gmail.com</p>
                        </div>
                        <div className="phone">
                            <p>or call me on phone</p>
                            <p>+998999883500</p>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="clients">
                        <h2>Clients</h2>
                    </div>
                    <div className="bars">
                        <ul>
                            <li>About Us</li>
                            <li>Guarantees</li>
                            <li>Authentication</li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="adress">
                        <div className="title">
                            <h2>Adress</h2>
                        </div>
                        <p>Bobur shax Street, Andijan Digital City</p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; IT_Lead Development Team</p>
            </div>
        </section>
    )
}
