import {useState} from "react";
export const useToggle= (initial = false) => {
    const [isOpen, toggleOpen] = useState(initial);
    const toggle = () =>{
        toggleOpen(!isOpen);
    };
    return [isOpen, toggle];
}