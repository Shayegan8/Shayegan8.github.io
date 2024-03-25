// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later

addEventListener('resize', function() {

    const element = document.querySelector('.oscroll');
    if (element.scrollWidth > element.clientWidth) {
        element.style.overflowX = 'scroll';
    } else {
        element.style.overflowX = 'auto';
    }
});

// @license-end