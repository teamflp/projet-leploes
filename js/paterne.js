$(document).ready(function() {

    /************************************************************************************************************
     *                            SECTION BOUTON HAUT DE PAGE                                                   *   
     ************************************************************************************************************/

    // On crée le bouton haut de page
    $('body').append('<div id="btnscrolltop"><a classe="btn-scroll" href="index.php#top" title="Haut de page" ><i class="fa fa-chevron-up-alt fa-3x"></i></a></div>');
    $(window).scroll(function() {
        // déclaration de la variable poScroll ( position du bouton retour en haut de page)
        posScroll = $(document).scrollTop();

        /* Condition ternaire.
         * Lorsque le défilement va en dessous de 250px le bouton haut de page apparait.
         * dans le cas contraire le bouton devient invisible.
         * cette animation s'effectue avec une durée de 600ms
         * ce qui donne une certaine fluidité qaund on click sur le bouton.
         */
        posScroll > 50 ? $('#btnscrolltop').fadeIn(600) : $('#btnscrolltop').fadeOut(600);

        $('#btnscrolltop').click(function() {
            /* Bouton haut de page visible
             * Une fois qu'on effectue un click sur le bouton, l'animation vers le haut de page
             * se fait avec une durée de 1000ms. Ce qui rend le défilement fluide.
             * On fait une animation fluide sur le défilement de la page vers le haut */
            $('html, body').animate({ scrollTop: 0 }, 1000);
            return false;
        });

        $('html, body').bind("scroll mousedown DOMMouseScroll mousewheel keyup", function() {
            /* on arrete l'animation quand on click sur la souris, sur le roller de la souris,
             * sur le clavier ou sur n'importe quel zone de l'écran. */
            $('html, body').stop();
        });
    });


    /************************************************************************************************************
     *                                          SECTION ANCRE                                                   *   
     ************************************************************************************************************/

    // défilement fluide sur les liens HTML vers les ancres avec une durée de 1500 ms
    $(function() {
        $("a[href*='#']:not([href='#'])").click(function() {
            if (location.hostname == this.hostname && this.pathname.replace(/^\//, "")) {
                var anchor = $(this.hash);
                anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");

                if (anchor.length) {
                    $('html, body').animate({ scrollTop: anchor.offset().top }, 1500);
                }
            }
        });
    });


    /************************************************************************************************************
     *                                          FIN SECTION ANCRE                                               *   
     ************************************************************************************************************/
});


// Popover
/*$(function () {
    $('[data-toggle="popover"]').popover()
})
*/

/*On sélectionne tous les éléments avec un attribut data-toggle="popover"*/
$(document).ready(function(){
  $('[data-toggle="popover"]').popover(); 
});


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});