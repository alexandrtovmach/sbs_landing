function init() {
    AOS.init({
        offset: 300,
        duration: 400
    });

    new Waypoint.Inview({
        element: getBCL('knife_wrapper'),
        entered: function(direction) {
            getBCL('knife_wrapper').classList.add('startAnim')
        },
        exited: function(direction) {
            getBCL('knife_wrapper').classList.remove('startAnim')
        }
    })
    new Waypoint.Inview({
        element: getBCL('stick_wrapper'),
        enter: function(direction) {
            getBCL('stick_wrapper').classList.add('startAnim')
        },
        exited: function(direction) {
            getBCL('stick_wrapper').classList.remove('startAnim')
        }
    })
    new Waypoint.Inview({
        element: getBCL('stick_textWrapper'),
        enter: function(direction) {
            getBCL('stick_textWrapper').classList.add('startAnim')
        },
        exited: function(direction) {
            getBCL('stick_textWrapper').classList.remove('startAnim')
        }
    })
    new Waypoint.Inview({
        element: getBCL('whiskey_wrapper'),
        enter: function(direction) {
            getBCL('whiskey_wrapper').classList.add('startAnim')
        },
        exited: function(direction) {
            getBCL('whiskey_wrapper').classList.remove('startAnim')
        }
    })

    window.addEventListener('scroll', (event) => {
        console.log(event)
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