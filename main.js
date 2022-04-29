const wishICouldPhrases = [

					"text my dog",
					"have a jetpack so I can avoid traffic",
					"Google the things I misplaced",
					"invent a new ice cream flavor",
					"just copy-paste the notes on the board to my notebook",
					"travel back in time and meet my younger self",
					"hit Ctrl+ Z in real life when I do something embarrassing",
					"do five sit-ups and instantly have abs",
					"record my dreams and watch them later",
					"teleport from one place to my Kpop idol's studio",
					"donate body fat to those who need it",
					"grow a money tree and just pick coins and bills",
					"autocorrect life choices",
					"lose weight as easily as I lose my keys, pen, temper and, even my mind",
					"insert a memory card into my brain for the exams",
					"remember all my childhood memories",
					"be a character in my favorite anime series",
					"Google how someone feels about me",
					"be in Paris now",
					"win the lottery just once",
					"skip the ads on TV too",
					"take photos with just my eyes",
					"reboot my life anytime",
					"eat pizza with pineapple toppings every afternoon",
					"travel the world in 7 days",
					"learn all the skills I need to learn in just 30 days",
					"stay young forever and not worry about gray hair",
					"fly my own plane",
					"spend a month in Disneyland",
					"party all year long",
					"have my own bot assistant that will show up at work just for me",
					"have my own bot to cook and do all the household chores for me",
					"learn every language in the world so I can make more friends",
					"have coffee all night long",
					"build my own adventure park for kids so all the kids in the world will be happy for a day",
					"fit in my pair of jeans which is still in my closet back when I was 18",
					"take a long nap like when I was a kid and everyone would just be proud of me",
					"find chocolates in my bag like it's a surprise gift from my love",
					"have blueberry cheesecake every Monday",
					"listen to my cat talk about how she misses me when I go out for groceries"
	
				];

	document.getElementById("new-tweet").addEventListener("click", postTweets);
	
	function postTweets() {
		document.getElementById("random-tweet").innerHTML = "Wish I could" + " " + wishICouldPhrases[Math.floor(Math.random() * wishICouldPhrases.length)] + ".";		
		document.getElementById("share-tweet").innerHTML = '<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="'+document.getElementById("random-tweet").innerHTML+'" data-url="https://postitcrew.netlify.app" data-hashtags="PostItCrew" data-show-count="false"></a>'; 
		twttr.widgets.load();
	}
	
	postTweets();

	
	
		
	
	




	
	