import React from 'react'
import profilePhoto from "./Images/profile-photo.png";
import { Link } from "react-router-dom";

export default function profile() {
    return (
        <div class="top-bg profile-parent">
        <div class="profile-card" data-aos="zoom-in" data-aos-offset="0">
            <div class="profile-child">
                <div class="profile-content">
                    <span class="name">aryan verma</span>
                    <span class="designation">fron-end
                        developer
                        <i class="bi bi-pc-display-horizontal logo"></i></span>
                </div>
                <div class="profile-logo">
                    <a class="bi bi-linkedin logo"
                        href="https://www.linkedin.com/in/aryanver6/"
                        target="_blank" rel="noreferrer"></a>
                    <a class="bi bi-instagram logo"
                        href="https://www.instagram.com/aryan_verma02_/"
                        target="_blank" rel="noreferrer"></a>
                    <a class="bi bi-github logo"
                        href="https://github.com/aryanver2001"
                        target="_blank" rel="noreferrer"></a>
                    <a class="bi bi-facebook logo"
                        href="https://www.facebook.com/profile.php?id=100008700275122"
                        target="_blank" rel="noreferrer"></a>
                </div>
                <div class="cv-download-btn">
                    <a href="ARYAN_RESUME.pdf"
                        download="ARYAN_RESUME.pdf"
                        target="_blank" rel="noreferrer">
                        <button class="btn">Download CV <i
                            class="fa fa-download"></i></button>
                    </a>
                </div>
            </div>
            <div class="profile-img">
                <img src={profilePhoto}
                    alt="" />
            </div>
        </div>
    </div>
    )
}
