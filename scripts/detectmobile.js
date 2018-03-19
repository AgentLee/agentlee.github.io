function detectmobile() 
{ 
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        var bgimg = document.getElementById('decor');
        bgimg.style.background = 'none';
    }
}