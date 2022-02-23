import { useEffect } from "react";
import SwiperCore, { Navigation, Swiper } from 'swiper/core';

import "../../scss/components/swiper.scss";
import Arrow from '../../Icons/Arrow';

SwiperCore.use([Navigation]);

export default function CustomSwiper({ setItemIndex, gallery, className }) {

    useEffect(() => {
        initSwiper(setItemIndex);
    }, [setItemIndex]);

    return (
        <div className={"swiper swiper--token " + (className ? className : "")}>
            <button className="swiper-button swiper-button--left">
                <Arrow className="swiper-button__arrow swiper-button__arrow--left" />
            </button>
            <div className="swiper-container">
                <ul className="swiper-wrapper">
                    {gallery.map(item => {
                        return (
                            <li className="swiper-slide" key={item.id}>
                                <img src={item.image} className="swiper-image" alt="token" />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <button className="swiper-button swiper-button--right">
                <Arrow className="swiper-button__arrow swiper-button__arrow--right" />
            </button>
        </div>
    )
}

function initSwiper(setItemIndex) {

    const swiper = new Swiper(".swiper--token .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 40,
        pagination: {
            el: ".swiper--token .swiper-pagination",
            type: 'progressbar'
        },
        navigation: {
            prevEl: ".swiper--token .swiper-button--left",
            nextEl: ".swiper--token .swiper-button--right",
        }
    });

    swiper.on('slideChange', () => {

        if (setItemIndex) {
            setItemIndex(swiper.realIndex);
        }
    });
}