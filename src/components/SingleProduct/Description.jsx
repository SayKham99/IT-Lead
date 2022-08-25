
import img1 from "../../assets/photo_2022-08-24 18.14.09.jpeg"
import img2 from "../../assets/photo_2022-08-24 18.14.18.jpeg";
import img3 from "../../assets/photo_2022-08-24 18.14.22.jpeg";
import img4 from "../../assets/photo_2022-08-24 18.16.53.jpeg";
import img5 from "../../assets/photo_2022-08-24 18.16.58.jpeg";
import img6 from "../../assets/photo_2022-08-24 18.17.03.jpeg";
import "./desc.scss";


export default function Description(){
    return(
        <section id="desc-item">
            <div className="desc-wrapper">
                <div className="title">
                    <h1>I Phone 13 Pro Max</h1>
                </div>
                <div className="img">
                    <img src={img1} />
                </div>
                <div className="item-d">
                    <p>Next level camera
                        The new device from Xiaomi has become a real expert in the field of photography. Improved main camera, the resolution of which

                        is now 108 megapixels, provides the highest detail and color reproduction. The main feature of Xiaomi 12 Lite was

                        the emergence of optical image stabilization, previously available only to flagships of the highest class.</p>
                </div>
                <div className="img">
                    <img src={img2} />
                </div>
                <div className="item-d">
                    <p>Next level camera
                        The new device from Xiaomi has become a real expert in the field of photography. Improved main camera, the resolution of which

                        is now 108 megapixels, provides the highest detail and color reproduction. The main feature of Xiaomi 12 Lite was

                        the emergence of optical image stabilization, previously available only to flagships of the highest class.</p>
                </div>
                <div className="img">
                    <img src={img3} />
                </div>
                <div className="item-d">
                    <p>Next level camera
                        The new device from Xiaomi has become a real expert in the field of photography. Improved main camera, the resolution of which

                        is now 108 megapixels, provides the highest detail and color reproduction.
                    </p>
                </div>
                <div className="img">
                    <img src={img4} />
                </div>
                <div className="item-d">
                    <p>Next level camera
                        The new device from Xiaomi has become a real expert in the field of photography. Improved main camera, the resolution of which

                        is now 108 megapixels, provides the highest detail and color reproduction.
                    </p>
                </div>
                <div className="img">
                    <img src={img5} />
                </div>
                <div className="item-d">
                    <p>Next level camera
                        The new device from Xiaomi has become a real expert in the field of photography. Improved main camera, the resolution of which

                        is now 108 megapixels, provides the highest detail and color reproduction. The main feature of Xiaomi 12 Lite was

                        the emergence of optical image stabilization, previously available only to flagships of the highest class.</p>
                </div>
                <div className="img">
                    <img src={img6} />
                </div>
            </div>
        </section>
    )
}
