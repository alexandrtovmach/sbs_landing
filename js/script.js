function init() {
    AOS.init({
        offset: 300,
        duration: 400
    });

    new Waypoint({
        element: getBCL('sticks'),
        handler: function(direction) {
            getBCL('sticks').classList.toggle('startAnim')
        },
        offset: '10%'
    })
    new Waypoint({
        element: getBCL('whiskey_wrapper'),
        handler: function(direction) {
            const ice = getBCL('icecube_wrapper');
            const glass = getBCL('glass');
            if (glass.style.backgroundImage) {
                glass.style = null;
            } else {
                glass.style.backgroundImage = "url('./resources/images/whiskey3.png')";
            }
    
            if (ice.style.bottom) {
                ice.style = null;
            } else {
                ice.style.bottom = `${glass.clientHeight*0.4}px`;
                ice.style.opacity = '1';
                setTimeout(() => {
                    ice.style.opacity = '0';
                }, 500)
            }
        },
        offset: '75%'
    })

    window.addEventListener('scroll', plateAnimation)
}

function plateAnimation() {
    getBCL('plate_crash_wrapper').classList.add('startAnim');
    let plate = new Audio('./resources/plate_break.mp3');
    setTimeout(() => {
        plate.play();
    }, 400)
    window.removeEventListener('scroll', plateAnimation)
}

function getBCL(cls) {
    return document.getElementsByClassName(cls)[0]
}