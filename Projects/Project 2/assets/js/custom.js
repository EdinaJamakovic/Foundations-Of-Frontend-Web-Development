$(document).ready(function(){
    var app = $.spapp({
        defaultView: '#landingPage',
        templateDir: './.html/'
    });

    app.run();
})