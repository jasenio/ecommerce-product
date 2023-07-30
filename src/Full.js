import images from './image';
import {useState, useEffect} from "react";
export const Full = (props) => {
    const slides = [
        images.image1,
        images.image2,
        images.image3,
        images.image4,
    ];

    const [slideNum, changeSlideNum] = useState(0);
    const [slide, changeSlide] = useState(slides[slideNum]);
    const moveSlides = (dir) => {
        if (dir){
            console.log(slideNum);
            slideNum === slides.length-1? changeSlideNum(0) : changeSlideNum(slideNum+1);
        }
        else{
            slideNum === 0 ? changeSlideNum(slides.length-1) : changeSlideNum(slideNum -1);
        }
    }
    useEffect(() => {
        changeSlide(slides[slideNum]);
    }, [slideNum])
    return <div className = "fullScreen">
                <button className = "exitFull" onClick = {props.toggle}>
                    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
                </button>
                <div className = "SliderSelector">
                    <div className = "imageFull">
                        <button className = "moveLeft" onClick = {() => {moveSlides(false)}}>
                            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                        </button>
                        <img src = {slide}>
                        </img>
                        <button className = "moveRight" onClick = {() => {moveSlides(true)}}>
                            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                        </button>
                    </div>
                </div>
                <div className = "Slider">
                    <button className="thumb1" onClick = {() =>{changeSlideNum(0)}}>
                        <img src = {images.thumbnail1}></img>
                        {slideNum === 0 && <div className = "selected1"></div>}
                    </button>
                    <button className="thumb2" onClick = { () =>{changeSlideNum(1)}}>
                        <img src = {images.thumbnail2}></img>
                        {slideNum === 1 && <div className = "selected2"></div>}
                    </button>
                    <button className="thumb3" onClick = {() =>{changeSlideNum(2)}}>
                        <img src = {images.thumbnail3}></img>
                        {slideNum === 2 && <div className = "selected3"></div>}
                    </button>
                    <button className="thumb4" onClick = {() =>{changeSlideNum(3)}}>
                        <img src = {images.thumbnail4}></img>
                        {slideNum === 3 && <div className = "selected4"></div>}
                    </button>
                </div>

                <button className = "blackScreen" onClick = {props.toggleladsd}></button>
            </div>
}