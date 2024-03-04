document.addEventListener('DOMContentLoaded', function () {
    // $(document).on("scroll", function() {
    //     var pageTop = $(document).scrollTop();
    //     var pageBottom = pageTop + $(window).height();
    //     var tags = $(".tag");
      
    //     for (var i = 0; i < tags.length; i++) {
    //       var tag = tags[i];
      
    //       if ($(tag).position().top < pageBottom) {
    //         $(tag).addClass("visible");
    //       } else {
    //         $(tag).removeClass("visible");
    //       }
    //     }
    //   });

    // var svgBulb = document.getElementsById('Layer_1');
    // var elementsBulb = svg.getElementsByClassName('cls-1');
    // for(var i = 0; i < elementsBulb.length; i++) {
    //     elements[i].setAttribute('fill', 'blue');
    // }

    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.target.tagName === 'SVG') {
                if (entry.isIntersecting) {
                    // entry.target.classList.remove('lightOff');
                    entry.target.classList.add('lightOn');
                    console.log(entry.target.classList);
                } else  {
                    entry.target.classList.remove('lightOn');
                    // entry.target.classList.add('lightOff');
                }
            } else if (entry.target.tagName === 'P') {
                if (entry.isIntersecting) {
                    entry.target.classList.add('showP');
                } else  {
                    entry.target.classList.remove('showP')
                }
            } else if (entry.target.tagName === 'SECTION') {
                if (entry.isIntersecting) {
                    entry.target.classList.add('showSection');
                    entry.target.classList.remove('hiddenSection');

                } else  {
                    entry.target.classList.remove('showSection');
                }
            }
        });
    })
    const hiddenP = document.querySelectorAll('.hiddenP');
    const hiddenSection = document.querySelectorAll('.hiddenSection');
    hiddenP.forEach((el) => observer.observe(el))
    hiddenSection.forEach((el) => observer.observe(el))
})