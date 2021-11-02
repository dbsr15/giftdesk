var doc = document,
    win = window;

var hidden = 'is-hidden',
    visible = 'is-visible',
    active = 'is-active',
    inactive = 'is-inactive',
    transition = 'has-transition';

var tilt_section = doc.getElementsByClassName('js-tilts')[0];

var tilt = doc.getElementsByClassName('js-tilt-block');

var shadow_color = 'rgba(0,0,0,.4)',
    shadow_size_spread = '30px 5px';

var box = [],
    m_x,
    m_y,
    half_tilt_w,
    half_tilt_h,
    x_num,
    y_num,
    count_mouse_away = [];

for (var x = 0; x < tilt.length; x++){

    ( function(_x){

        box.push( tilt[_x].querySelectorAll('a')[0] );

        function getDimensions(){
            half_tilt_w = box[_x].offsetWidth/2;
            half_tilt_h = box[_x].offsetHeight/2;
        }

        getDimensions();
        win.addEventListener('resize', getDimensions);

        tilt[_x].addEventListener('mouseenter', isTracking);

        function isTracking(){
            tilt[_x].removeEventListener('mouseenter', isTracking);
            tilt[_x].addEventListener('mousemove', trackMouse);
            tilt[_x].addEventListener('mouseleave', waitBeforeStop);
            tilt[_x].classList.remove(inactive);
            setTimeout( function(){
                tilt[_x].classList.remove(transition);
            }, 150);
        }

        function trackMouse(e){
            m_x = e.clientX - tilt[_x].getBoundingClientRect().left - half_tilt_w;
            m_y = e.clientY - tilt[_x].getBoundingClientRect().top - half_tilt_h;

            x_num = Math.round((m_x / half_tilt_w) * 15);
            y_num = Math.round((m_y / half_tilt_h) * 15);

            box[_x].style.boxShadow = shadow_color + ' ' + -x_num + 'px ' + -y_num + 'px ' + shadow_size_spread;
            box[_x].style.transform = 'rotateX(' + -y_num + 'deg) rotateY(' + x_num + 'deg)';
        }

        function waitBeforeStop(){
            count_mouse_away.splice([_x], 0, setTimeout( function(){
                tilt[_x].addEventListener('mouseenter', cancelLeave);
                notTracking();
            }, 500) );
        }

        function cancelLeave(){
            win.clearTimeout(count_mouse_away[_x]);
        }

        function notTracking(){
            tilt[_x].removeEventListener('mousemove', trackMouse);
            tilt[_x].addEventListener('mouseenter', isTracking);
            tilt[_x].classList.add(inactive);
            tilt[_x].classList.add(transition);
        }

    })(x)

}