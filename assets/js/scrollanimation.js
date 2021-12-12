var control = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.portfolio'
})
.setClassToggle('.main-page', 'fadeout')
.addTo(control);

var scene2 = new ScrollMagic.Scene({
    triggerElement: '.introduction'
})
.setClassToggle('.portfolio', 'fadein')
.addTo(control);

var scene3 = new ScrollMagic.Scene({
    triggerElement: '.services'
})
.setClassToggle('.portfolio', 'fadeout')
.addTo(control);

var scene3 = new ScrollMagic.Scene({
    triggerElement: '.scene3trigger'
})
.setClassToggle('.services', 'fadein')
.addTo(control);

var scene4 = new ScrollMagic.Scene({
    triggerElement: '.contacts'
})
.setClassToggle('.services', 'fadeout')
.addTo(control);

var scene5 = new ScrollMagic.Scene({
    triggerElement: '.scene5trigger'
})
.setClassToggle('.contacts', 'fadein')
.addTo(control);