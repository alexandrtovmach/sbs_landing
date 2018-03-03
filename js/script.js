function init() {
    AOS.init({
        offset: 300,
        duration: 400
    });

    new Waypoint({
        element: getBCL('knife_wrapper'),
        handler: function(direction) {
            getBCL('knife_wrapper').classList.toggle('startAnim')
        },
        offset: '75%'
    })
    new Waypoint({
        element: getBCL('sticks'),
        handler: function(direction) {
            getBCL('sticks').classList.toggle('startAnim')
        },
        offset: '50%'
    })
    new Waypoint({
        element: getBCL('whiskey_wrapper'),
        handler: function(direction) {
            const ice = getBCL('icecube_wrapper');
            const glass = getBCL('whiskey_wrapper');
            if (ice.style.position) {
                ice.style = null;
            } else {
                ice.style.position = 'absolute';
                ice.style.top = window.pageYOffset + ice.clientHeight/2 + 'px';
                ice.style.transition = 'transform 1s ease-in, opacity 1s 1s';
                ice.style.transform = 'translateY(' + (glass.offsetTop + glass.clientHeight/2 + 20*2 + ice.clientHeight) + 'px)';
                ice.style.opacity = '0';
            }
            // ice.classList.toggle('startAnim');
            glass.classList.toggle('startAnim')
        },
        offset: '75%'
    })

    setTimeout(plateAnimation, 2000)
}

function plateAnimation() {
    getBCL('plate_crash_wrapper').classList.add('startAnim');
    let plate = new Audio('./resources/plate_break.mp3');
    setTimeout(() => {
        plate.play();
    }, 400)
}

function getBCL(cls) {
    return document.getElementsByClassName(cls)[0]
}