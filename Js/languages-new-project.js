$(function(){
    $(".pt-br").click(function(){
        // Atualiza o texto de boas-vindas e subtítulo
        $(".welcome").text("Seja muito bem-vindo(a)!");
        $(".subtitle").text("Aqui você vai encontrar mais informações sobre o nosso projeto!");

        // Atualiza o título da seção "Sobre do Jogo"
        $(".container").children().eq(5).text("Sobre do Jogo:");

        // Atualiza o conteúdo da seção com HTML formatado
        $(".container").children().eq(6).html(
            "A gameplay é um misto de ação e sobrevivência, com um toque de Roguelite, tudo com uma visão top-down em Pixel Art.<br><br>" +
            "No jogo (ainda sem nome definido), a cada onda de inimigos derrotada, você ganha cartas de habilidades que permitem aprimorar " +
            "tanto seu personagem quanto suas armas.<br><br>" +
            "A mecânica central gira em torno do sistema de empilhamento de cartas: quanto mais cartas você acumular, mais poderosas e eficazes " +
            "se tornam suas habilidades. Isso também permite que você melhore as mesmas cartas ao longo do tempo, tornando o jogo cada vez mais " +
            "estratégico e envolvente!"
        );

        // Atualiza o aviso na galeria
        $(".gallery").children().eq(0).text("Aviso: o jogo está passando por uma repaginada no visual, troca de paleta de cores, novos inimigos e personagens. Algumas artes poderão mudar ao longo do desenvolvimento do jogo, as artes que estão aqui são artes bases e apenas para demonstração.");

        // Atualiza o título da seção "Cartas de Habilidades"
        $(".item .content h2").eq(0).text("Cartas de Habilidades");

        // Atualiza o conteúdo da seção "Cartas de Habilidades"
        $(".item").children().eq(3).find("p").html(
            "Em nosso jogo, as cartas desempenham um papel crucial, cada uma oferecendo habilidades únicas que podem transformar a experiência de jogo do jogador.<br><br>" +
            "Cada carta possui um número específico que indica a quantidade máxima de vezes que o jogador pode empilhá-la em suas mãos.<br><br>" +
            "À medida que avança na gameplay, o jogador terá a oportunidade de empilhar cartas, e quando atinge o nível máximo de uma carta específica, ela é aprimorada. Esse aprimoramento faz com que a carta se torne mais poderosa e adicione buffs adicionais, tornando suas habilidades ainda mais eficazes.<br><br>" +
            "Com essas cartas, o jogador poderá criar suas builds de várias formas e variedades, permitindo personalizar sua abordagem para enfrentar todos os inimigos e explorar o mapa de maneira única. A diversidade de combinações de cartas possibilita uma grande flexibilidade estratégica, oferecendo múltiplas maneiras de superar desafios e avançar no jogo.<br><br>" +
            "Atualmente, já adicionamos várias cartas ao jogo, e estamos trabalhando arduamente para expandir nosso repertório. Nossa meta é adicionar pelo menos 30 novas cartas até o final do mês, aumentando a diversidade e as estratégias disponíveis para o jogador. Fique atento às atualizações e prepare-se para explorar um vasto conjunto de cartas e suas habilidades aprimoradas!"
        );

        // Atualiza o título da seção "Armas e Coletáveis"
        $(".item .content h2").eq(1).text("Armas e Coletáveis");

        // Atualiza o conteúdo da seção "Armas e Coletáveis"
        $(".item").children().eq(7).find("p").text("No jogo, as armas são variadas e cada uma possui suas próprias peculiaridades e status, proporcionando uma ampla gama de opções para o jogador. Entre elas, destacamos a arma base, uma arma branca que se revela crucial em momentos extremos. Ela é ideal para situações onde a rapidez e a precisão são essenciais, ajudando o jogador a enfrentar desafios de forma eficaz.");
        $(".content h4").eq(0).text("Como obter novas armas?");
        $(".content p").eq(2).text("As novas armas estão estrategicamente espalhadas pelo mapa do jogo. À medida que o jogador desbloqueia novas áreas, ele ganha a oportunidade de descobrir e adquirir essas armas. Explorar o ambiente e avançar para regiões inexploradas é a chave para enriquecer seu arsenal e encontrar novos equipamentos que podem ser decisivos em batalhas.");
        $(".content h4").eq(1).text("E as munições?");
        $(".content p").eq(3).text("As munições também estão distribuídas por todo o mapa. O jogador pode encontrá-las em locais como dentro de casas, latas de lixo e caixas espalhadas pelo cenário. Vale ressaltar que as munições são limitadas, portanto, é fundamental usá-las com sabedoria. Gerenciar a quantidade de munição e economizar para momentos críticos é crucial, pois ficar sem munição na hora certa pode ser desastroso.")
        // Atualiza o título da seção "Inspirações"
        $(".item .content h2").eq(2).text("Inspirações");

        // Atualiza o conteúdo da seção "Inspirações"
        $(".item").children().eq(9).find("p").html(
            "<span style='font-size: medium; font-weight: 700;'>Coraline / Little Nightmares / Bloodborne</span> inspiram a ambientação e estética;<br><br>" +
            "<span style='font-size: medium; font-weight: 700;'>Soul Knight / Hades / Cod Black Ops Cold War - Zombie mode</span> inspiram mecânicas remanescentes do gênero Roguelite e Power Ups ao fim de cada wave."
        );

        // Atualiza o texto da seção "Acabou?"
        $(".item .content h2").eq(3).text("Acabou?");
        $(".item .content").last().find("p").html(
            "Obrigado por ler até aqui, fique atento às novidades em nosso perfil no <a href='https://bsky.app/profile/litwavesstudios.bsky.social'><span style='font-size: medium; font-weight: 700; cursor: pointer; text-decoration: none; color: inherit;'>BlueSky</span></a>, estamos sempre atualizando e mostrando o andamento e desenvolvimento do jogo. E não, não acabou! Temos mais novidades pela frente..."
        );

        // Atualiza o texto do botão
        $(".button-content button").text("Voltar para as novidades");
    });
});


$(function(){
    $(".en").click(function(){
        // Updates welcome text and subtitle
        $(".welcome").text("Welcome!");
        $(".subtitle").text("Here you'll find more information about our project!");

        // Updates the title of the "About the Game" section
        $(".container").children().eq(5).text("About the Game:");

        // Updates the content of the section with formatted HTML
        $(".container").children().eq(6).html(
            "The gameplay is a mix of action and survival, with a touch of Roguelite, all with a top-down view in Pixel Art.<br><br>" +
            "In the game (still unnamed), with each wave of enemies defeated, you earn skill cards that allow you to upgrade both your character and your weapons.<br><br>" +
            "The core mechanic revolves around the card stacking system: the more cards you accumulate, the more powerful and effective your skills become. This also allows you to improve the same cards over time, making the game increasingly strategic and engaging!"
        );

        // Updates the notice in the gallery
        $(".gallery").children().eq(0).text("Notice: the game is undergoing a visual overhaul, including a color palette change, new enemies, and characters. Some art may change during the game's development; the art here is base art and only for demonstration purposes.");

        // Updates the title of the "Skill Cards" section
        $(".item .content h2").eq(0).text("Skill Cards");

        // Updates the content of the "Skill Cards" section
        $(".item").children().eq(3).find("p").html(
            "In our game, cards play a crucial role, each offering unique abilities that can transform the player's gaming experience.<br><br>" +
            "Each card has a specific number that indicates the maximum amount of times the player can stack it in their hands.<br><br>" +
            "As you progress in the gameplay, the player will have the opportunity to stack cards, and when reaching the maximum level of a specific card, it gets upgraded. This upgrade makes the card more powerful and adds additional buffs, making your abilities even more effective.<br><br>" +
            "With these cards, players can create their builds in various ways and varieties, allowing for a customized approach to face all enemies and explore the map in a unique way. The diversity of card combinations offers great strategic flexibility, providing multiple ways to overcome challenges and advance in the game.<br><br>" +
            "Currently, we have added several cards to the game, and we are working hard to expand our repertoire. Our goal is to add at least 30 new cards by the end of the month, increasing the diversity and strategies available to players. Stay tuned for updates and get ready to explore a vast set of cards and their upgraded abilities!"
        );

        // Updates the title of the "Weapons and Collectibles" section
        $(".item .content h2").eq(1).text("Weapons and Collectibles");

        // Updates the content of the "Weapons and Collectibles" section
        $(".item").children().eq(7).find("p").text("In the game, weapons are varied, each with its own unique characteristics and stats, providing a wide range of options for the player. Among them, we highlight the basic weapon, a melee weapon that proves crucial in extreme moments. It is ideal for situations where speed and precision are essential, helping the player tackle challenges effectively.");
        $(".content h4").eq(0).text("How to obtain new weapons?");
        $(".content p").eq(2).text("New weapons are strategically scattered across the game map. As the player unlocks new areas, they gain the opportunity to discover and acquire these weapons. Exploring the environment and advancing to unexplored regions is key to enriching your arsenal and finding new equipment that can be decisive in battles.");
        $(".content h4").eq(1).text("And the ammunition?");
        $(".content p").eq(3).text("Ammunition is also distributed throughout the map. The player can find it in places like inside houses, trash cans, and boxes scattered around the scene. It is worth noting that ammunition is limited, so it is essential to use it wisely. Managing the amount of ammunition and saving it for critical moments is crucial, as running out of ammunition at the wrong time can be disastrous.");


        // Updates the title of the "Inspiration" section
        $(".item .content h2").eq(2).text("Inspiration");

        // Updates the content of the "Inspiration" section
        $(".item").children().eq(9).find("p").html(
            "<span style='font-size: medium; font-weight: 700;'>Coraline / Little Nightmares / Bloodborne</span> inspire the setting and aesthetics;<br><br>" +
            "<span style='font-size: medium; font-weight: 700;'>Soul Knight / Hades / Cod Black Ops Cold War - Zombie mode</span> inspire mechanics reminiscent of the Roguelite genre and Power Ups at the end of each wave."
        );

        // Updates the text of the "Done?" section
        $(".item .content h2").eq(3).text("Done?");
        $(".item .content").last().find("p").html(
            "Thank you for reading this far. Stay tuned for updates on our profile on <a href='https://bsky.app/profile/litwavesstudios.bsky.social'><span style='font-size: medium; font-weight: 700; cursor: pointer; text-decoration: none; color: inherit;'>BlueSky</span></a>. We are always updating and showing the progress and development of the game. And no, it’s not over! We have more news ahead..."
        );

        // Updates the button text
        $(".button-content button").text("Back to Updates");
    });
});

