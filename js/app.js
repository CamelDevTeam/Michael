$(function() {

    let style = "analog"
    let localeTime = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"}));

    //let localeTime = new Date();
    if(style == "analog"){

        setInterval( function() {
            let localeTime = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"}));

            var seconds = localeTime.getSeconds();
            var sdegree = seconds * 6;
            var srotate = "rotate(" + sdegree + "deg)";
            
            $("#sec").css({ "transform": srotate });
        }, 1000 );
     
        setInterval( function() {
            var hours = localeTime.getHours();
            var mins = localeTime.getMinutes();
            var hdegree = hours * 30 + (mins / 2);
            var hrotate = "rotate(" + hdegree + "deg)";
            
            $("#hour").css({ "transform": hrotate});
        }, 1000 );

        setInterval( function() {
            var mins = localeTime.getMinutes();
            var mdegree = mins * 6;
            var mrotate = "rotate(" + mdegree + "deg)";
            
            $("#min").css({ "transform" : mrotate });
        }, 1000 );
    }

    if(style == "digital"){
        clock = $("#clock").FlipClock(localeTime, {
            clockFace: 'TwelveHourClock'
        });
    }
        
});