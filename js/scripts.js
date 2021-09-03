/*!
* Start Bootstrap - Grayscale v7.0.3 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


});

// setTimeout(init,100);
// function init(){
// 	var obox = document.getElementById('box'),
// 		aDiv = obox.getElementsByTagName('div');
		
// 		for (var i = 0; i < aDiv.length; i++) {
// 			aDiv[i].style.background = "url(images/"+(i+1)+".jpg) center/cover";
// 			aDiv[i].style.transform = "rotateY("+(i*36)+"deg) translate3d(0,0,350px)";
// 			aDiv[i].style.transition = "transform 1s "+(aDiv.length-i)*0.2+"s";
// 		}
// 	var sX,
// 		sY,
// 		nX,
// 		nY,
// 		desX = 0,
// 		desY = 0,
// 		tX = 0,
// 		tY = 15,
// 		index = 0;//滚轮初始值
// 	document.onmousedown = function(e){
// 		clearInterval(obox.timer);
// 		e = e || window.event;
// 		var sX = e.clientX,
// 			sY = e.clientY;
// 			this.onmousemove = function(e){
// 				e = e || window.event;
// 				var nX = e.clientX,
// 					nY = e.clientY;
// 					 // 当前点的坐标和前一点的坐标差值
// 					desX = nX - sX;
// 					desY = nY - sY;
//                     tX += desX*0.1; 
//                     tY += desY*0.1;

// 					obox.style.transform = "rotateX("+(-tY)+"deg) rotateY("+tX+"deg)";
// 					sX = nX;
// 					sY = nY;
// 			}
// 			this.onmouseup = function(){
// 				this.onmousemove = this.onmouseup = null;
// 				obox.timer = setInterval(function(){
// 					desX *= 0.95;
// 					desY *= 0.95;
// 					tX += desX*0.1;
// 					tY += desY*0.1;
// 					obox.style.transform = "rotateX("+(-tY)+"deg) rotateY("+tX+"deg)";
// 					if (Math.abs(desX)<0.5 && Math.abs(desY)<0.5) {
// 						clearInterval(obox.timer);
// 					}
// 				},13);
// 			}
// 		return false;
// 	}
// 	//滚轮放大缩小
// 	// mousewheel(document,function(e){
// 	// 	e = e || window.event;
// 	// 	var d = e.wheelDelta/120 || -e.detail/3;
// 	// 		if (d>0) {
// 	// 			index-=20;
// 	// 		}else{
// 	// 			index+=30;
// 	// 		}
// 	// 		(index<(-1050)&&(index=(-1050)));
// 	// 	document.body.style.perspective = 1000 + index + "px";
// 	// })
// 	// function mousewheel(obj,fn){
// 	// 	document.onmousewheel===null?obj.onmousewheel=fn:addEvent(obj,"DOMMouseScroll",fn)
// 	// }
// 	// function addEvent(obj,eName,fn){
// 	// 	obj.attachEvent?obj.attachEvent("on"+eName,fn):obj.addEventListener(eName,fn);
// 	// }
// }

