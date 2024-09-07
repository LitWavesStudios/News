//Portugues
$(function(){
    $(".pt-br").click(function(){
        $(".welcome").text("Seja muito bem-vindo(a)!");
        $(".subtitle").text("Atualizamos constantemente os novos projetos da LitWaves!");
        $(".post-item a h2").text("Primeiro Jogo!");
        $(".post-item a .post-content p").text("A gameplay é um misto de ação e sobrevivência, com um toque de Roguelite, tudo com uma visão top-down em Pixel Art... Leia Mais");
        $(".post-item a .post-content footer").text("Data da postagem: 07/09/24");

        $(".post .post-item").eq(1).find("h2").text("Nossas redes sociais!");

        $(".container").eq(1).text("Seja muito bem-vindo(a)!");
    });
});

// English
$(function(){
    $(".en").click(function(){
        $(".welcome").text("Welcome!");
        $(".subtitle").text("We constantly update the new projects from LitWaves!");
        $(".post-item a h2").text("Our First Game!");
        $(".post-item a .post-content p").text("The gameplay is a mix of action and survival, with a touch of Roguelite, all in a top-down Pixel Art view... Read More");
        $(".post-item a .post-content footer").text("Post date: 07/09/24");

        $(".post .post-item").eq(1).find("h2").text("Our Social Media!");
    });
});

