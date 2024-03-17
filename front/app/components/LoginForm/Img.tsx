import React from "react";
import img from '../../../assets/for_header.png'
import { StyleSheet } from "react-native";
import './LoginForm.module.css'



const Img = () => {

    return (
        <img
            className="img"
            src={img}
            alt="logo"
        />
    );
};
export default Img;