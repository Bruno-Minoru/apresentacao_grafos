window.Config = function(option) {
	let partJson = {}
    if(option == 'config-particles') {
        partJson = {
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
    } else if(option == 'config-particles2') {
		partJson = {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: !0,
                        value_area: 800
                    }
                },
                color: {
                    value: "#eee"
                },
                shape: {
                    type: "polygon",
                    stroke: {
                        width: 0,
                        color: "#fff"
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
                    color: "#768C9B",
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
	} else if(option == 'config-nyan') {
		partJson = {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": false,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 8,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 14,
      "direction": "left",
      "random": false,
      "straight": true,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
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