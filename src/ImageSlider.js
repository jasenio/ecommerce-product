import images from './image';
import {useState} from "react";
export const ImageSlider = () => {
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
            changeSlide(slides[slideNum]);
            
        }
        else{
            slideNum === 0 ? changeSlideNum(slides.length-1) : changeSlideNum(slideNum -1);
            changeSlide(slides[slideNum]);
        }
    }
    return <div className = "ImageSlider">    
                <button className = "moveLeft" onClick = {() => {moveSlides(false)}}>
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                </button>
                <img src = {slide}>
                </img>
                <button className = "moveRight" onClick = {() => {moveSlides(true)}}>
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                </button>
    </div>
}