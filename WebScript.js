$(function () {

    const clockSVG = '<svg id="clock" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">' +
        '<g id="face">' +
        '<circle class="circle" cx="300" cy="300" r="253.9"/>' +
        '<path class="hour-marks" d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"/>' +
        '<circle class="mid-circle" cx="300" cy="300" r="16.2"/>' +
        '</g>' +
        '<g id="hour">' +
        '<path class="hour-arm" d="M300.5 298V142"/>' +
        '<circle class="sizing-box" cx="300" cy="300" r="253.9"/>' +
        '</g>' +
        '<g id="minute">' +
        '<path class="minute-arm" d="M300.5 298V67"/>' +
        '<circle class="sizing-box" cx="300" cy="300" r="253.9"/>' +
        '</g>' +
        '<g id="second">' +
        '<path class="second-arm" d="M300.5 350V55"/>' +
        '<circle class="sizing-box" cx="300" cy="300" r="253.9"/>' +
        '</g>' +
        '</svg>';
        const Clocks = [
            ['Los Angeles', 11],
            ['Singapore', 0],
            ['Hong Kong', 0],
            ['Rotterdam', -6],
            ['Port Klang', 0],
            ['Manila', 0],
            ['Mundra', -2.5],
            ['Savannah', 2],
            ['Jeddah', 5],
            ['NewJeddah', -3],
            ['Houston', 1],
            ['Moscow', -5],
            ['Tokyo', 0],
            ['Cartegena', 0],
            ['Long Beach', 11]
        ];
    let ul = $('nav ul');    
    Clocks.forEach(
        (clock) => {
            ul.append($('<li><div class="clockbox" tz="' + clock[1] + '">'+
            '<h3>' + clock[0] + '</h3></div></li>'));
        }
    )
    $('.clockbox').append($(clockSVG));
    $('.clockbox').each((index, element) => {
        if ($(element).attr('tz') !== undefined)
        adjustTime($(element),0);
    });
    setInterval( 
          runTheClock
    ,1000);  
});

function adjustTime(clockbox, min) {
    let hr = clockbox.attr('tz') + min/60;
    let hrPosition = (hr * 360 / 12);
    clockbox.find('svg').find("#hour").css("transform", "rotate(" + hrPosition + "deg)");
    //    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";

}

function runTheClock() {

    var date = new Date();
    // console.log(date);

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    // console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

    let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
    let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
    let secPosition = sec * 360 / 60;

    /* hrPosition = hrPosition+(3/360); 
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6; */

    // $("svg").find("#hour").css("transform", "rotate(" + hrPosition + "deg)");
    $("svg").find("#minute").css("transform", "rotate(" + minPosition + "deg)");
    $("svg").find("#second").css("transform", "rotate(" + secPosition + "deg)");
    // MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    // SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
    $('.clockbox').each((index, element) => {
        if ($(element).attr('tz') !== undefined)
        adjustTime($(element),min);
    });
}

function runTheClock8() {

    var date8 = new Date();

    let hr8 = date8.getHours8();
    let min8 = date8.getMinutes8();
    let sec8 = date8.getSeconds8();
    console.log("Hour: " + hr8 + " Minute: " + min8 + " Second: " + sec8);

    let hrPosition8 = (hr * 360 / 12) + (min * (360 / 60) / 12);
    let minPosition8 = (min * 360 / 60) + (sec * (360 / 60) / 60);
    let secPosition8 = sec * 360 / 60;

    /* hrPosition = hrPosition+(3/360); 
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6; */


    HOURHAND8.style.transform = "rotate(" + hrPosition8 + "deg)";
    MINUTEHAND8.style.transform = "rotate(" + minPosition8 + "deg)";
    SECONDHAND8.style.transform = "rotate(" + secPosition8 + "deg)";
}
/* See this code right here called setInterval(), what that does is a method 
   which repeatedly calls a function or executes a code snippet, with a fixed time delay 
   between each call. Returns an interval. Inside this metthod of set interval
   we have our function, as well as the number of milliseconds it should run by   */

//var interval = setInterval(runTheClock, 1000);
//var interval8 = setInterval(runTheClock8, 1000);