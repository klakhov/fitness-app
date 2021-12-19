import React from 'react';
import Hero from "../../components/hero/hero";
import Join from "../../components/join/join";
import Trainers from "../../components/trainers/trainers";
import Contact from "../../components/contact/contact";

export default function HomePage(){
    return (
        <>
        <Hero/>
        <Join/>
        <Trainers/>
        <Contact/>
        </>
    );
}