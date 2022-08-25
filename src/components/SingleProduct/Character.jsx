
import "./character.scss"
export default function Character(){
    return(
        <section id="character">
            <div className="character-wrapper">
                <div className="character-item">
                    <div className="title">
                        <h1>Appearance</h1>
                    </div>
                    <div className="character-line">
                        <div className="lines">
                            <p className="name">Corpus material</p>
                            <p className="line"></p>
                            <p className="material">Plastic | Glass</p>
                        </div>

                        <div className="lines">
                            <p className="name">Height (mm)</p>
                            <p className="line"></p>
                            <p className="material">152,7</p>
                        </div>

                        <div className="lines">
                            <p className="name">Width (mm)</p>
                            <p className="line"></p>
                            <p className="material">69,9</p>
                        </div>

                        <div className="lines">
                            <p className="name">Thickness (mm):</p>
                            <p className="line"></p>
                            <p className="material">8,16</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
