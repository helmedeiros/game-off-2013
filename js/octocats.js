$(document).ready(function() {

    $("#heisencat").click(function() {
        $.fancybox({
            //'orig'			: $(this),
            'padding': 0,
            'href': 'icon/octocats/heisencat.png',
            'title': 'The heisencat by tonyjaramilo',
            'transitionIn': 'elastic',
            'transitionOut': 'elastic'
        });
    });

    $("#plumber").click(function() {
        $.fancybox({
            //'orig'			: $(this),
            'padding': 0,
            'href': 'icon/octocats/plumber.jpg',
            'title': 'The plumber by tonyjaramilo',
            'transitionIn': 'elastic',
            'transitionOut': 'elastic'
        });
    });

    $("#linktocat").click(function() {
        $.fancybox({
            //'orig'			: $(this),
            'padding': 0,
            'href': 'icon/octocats/linktocat.jpg',
            'title': 'The linktocat by tonyjaramilo',
            'transitionIn': 'elastic',
            'transitionOut': 'elastic'
        });
    });
});
