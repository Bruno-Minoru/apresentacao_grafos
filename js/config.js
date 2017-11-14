window.Config = function(option) {
    if(option == 'config-particles') {
        let partJson = {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: !0,
                        value_area: 800
                    }
                },
                color: {
                    value: "#1b263b"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: .8,
                    random: !1,
                    anim: {
                        enable: !1,
                        speed: 1,
                        opacity_min: .1,
                        sync: !1
                    }
                },
                size: {
                    value: 8,
                    random: !0,
                    anim: {
                        enable: !1,
                        speed: 40,
                        size_min: .1,
                        sync: !1
                    }
                },
                line_linked: {
                    enable: !0,
                    distance: 150,
                    color: "#415a77",
                    opacity: .75,
                    width: 3.5
                },
                move: {
                    enable: !0,
                    speed: 6,
                    direction: "none",
                    random: !1,
                    straight: !1,
                    out_mode: "out",
                    bounce: !1,
                    attract: {
                        enable: !1,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: !1,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: !1,
                        mode: "push"
                    },
                    resize: !0
                }
            },
            retina_detect: !0
        }

        let uri = "data:text/plain;base64,"+window.btoa(JSON.stringify(partJson))

        particlesJS.load('particles-js', uri)

        window.SlideConfig = window.SlideConfig || {}

        SlideConfig.stopParticles = function() {
            pJSDom[0].pJS.particles.move.enable = false;
        }

        SlideConfig.restartParticles = function() {
            pJSDom[0].pJS.particles.move.enable = true;
            pJSDom[0].pJS.fn.particlesRefresh();
        }
    }
}