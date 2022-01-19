// short querySelector
function querySelector(el) {
    return document.querySelector(el);
};

$(function () {
    querySelector("[data-addfile]").classList.remove('active');

    function addfileHoverOver(e) {
        $("[data-addfile=add]").animate({ top: "40", opacity: 0, }, 200, () => {});
        $("[data-addfile=images]").animate({ top: "0", opacity: 1, }, 200, function () {
            querySelector("[data-addfile=img]").classList.add('active');
        });
    }

    function addfileHoverOut(e) {
        $("[data-addfile=add]").animate({ top: "0", opacity: 1, }, 200, function () { });
        $("[data-addfile=images]").animate({ top: "-40", opacity: 0, }, 200, function () {
            $("[data-addfile=img]").removeClass('active');
        });
    }
    addfileHoverOut();

    $("[data-addfile=btn]").hover(function () {
        addfileHoverOver();
    }, function () {
        addfileHoverOut();
    });

    function load(e) {
        let percent = $('[data-addfile=process-total]'), check;
        let interval = setInterval(function () {
            check = parseInt(percent.text());
            if (check < 100) {
                percent.html(function (_, num) {
                    return +num + Math.floor(Math.random() * 6);
                })
            } else {
                clearTimeout(interval);
                percent.text(100);
                // $("[data-addfile=process-bg]").finish();
                $("[data-addfile=process-bg]").stop();
                $("[data-addfile=process-bg]").animate({ height: '100%', }, 100, "linear", function () {
                    setTimeout(() => {
                        addfileHoverOut();
                        $("[data-addfile=hover]").animate({ opacity: 1, }, 200);
                        $("[data-addfile=process]").animate({ opacity: 0, }, 200, function () {
                            $("[data-addfile=process-bg]").animate({ height: '0%' }, 0);
                            percent.text(1);
                            $("[data-addfile=btn]").on('click', addfileClick);
                        });
                    }, 1000);
                });

            }
        }, 45)
    }

    $("[data-addfile=btn]").on('click', addfileClick);
    function addfileClick(e) {
        $("[data-addfile=btn]").off('click', addfileClick);
        $("[data-addfile=hover]").animate({ opacity: 0, }, 200);
        $("[data-addfile=process]").animate({ opacity: 1, }, 200, function () {
            $("[data-addfile=process-bg]").animate({ height: '100%', }, 2000, "linear");
            load();
        });
    }
});


$(function () {
    $('[data-graph]').removeClass('active')
    let img = querySelector('#graph__part-canvas'),
        canvas = querySelector('#canvas');

    // preview function mousemove
    img.addEventListener('mousemove', function (e) {
        let x, y;
        
        // chrome
        if (e.offsetX) {
            x = e.offsetX;
            y = e.offsetY;
        }
        // firefox
        else if (e.layerX) {
            x = e.layerX;
            y = e.layerY;
        }

        useCanvas(canvas, img, function () {

            // get image data
            var p = canvas.getContext('2d')
                .getImageData(x, y, 1, 1).data;
            // show preview color
            let hex = rgbToHex(p[0], p[1], p[2]);

            if (hex == '#ff4033') {
                $('[data-graph]').removeClass('active');
                $('[data-graph=part1], [data-graph=dot1]').addClass('active');
            } else if (hex == '#e6d3a3') {
                $('[data-graph]').removeClass('active');
                $('[data-graph=part2], [data-graph=dot2]').addClass('active');
            } else if (hex == '#8bb8a2') {
                $('[data-graph]').removeClass('active');
                $('[data-graph=part3], [data-graph=dot3]').addClass('active');
            } else if (hex == '#4c4e8e') {
                $('[data-graph]').removeClass('active');
                $('[data-graph=part4], [data-graph=dot4]').addClass('active');
            } else if (hex == '#432e2d') {
                $('[data-graph]').removeClass('active');
                $('[data-graph=part5], [data-graph=dot5]').addClass('active');
            } else {
                $('[data-graph]').removeClass('active');
            }
        });
    }, false);

    img.onmouseout = function (e) {
        $('[data-graph]').removeClass('active');
    };

    // canvas function
    function useCanvas(el, image, callback) {
        el.width = image.width; // img width
        el.height = image.height; // img height
        // draw image in canvas tag
        el.getContext('2d')
            .drawImage(image, 0, 0, image.width, image.height);
        return callback();
    }

    // convert rgba to hex 
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
});
