window.addEventListener('DOMContentLoaded', function () {
    // Navbar event
    var nav = document.querySelector('.navbar');
    var bar = document.querySelector('.navbar__collapse--icon');
    var close = document.querySelector('.close');
    bar.onclick = function () {
        nav.classList.toggle('navbar-resposive')
    }
    close.onclick = function () {
        nav.classList.remove('navbar-resposive')
    }

    // Navbar

    var getWidth = document.getElementById('header');
    var dropdownIcon = document.querySelectorAll('.navbar__main--link-right');
    var backIcon = document.querySelectorAll('.dropdown-title-icon');
    var dropdownItem = document.querySelectorAll('.hasDropdown');
    var dropdownList = document.querySelectorAll('.dropdown-list');
    if (getWidth.clientWidth > 1199) {
        dropdownItem[0].addEventListener('mouseover', function () {
            dropdownList[0].classList.add('open')
        })
        dropdownItem[0].addEventListener('mouseout', function () {
            dropdownList[0].classList.remove('open')
        })
        dropdownItem[1].addEventListener('mouseover', function () {
            dropdownList[1].classList.add('open')
        })
        dropdownItem[1].addEventListener('mouseout', function () {
            dropdownList[1].classList.remove('open')
        })
    } else {
        dropdownIcon[0].onclick = function () {
            dropdownList[0].classList.add('navbar-resposive-2');
        }
        dropdownIcon[1].onclick = function () {
            dropdownList[1].classList.add('navbar-resposive-2');
        }
    }

    backIcon[0].addEventListener('click', function () {
        dropdownList[0].classList.remove('navbar-resposive-2');
    })
    backIcon[1].addEventListener('click', function () {
        dropdownList[1].classList.remove('navbar-resposive-2');
    })

    var sidebar = document.querySelector('.sidebar__inner--menu');
    var sidebarItem = document.querySelector('.sidebar__inner--link');
    var sidebarIcon = document.querySelector('.sidebar__inner--title');

    // sidebarIcon.onclick = function () {
    //     sidebar.classList.toggle('show')
    // }
    if (sidebarIcon) {
        sidebarIcon.addEventListener('click', function () {
            sidebar.classList.toggle('show')
        })
    }
    if (sidebarItem) {
        sidebarItem.onclick = function () {
            sidebar.classList.toggle('show')
        }
    }

}, false);