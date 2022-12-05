const openMenuBtn = document.getElementById("btn-menu");
const sideNav = document.getElementById("side-nav");
const sideNavOverlay = document.querySelector(".side-nav-overlay");
const sideNavLinks = document.querySelectorAll(".side-nav-link");

const mainContainer = document.querySelector(".container");
const swiperContainer = document.querySelector(".swiper-container");
const swiperDigitalArt = document.querySelector(".swiper-container-second");
const swiperWrapperSecond = document.querySelector(".swiper-wrapper-second");
const swiperUIUX = document.querySelector(".swiper-container-third");
const swiperWrapperThird = document.querySelector(".swiper-wrapper-third");
const slides = document.querySelectorAll(".slide");

const showDigitalArtBtn = document.getElementById("btn-digital-art");
const showUIUXBtn = document.getElementById("btn-uiux");
const btnCloseSlider = document.querySelector(".btn-close-slider");
const cursor = document.querySelector(".cursor");

let percentage = document.querySelector(".percentage");

let audioBtn = document.querySelector(".btn-audio");
const audio = document.querySelector(".audio");



/* Functions */

TweenMax.to(".side-nav", 0, {
    opacity: 0,
    width: 0
})

TweenMax.to(".secondary-nav .side-nav-link", 0, {
    opacity: 0,
})

TweenMax.to(".side-nav-copyright", 0, {
    opacity: 0,
})

TweenMax.to(".side-nav-social a", 0, {
    opacity: 0,
})

let openNav = (() => {
    openMenuBtn.classList.toggle("menu-active");

    if (sideNav.style.opacity === "0") {

        TweenMax.staggerTo(".secondary-nav .side-nav-link", 0.8, {
            delay: 1.2,
            opacity: 1,
            ease: Expo.easeIn
        }, 0.3)

        TweenMax.to(sideNavOverlay, 0.8, {
            opacity: 1,
            width: "100%",
            ease: Expo.easeInOut
        })
        
        TweenMax.to(sideNav, 0.8, {
            opacity: 1,
            width: "100%",
            delay: 0.8,
            ease: Expo.easeInOut
        })

        TweenMax.staggerTo(".side-nav-social a", 0.8, {
            delay: 1.2,
            opacity: 1,
            ease: Expo.ease
        }, 0.3)

        TweenMax.to(".side-nav-copyright", 1.2, {
            delay: 2,
            opacity: 1,
            ease: Expo.ease
        })
    } else {

        TweenMax.staggerTo(".secondary-nav .side-nav-link", 0.8, {
            opacity: 0,
            ease: Expo.easeOut
        }, 0.3)
        
        TweenMax.to(sideNav, 0.8, {
            delay: 1,
            opacity: 0,
            width: "0%",
            ease: Expo.easeIn
        })

        TweenMax.to(sideNavOverlay, 0.8, {
            delay: 1.5,
            opacity: 0,
            width: "0%",
            ease: Expo.easeIn
        })

        TweenMax.staggerTo(".side-nav .social a", 0.8, {
            opacity: 0,
            ease: Expo.ease
        }, 0.3)

        TweenMax.to(".side-nav-copyright", 0.8, {
            delay: 0.5,
            opacity: 0,
            ease: Expo.ease
        })
    }
})

TweenMax.to(".swiper-container-first .swiper-slide", 0, {
    autoAlpha: 0,
    y: "100"
});

let preloader = (() => {
    const trackbar = document.querySelector(".trackbar");

    let counter = 0;

    setInterval(() => {
        if (counter !== 100) {
            counter++;

            percentage.innerText = `${counter}%`;

            TweenMax.to(trackbar, 0.5, {
                width: counter + "%",
                autoAlpha: 1,
                ease: Expo.ease
            });
        } else {
            TweenMax.to(trackbar, 0.5, {
                autoAlpha: 0,
                ease: Expo.ease
            });

            percentage.innerText = `Loaded`;

            TweenMax.to(percentage, 1, {
                delay: 0.5,
                autoAlpha: 0,
                y: "-40",
                ease: Expo.easeOut
            })

            TweenMax.to(".bars-preload", 1, {
                delay: 0.5,
                autoAlpha: 0,
                y: "-40",
                ease: Expo.easeOut
            })

            TweenMax.to(".text-note", 1, {
                delay: 0.5,
                autoAlpha: 0,
                y: "-40",
                ease: Expo.easeOut
            })
        }
    }, 5);

    TweenMax.to(".preloader", 2, {
        delay: 3.5,
        top: "-100%",
        ease: Expo.easeInOut
    })

    TweenMax.to(".swiper-container-first .swiper-slide", 1.5, {
        delay: 4.4,
        autoAlpha: 1,
        y: "0",
        ease: Expo.easeOut
    })
});

let animateElements = ((elements, divisorNum) => {
    const e = event;

    let xAxis = Math.round((window.innerWidth / 2 - e.pageX) / divisorNum);
    let yAxis = Math.round((window.innerHeight / 2 - e.pageY) / divisorNum); 

    elements.forEach(element => {
        element.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
    });
})

let resetElements = (elements => {
    elements.forEach(element => {
        element.style.transform = `translate(0px, 0px)`;
    });
});

let resetCursor = (() => {
    cursor.innerHTML = "";

    cursor.style.width = "var(--width)";
    cursor.style.height = "var(--height)";
});

let togglePlay = (() => {

    if (audio.paused) {
        audioBtn.classList.remove("paused");

        audioBtn.innerHTML = `
            <div class="bars">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <span>Sound On</span>
        `;

		audio.play();
	} else {
        audioBtn.classList.add("paused");

        audioBtn.innerHTML = `
            <div class="bars">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <span>Sound Off</span>
        `;

        audio.pause();
	}
});



/* Event listeners */

openMenuBtn.addEventListener("click", openNav);

sideNav.addEventListener("mousemove", () => {
    animateElements(sideNavLinks, 25);
});

sideNav.addEventListener("mouseleave", () => {
    resetElements(sideNavLinks);
});

mainContainer.addEventListener("mousemove", () => {
    animateElements(slides, 25);
});

mainContainer.addEventListener("mouseleave", () => {
    resetElements(slides);
});

audioBtn.addEventListener("click", () => {
    togglePlay();
});

swiperWrapperSecond.addEventListener("mouseover", e => {
    if (e.target.classList.contains("sliders")) {
        resetCursor();
    } else {
        
        cursor.innerHTML = `
            <div class="draggable">
                <img src="../images/icons/arrow-left.png" class="ico">
                <span>drag</span>
                <img src="../images/icons/arrow-right.png" class="ico">
            </div>
        `;

        cursor.style.width = "80px";
        cursor.style.height = "80px";
    }
});

swiperWrapperSecond.addEventListener("mouseleave", () => {
    resetCursor();
});

swiperWrapperThird.addEventListener("mouseover", e => {
    if (e.target.classList.contains("sliders")) {
        resetCursor();
    } else {
        
        cursor.innerHTML = `
            <div class="draggable">
                <img src="../images/icons/arrow-left.png" class="ico">
                <span>drag</span>
                <img src="../images/icons/arrow-right.png" class="ico">
            </div>
        `;

        cursor.style.width = "80px";
        cursor.style.height = "80px";
    }
});

swiperWrapperThird.addEventListener("mouseleave", () => {
    resetCursor();
});



swiperContainer.addEventListener("mouseover", e => {
    if (e.target.classList.contains("btn-more")) {
        cursor.style.opacity = "0";
    } else {
        
        cursor.innerHTML = `
            <div class="draggable">
                <img src="../images/icons/arrow-left.png" class="ico">
                <span>drag</span>
                <img src="../images/icons/arrow-right.png" class="ico">
            </div>
        `;

        cursor.style.opacity = "1";
        cursor.style.width = "80px";
        cursor.style.height = "80px";
    }
})

swiperContainer.addEventListener("mouseleave", () => {
    cursor.style.opacity = "1";

    resetCursor();
});

TweenMax.to(".loading-bar-first", 0, {
    autoAlpha: 0
})

TweenMax.to(".loading-bar-second", 0, {
    autoAlpha: 0
})

TweenMax.to(".open-text-first", 0, {
    autoAlpha: 0
})

TweenMax.to(".open-text-second", 0, {
    autoAlpha: 0
})

let loader;
let counter = 0;

showDigitalArtBtn.addEventListener("mousedown", () => {
    loader = setInterval(() => {
        
        if (counter !== 100) {
            counter++;

            TweenMax.to(".loading-bar-first", 0.5, {
                width: counter + "%",
                autoAlpha: 1,
                ease: Expo.ease
            })
        } else {
            return false;
        }
    }, 5);
});

showDigitalArtBtn.addEventListener("touchstart", () => {
    loader = setInterval(() => {
        
        if (counter !== 100) {
            counter++;

            TweenMax.to(".loading-bar-first", 0.5, {
                width: counter + "%",
                autoAlpha: 1,
                ease: Expo.ease
            })
        } else {
            return false;
        }
    }, 5);
});

showUIUXBtn.addEventListener("mousedown", () => {
    loader = setInterval(() => {
        
        if (counter !== 100) {
            counter++;

            TweenMax.to(".loading-bar-second", 0.5, {
                width: counter + "%",
                autoAlpha: 1,
                ease: Expo.ease
            })
        } else {
            return false;
        }
    }, 5);
});

showUIUXBtn.addEventListener("touchstart", () => {
    loader = setInterval(() => {
        
        if (counter !== 100) {
            counter++;

            TweenMax.to(".loading-bar-second", 0.5, {
                width: counter + "%",
                autoAlpha: 1,
                ease: Expo.ease
            })
        } else {
            return false;
        }
    }, 5);
});



showDigitalArtBtn.addEventListener("mouseup", () => {
    if (loader) {

        if (counter == 100) {
            clearInterval(loader);
            counter = 0;

            TweenMax.to(".loading-bar-first", 0.5, {
                autoAlpha: 0,
                ease: Expo.ease
            })

            TweenMax.to(".hold-text-first", 0.5, {
                autoAlpha: 0
            })

            TweenMax.to(".open-text-first", 0.5, {
                delay: 0.5,
                autoAlpha: 1
            })

            TweenMax.to(mainContainer, 0.8, {
                delay: 0.8,
                autoAlpha: 0
            })

            TweenMax.to(swiperDigitalArt, 0.8, {
                delay: 1.3,
                autoAlpha: 1,
            })

            TweenMax.to(".sliders", 0.8, {
                autoAlpha: 1,
                delay: 1.4
            })
        
            TweenMax.to(".swiper-pagination", 0.8, {
                autoAlpha: 1,
                delay: 1.4
            })
        
            TweenMax.staggerTo(".swiper-wrapper-second .swiper-slide", 0.8, {
                delay: 0.4,
                opacity: 1,
                x: 0,
                ease: Expo.ease
            }, 0.3)
        
            TweenMax.to(btnCloseSlider, 0.8, {
                autoAlpha: 1
            })
        } else {
            clearInterval(loader);
            counter = 0;

            TweenMax.to(".loading-bar-first", 0.5, {
                width: 0,
                autoAlpha: 0,
                ease: Expo.ease
            })
        }
    }
});

showDigitalArtBtn.addEventListener("touchend", () => {
    if (loader) {

        if (counter == 100) {
            clearInterval(loader);
            counter = 0;

            TweenMax.to(".loading-bar-first", 0.5, {
                autoAlpha: 0,
                ease: Expo.ease
            })

            TweenMax.to(".hold-text-first", 0.5, {
                autoAlpha: 0
            })

            TweenMax.to(".open-text-first", 0.5, {
                delay: 0.5,
                autoAlpha: 1
            })

            TweenMax.to(mainContainer, 0.8, {
                delay: 0.8,
                autoAlpha: 0
            })

            TweenMax.to(swiperDigitalArt, 0.8, {
                delay: 1.3,
                autoAlpha: 1,
            })

            TweenMax.to(".sliders", 0.8, {
                autoAlpha: 1,
                delay: 1.4
            })
        
            TweenMax.to(".swiper-pagination", 0.8, {
                autoAlpha: 1,
                delay: 1.4
            })
        
            TweenMax.staggerTo(".swiper-wrapper-second .swiper-slide", 0.8, {
                delay: 0.4,
                opacity: 1,
                x: 0,
                ease: Expo.ease
            }, 0.3)
        
            TweenMax.to(btnCloseSlider, 0.8, {
                autoAlpha: 1
            })
        } else {
            clearInterval(loader);
            counter = 0;

            TweenMax.to(".loading-bar-first", 0.5, {
                width: 0,
                autoAlpha: 0,
                ease: Expo.ease
            })
        }
    }
});

showUIUXBtn.addEventListener("mouseup", () => {
    if (loader) {

        if (counter == 100) {
            clearInterval(loader);
            counter = 0;

            TweenMax.to(".loading-bar-second", 0.5, {
                autoAlpha: 0,
                ease: Expo.ease
            })

            TweenMax.to(".hold-text-second", 0.5, {
                autoAlpha: 0
            })

            TweenMax.to(".open-text-second", 0.5, {
                delay: 0.5,
                autoAlpha: 1
            })

            TweenMax.to(mainContainer, 0.8, {
                delay: 0.8,
                autoAlpha: 0
            })

            TweenMax.to(swiperUIUX, 0.8, {
                delay: 1.3,
                autoAlpha: 1,
            })

            TweenMax.to(".sliders", 0.8, {
                autoAlpha: 1,
                delay: 1.4
            })
        
            TweenMax.to(".swiper-pagination", 0.8, {
                autoAlpha: 1,
                delay: 1.4
            })
        
            TweenMax.staggerTo(".swiper-wrapper-third .swiper-slide", 0.8, {
                delay: 0.4,
                opacity: 1,
                x: 0,
                ease: Expo.ease
            }, 0.3)
        
            TweenMax.to(btnCloseSlider, 0.8, {
                autoAlpha: 1
            })
        } else {
            clearInterval(loader);
            counter = 0;

            TweenMax.to(".loading-bar-second", 0.5, {
                width: 0,
                autoAlpha: 0,
                ease: Expo.ease
            })
        }
    }
});

showUIUXBtn.addEventListener("touchend", () => {
    if (loader) {

        if (counter == 100) {
            clearInterval(loader);
            counter = 0;

            TweenMax.to(".loading-bar-second", 0.5, {
                autoAlpha: 0,
                ease: Expo.ease
            })

            TweenMax.to(".hold-text-second", 0.5, {
                autoAlpha: 0
            })

            TweenMax.to(".open-text-second", 0.5, {
                delay: 0.5,
                autoAlpha: 1
            })

            TweenMax.to(mainContainer, 0.8, {
                delay: 0.8,
                autoAlpha: 0
            })

            TweenMax.to(swiperUIUX, 0.8, {
                delay: 1.3,
                autoAlpha: 1,
            })

            TweenMax.to(".sliders", 0.8, {
                autoAlpha: 1,
                delay: 1.4
            })
        
            TweenMax.to(".swiper-pagination", 0.8, {
                autoAlpha: 1,
                delay: 1.4
            })
        
            TweenMax.staggerTo(".swiper-wrapper-third .swiper-slide", 0.8, {
                delay: 0.4,
                opacity: 1,
                x: 0,
                ease: Expo.ease
            }, 0.3)
        
            TweenMax.to(btnCloseSlider, 0.8, {
                autoAlpha: 1
            })
        } else {
            clearInterval(loader);
            counter = 0;

            TweenMax.to(".loading-bar-second", 0.5, {
                width: 0,
                autoAlpha: 0,
                ease: Expo.ease
            })
        }
    }
});



TweenMax.to(swiperDigitalArt, 0, {
    autoAlpha: 0
})

TweenMax.to(swiperUIUX, 0, {
    autoAlpha: 0
})

TweenMax.to(btnCloseSlider, 0, {
    autoAlpha: 0
})

TweenMax.to(".sliders", 0, {
    autoAlpha: 0
})

TweenMax.to(".swiper-pagination", 0, {
    autoAlpha: 0
})

TweenMax.to(".swiper-wrapper-second .swiper-slide", 0, {
    opacity: 0,
    x: "-80"
})

TweenMax.to(".swiper-wrapper-third .swiper-slide", 0, {
    opacity: 0,
    x: "-80"
})



btnCloseSlider.addEventListener("click", () => {

    TweenMax.to(".loading-bar", 0, {
        width: 0
    })

    TweenMax.to(".hold-text", 0.5, {
        delay: 0.5,
        autoAlpha: 1
    })

    TweenMax.to(".open-text", 0.5, {
        autoAlpha: 0
    })

    TweenMax.to(".swiper-showcase", 0.8, {
        autoAlpha: 0
    })

    TweenMax.to(".sliders", 0.8, {
        autoAlpha: 0
    })

    TweenMax.to(".swiper-pagination", 0.8, {
        autoAlpha: 0
    })

    TweenMax.staggerTo(".wrapper-showcase .swiper-slide", 0.8, {
        opacity: 0,
        x: "-80",
        ease: Expo.ease
    }, 0.3)

    TweenMax.to(btnCloseSlider, 0.8, {
        autoAlpha: 0
    })

    TweenMax.to(mainContainer, 0.8, {
        autoAlpha: 1,
        delay: 1
    })
});






const digitalArtImages = [
    
    {
        imageName: "Rocket Launch.",
        imageSize: "small",
        parent: ".slide-image-1",
        intensity: 0.1,
        image1: "../images/digital-art/Rocket_Launch_BW.png",
        image2: "../images/digital-art/Rocket_Launch.png",
        displacementImage: "../images/displacement-images/displacement.png",
        imagesRatio: 1.5,
        speedIn: 2.5,
        speedOut: 2.5
    },
    {
        imageName: "Flying Train.",
        imageSize: "large",
        parent: ".slide-image-2",
        intensity: 0.1,
        image1: "../images/digital-art/Magic_Street_BW.png",
        image2: "../images/digital-art/Magic_Street.png",
        displacementImage: "../images/displacement-images/displacement.png",
        imagesRatio: 0.5,
        speedIn: 2.5,
        speedOut: 2.5
    },
    {
        imageName: "Face Your Fears.",
        imageSize: "small",
        parent: ".slide-image-3",
        intensity: 0.1,
        image1: "../images/digital-art/Face_Your_Fears_BW.png",
        image2: "../images/digital-art/Face_Your_Fears.png",
        displacementImage: "../images/displacement-images/displacement.png",
        imagesRatio: 1.5,
        speedIn: 2.5,
        speedOut: 2.5
    },
    {
        imageName: "Tortoise.",
        imageSize: "large",
        parent: ".slide-image-4",
        intensity: 0.1,
        image1: "../images/digital-art/Tortoise_BW.png",
        image2: "../images/digital-art/Tortoise.png",
        displacementImage: "../images/displacement-images/displacement.png",
        imagesRatio: 0.5,
        speedIn: 2.5,
        speedOut: 2.5
    },
    {
        imageName: "Hagrid's Hut.",
        imageSize: "large",
        parent: ".slide-image-5",
        intensity: 0.1,
        image1: "../images/digital-art/Hagrids_Hut_BW.png",
        image2: "../images/digital-art/Hagrids_Hut.png",
        displacementImage: "../images/displacement-images/displacement.png",
        imagesRatio: 0.5,
        speedIn: 2.5,
        speedOut: 2.5
    },
    {
        imageName: "Pill.",
        imageSize: "medium",
        parent: ".slide-image-6",
        intensity: 0.1,
        image1: "../images/digital-art/Pill_BW.jpg",
        image2: "../images/digital-art/Pill.jpg",
        displacementImage: "../images/displacement-images/displacement.png",
        imagesRatio: 0.7,
        speedIn: 2.5,
        speedOut: 2.5
    },
    {
        imageName: "Moon.",
        imageSize: "small",
        parent: ".slide-image-7",
        intensity: 0.1,
        image1: "../images/digital-art/Moon_BW.png",
        image2: "../images/digital-art/Moon.png",
        displacementImage: "../images/displacement-images/displacement.png",
        imagesRatio: 1.5,
        speedIn: 2.5,
        speedOut: 2.5
    }
];



const uiUxImages = [
    
    {
        imageName: "App UI - Cloud Storage.",
        imageSize: "large",
        parent: ".slide-image-8",
        intensity: 0.1,
        image1: "../images/ui/Cloud_Storage_UI_BW.png",
        image2: "../images/ui/Cloud_Storage_UI.png",
        displacementImage: "../images/displacement-images/displacement.png",
        imagesRatio: 0.5,
        speedIn: 2.5,
        speedOut: 2.5
    },
    {
        imageName: "App UI - Nike Shop.",
        imageSize: "large",
        parent: ".slide-image-9",
        intensity: 0.1,
        image1: "../images/ui/Nike_Shop_UI_BW.png",
        image2: "../images/ui/Nike_Shop_UI.png",
        displacementImage: "../images/displacement-images/displacement.png",
        imagesRatio: 0.5,
        speedIn: 2.5,
        speedOut: 2.5
    },
    {
        imageName: "App UI - Task Management.",
        imageSize: "large",
        parent: ".slide-image-10",
        intensity: 0.1,
        image1: "../images/ui/Task_Management_UI_BW.png",
        image2: "../images/ui/Task_Management_UI.png",
        displacementImage: "../images/displacement-images/displacement.png",
        imagesRatio: 0.5,
        speedIn: 2.5,
        speedOut: 2.5
    },
    {
        imageName: "App UI - Drone Controller.",
        imageSize: "large",
        parent: ".slide-image-11",
        intensity: 0.1,
        image1: "../images/ui/Drone_Controller_UI_BW.png",
        image2: "../images/ui/Drone_Controller_UI.png",
        displacementImage: "../images/displacement-images/displacement.png",
        imagesRatio: 0.5,
        speedIn: 2.5,
        speedOut: 2.5
    }
];



function createDistEffect(image) {

    new hoverEffect({
        parent: document.querySelector(`${image.parent}`),
        intensity: image.intensity,
        image1: image.image1,
        image2: image.image2,
        displacementImage: image.displacementImage,
        imagesRatio: image.imagesRatio,
        speedIn: image.speedIn,
        speedOut: image.speedOut
    });
}

function createSlide(image, index, swiperWrapper) {

    const parentNum = image.parent.split("-").pop();

    const swiperSlide = document.createElement("div");
    swiperSlide.className = `swiper-slide ${image.imageSize} slide-image-${parentNum}`;

    swiperSlide.innerHTML = `
        <div class="image-info">
            <h2>${image.imageName}</h2>
        </div>
    `;

    swiperWrapper.appendChild(swiperSlide);
}

function createSlider(imagesArr, swiperWrapper) {

    imagesArr.forEach((image, index) => {
        createSlide(image, index, swiperWrapper);
        
        if (document.querySelector(`.slide-image-${index + 1}`)) {
            createDistEffect(image);
        }
    });
}



preloader();
createSlider(digitalArtImages, swiperWrapperSecond);
createSlider(uiUxImages, swiperWrapperThird);