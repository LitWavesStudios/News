//Portugues
$(function(){
    $(".pt-br").click(function(){
        $(".welcome").text("Seja muito bem-vindo(a)!");
        $(".subtitle").text("Atualizamos constantemente os novos projetos da LitWaves!");
        $(".post .post-item").eq(0).find("h2").text("Comunidade da LitWaves!");
        $(".post .post-item").eq(0).find("p").text("Estamos criando uma comunidade no Discord! Na comunidade, disponibilizaremos links exclusivos para testes do jogo, além de oferecer bate-papos com os desenvolvedores e muito mais!");
        $(".post-item a h2").text("Mapa do Jogo!");
        $(".post-item a .post-content p").html("O mapa do jogo é um ambiente dinâmico e expansivo dividido em áreas temáticas interconectadas... <span style='font-weight: 700;'>Leia Mais</span>");
        $(".post-item a .post-content footer").text("Data da postagem: 09/09/24");

        $(".post .post-item").eq(2).find("h2").text("Nossas redes sociais!");

        $(".container").eq(1).text("Seja muito bem-vindo(a)!");
    });
});

// English
$(function(){
    $(".en").click(function(){
        $(".welcome").text("Welcome!");
        $(".subtitle").text("We constantly update the new projects from LitWaves!");
        $(".post .post-item").eq(0).find("h2").text("LitWaves Community!");
        $(".post .post-item").eq(0).find("p").text("We are creating a community on Discord! In the community, we will provide exclusive links for game testing, as well as offer chats with the developers and much more!");
        $(".post-item a h2").text("Game Map!");
        $(".post-item a .post-content p").html("The game map is a dynamic and expansive environment divided into interconnected thematic areas... <span style='font-weight: 700;''>Read More</span>");
        $(".post-item a .post-content footer").text("Post date: 09/09/24");

        $(".post .post-item").eq(2).find("h2").text("Our Social Media!");
    });
});

