//Portugues
$(function(){
    $(".pt-br").click(function(){
        $(".welcome").text("Seja muito bem-vindo(a)!");
        $(".subtitle").text("Atualizamos constantemente os novos projetos da LitWaves!");
        $(".post .post-item a").first().find("h2").text("Comunidade da LitWaves!");
        $(".post .post-item a").first().find("p").html("A Comunidade já está disponivel! <span style='font-weight: 700;'>Acesse aqui.</span>");
        $(".post-item").eq(1).find("h2").text("Mapa do Jogo!");
        $(".post-item").eq(1).find(".post-content p").html("O mapa do jogo é um ambiente dinâmico e expansivo dividido em áreas temáticas interconectadas... <span style='font-weight: 700;'>Leia Mais</span>");
        $(".post-item a .post-content footer").text("Data da postagem: 09/09/24");

        $(".post .post-item").eq(2).find("h2").text("Nossas redes sociais!");
    });
});

// English
$(function(){
    $(".en").click(function(){
        $(".welcome").text("Welcome!");
        $(".subtitle").text("We constantly update the new projects from LitWaves!");
        $(".post .post-item a").first().find("h2").text("LitWaves Community!");
        $(".post .post-item a").first().find("p").html("The Community is now available! <span style='font-weight: 700;'>Access it here.</span>");
        $(".post-item").eq(1).find("h2").text("Game Map!");
        $(".post-item").eq(1).find(".post-content p").html("The game map is a dynamic and expansive environment divided into interconnected thematic areas... <span style='font-weight: 700;''>Read More</span>");
        $(".post-item a .post-content footer").text("Post date: 09/09/24");

        $(".post .post-item").eq(2).find("h2").text("Our Social Media!");
    });
});

