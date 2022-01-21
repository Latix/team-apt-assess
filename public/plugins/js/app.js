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

$(() => {
    let footer_list = document.querySelector('.footer-dropdown-list');

    footer_list.querySelectorAll('a').forEach((item, index) => {
        if (index !== 0) {
            item.classList.remove('w--current');
        }
    });
});
