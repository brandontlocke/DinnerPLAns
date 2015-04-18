//Created from Mark Sample's DPLA Bot https://github.com/samplereality/DPLAbot
//This code uses a list of the top 1000 most appearing menu items from the 1850s to today from the New York Public Library's \"What's on the menu?\" project.
//Menu items retrieved from http://menus.nypl.org/data

var sys = require('util'),
    rest = require('restler');
var Twit = require('twit');
var inflection = require( 'inflection' );

// You need secret keys and tokens from dev.twitter.com. Make sure your app is set up for Read/Write access
var T = new Twit({
  consumer_key:         'T6bACUFLdflbxsqqvVzUuB2lK', 
  consumer_secret:      'FeE2LwidGooUyPAPSWUyWIwNmz8rMSovGlzZlbVNKnPRxW8QAQ',
  access_token:         '3162707947-sRw6ezCPFtQavXdF9zYQ1SuVsb1z6cUTpoNY6kp',
  access_token_secret:  'x4ubzYQs0Npd54WCgAjaoT0pwPlbBAAvhVyGA4y92Ri5a'
});

var statement = "";

// Let's build our arrays. introArray and checkArray add a bit of variation into the tweets
var introArray = ["Hungry for ","Craving some ","Have you considered "];
var checkArray = ["? Feast your eyes on ","? Check out ","? Take a look at ","? You gotta see ","? Have a look at "];

// makeDPLA is the heart of the bot
function makeDPLA() {
// Now let's grab a random selection from the introArray and checkArray. Every time the makeDPLA function runs, it grabs different phrases from the arrays
var intro = introArray[Math.floor(Math.random() * introArray.length)];
var check = checkArray[Math.floor(Math.random() * checkArray.length)];

// DPLAbot uses the Wordnik API to grab a random noun. It then plugs that random noun--data[0].word--into a call to the DPLA API.
// You need two API keys for this two work: a Worknik API key and a DPLA API key.
myArray =[Coffee,
    Olives,
    Celery,
    Tea,
    Radishes,
    Mashed potatoes,
    Boiled potatoes,
    Fruit,
    Milk,
    Chicken salad,
    Vanilla ice cream,
    Cocoa,
    Cheese,
    Lettuce Salad,
    Lobster salad,
    Chocolate,
    //String Beans,
    Apple Pie,
    Sardines,
    Oranges,
    AMERICAN CHEESE,
    GREEN PEAS,
    Assorted cakes,
    Apollinaris,
    French fried potatoes,
    Potato salad,
    Baked Potatoes,
    Stewed prunes,
    Roquefort,
    Ham,
    Roast beef,
    Apples,
    Chocolate Ice Cream,
    Stewed tomatoes,
    Bananas,
    Sliced Tomatoes,
    Lima beans,
    Camembert,
    ROQUEFORT CHEESE,
    Cigars,
    Cucumbers,
    Ice cream,
    Edam Cheese,
    Little Neck clams,
    Swiss cheese,
    Demi Tasse,
    Tomato Juice,
    Crackers,
    Spinach,
    Cream Cheese,
    ASSORTED CAKE,
    CAFE,
    Lettuce,
    Raisins,
    Sirloin Steak,
    Cauliflower,
    Grapes,
    BLUE POINTS,
    Cup Custard,
    Petits fours,
    Ripe Olives,
    //Demi-tasse,
    Orange,
    French peas,
    Consomme,
    Fruits,
    Buttermilk,
    Tomato Salad,
    Biscuit Tortoni,
    Boiled rice,
    Kaffee,
    Iced tea,
    Corned beef,
    Succotash,
    Charlotte Russe,
    Lobster Cocktail,
    Cucumber salad,
    SALTED ALMONDS,
    Dessert,
    Benedictine,
    Cigarettes,
    Brussels Sprouts,
    Romaine Salad,
    Lyonnaise Potatoes,
    Marmalade,
    Dry Toast,
    Grape fruit,
    Apple Sauce,
    Tongue,
    CAMEMBERT CHEESE,
    Bread and Butter,
    Queen olives,
    Little Necks,
    Chow chow,
    Chicken,
    Cold roast beef,
    Milk toast,
    Watermelon,
    Macaroons,
    Lettuce and Tomato Salad,
    Fried Egg Plant,
    Shrimp Cocktail,
    Club sandwich,
    Pears,
    Chicken Sandwich,
    Broiled Ham,
    Baked Apple,
    Ham Sandwich,
    STRAWBERRY ICE CREAM,
    Mutton Chops,
    Lamb Chops,
    Corned Beef Hash,
    Brie,
    Creme de Menthe,
    Cafe noir,
    French Pastry,
    Sweet Pickles,
    Cold Ham,
    Mince Pie,
    Coffee Ice Cream,
    Roman Punch,
    Smoked Salmon,
    Peach Melba,
    Welsh rarebit,
    Fruit salad,
    Shrimp Salad,
    Assorted Cakes,
    Stewed Corn,
    Asparagus,
    Tenderloin Steak,
    Ham and eggs,
    Scrambled Eggs,
    Fried Potatoes,
    Sauterne,
    Pumpkin Pie,
    Orange Juice,
    Fried Eggs,
    Iced coffee,
    White Rock,
    rice pudding,
    Pear,
    Boiled eggs,
    Escarole Salad,
    //Baked Apple with Cream,
    Oatmeal,
    Cherrystones,
    Nuts,
    Chicory Salad,
    Salad,
    Peach Pie,
    Maraschino,
    Cafe Parfait,
    Half Grapefruit,
    Buttered toast,
    Green olives,
    Caviar,
    Sanka,
    Neapolitan ice cream,
    Edam,
    Squab,
    Figs,
    Turkish Coffee,
    Cream toast,
    Clam Chowder,
    Beets,
    Cantaloupe,
    Nesselrode Pudding,
    Blue Point Oysters,
    Gorgonzola,
    New string beans,
    Bacon and eggs,
    Stuffed olives,
    Artichoke,
    COMBINATION SALAD,
    Tongue Sandwich,
    Oyster cocktail,
    Ginger Ale,
    Orange marmalade,
    SLICED CUCUMBERS,
    Tomatoes,
    Grapefruit,
    Cape Cods,
    Anchovies,
    Pickles,
    Lemonade,
    Turkey,
    Gherkins,
    Cold Slaw,
    Lamb,
    Gruyere,
    Neufchatel,
    Orange Water Ice,
    Cocktail Sauce,
    Toast,
    Rolls,
    Oyster Stew,
    Liqueurs,
    Postum,
    Lemon water ice,
    Hominy,
    Almonds,
    Pound cake,
    fried Sweet Potatoes,
    Vanilla Ice Cream,
    Saratoga Chips,
    Celery Salad,
    Cherrystone Clams,
    New peas,
    Golden buck,
    Grapefruit Juice,
    Chicken broth,
    Gorgonzola Cheese,
    Waldorf Salad,
    Sherry,
    Plums,
    Pork Chops,
    Stewed Tomatoes,
    Fruit Cocktail,
    Sweet Potatoes,
    French Coffee,
    Salted Nuts,
    Pickled beets,
    Stewed Prunes,
    Thee,
    Creamed Spinach,
    Saute Potatoes,
    Green Peas,
    Radis,
    Small Steak,
    Hot Rolls,
    Cakes,
    Meringue glacee,
    Chicken Salad,
    Johannis,
    Cold Corned Beef,
    Russian Dressing,
    PORT,
    Tomato,
    Chiffonade Salad,
    Anisette,
    Mashed Turnips,
    Pontet Canet,
    French Peas,
    CLAM BROTH,
    Liederkranz Cheese,
    Green Apple Pie,
    Cake,
    FRENCH DRESSING,
    //Calf's Liver and Bacon,
    Cream,
    Virginia Ham,
    New Lima Beans,
    Watercress,
    Brie cheese,
    Candied Sweet Potatoes,
    Little Neck Clams,
    Sardine Sandwich,
    Neufchatel cheese,
    Lynnhavens,
    Green Corn,
    Amontillado,
    Watercress Salad,
    Crab Flake Cocktail,
    Malaga grapes,
    Poached Eggs on Toast,
    Buckwheat Cakes,
    Roquefort Cheese,
    Roquefort cheese,
    Shirred Eggs,
    Raspberry Water Ice,
    Roast chicken,
    Lady fingers,
    Squab Chicken,
    Plover,
    Macaroni au gratin,
    Strawberries and Cream,
    St. Julien,
    Niersteiner,
    Manhattan,
    Pineapple Juice,
    Tomato Juice Cocktail,
    Potatoes au Gratin,
    Congress Water,
    Currant Jelly,
    Graham bread,
    FRESH FRUIT,
    Apple,
    Green Turtle Soup,
    Lettuce salad,
    Salt mackerel,
    Cucumber,
    Chartreuse,
    Absinthe,
    //Chow-chow,
    Beluga Caviar,
    Stuffed celery,
    Curacao,
    Dill Pickles,
    Pineapple,
    Pickled Walnuts,
    Mixed Grill,
    Preserves,
    Lobster Salad,
    Martini,
    Plain Omelette,
    Tomato Soup,
    Mallard Duck,
    Roast Mutton,
    Boiled Potatoes,
    BAKED SWEET POTATOES,
    Kummel,
    New green peas,
    Ceylon Tea,
    Clam Juice Cocktail,
    Vermouth,
    Pommard,
    Biscuit Glace,
    Broiled Bacon,
    Hamburger Steak,
    Hashed browned potatoes,
    Lobster,
    Cottage Cheese,
    Potatoes,
    ENGLISH BREAKFAST TEA,
    Fruchte,
    Honey,
    peaches,
    Endive Salad,
    Strawberries,
    Cotuits,
    Clam juice,
    Queen Olives,
    Cold tongue,
    Romaine,
    Boiled Onions,
    Filet Mignon,
    Prime ribs of beef,
    //String beans,
    French string beans,
    Prime ribs of beef au jus,
    Mayonnaise dressing,
    Custard Pie,
    Hearts of Celery,
    French bread,
    Mixed Pickles,
    BAKED IDAHO POTATO,
    Tomato salad,
    Oysters,
    Mayonnaise,
    Roast Beef Sandwich,
    Swiss cheese sandwich,
    Julienne potatoes,
    Fried oysters,
    Mixed ice cream,
    spring lamb, mint sauce,
    Danish Pastry,
    Cucumber Salad,
    Blue Points,
    Lemon Ice,
    Dates,
    Oolong Tea,
    Corn muffins,
    Stilton Cheese,
    Sauternes,
    Kase,
    Anchovy Salad,
    Spring Lamb,
    Baked Potato,
    Cape Cod Oysters,
    Sliced Fresh Pineapple,
    Mutton,
    Raisin cake,
    //Strawberry short cake,
    Honey Dew Melon,
    French Fried Potatoes,
    Kaffee Hag,
    Poached eggs,
    Hashed Brown Potatoes,
    //Moet & Chandon, White Seal,
    Corn bread,
    Oyster Bay asparagus,
    Fromage,
    Fancy Cakes,
    Escarole,
    //Horlick's Malted Milk,
    Pistache ice cream,
    Clam cocktail,
    Guava jelly,
    Medoc,
    Boiled Sweet Potatoes,
    Chilled Tomato Juice,
    Lima Beans,
    FRESH FRUIT SALAD,
    Pommery Sec,
    bacon,
    Fruit Cake,
    Baked apples,
    Eggs to order,
    Fried Ham,
    toasted crackers,
    American cheese,
    Mashed Potatoes,
    Corned beef sandwich,
    Poussin,
    Tom Collins,
   // New String Beans,
    Chocolate ice cream,
    Stilton,
    Royal Squab,
    Haut Sauternes,
    Celeri     ,
    Porterhouse Steak,
    Apollinaris Water,
    Stuffed tomatoes,
    //Coffee with Cream,
    Potato Salad,
    Vegetable Soup,
    Clam Fritters,
    Fresh Shrimp Cocktail,
    Roquefort Dressing,
    Preserved figs,
    Claret,
    Salade,
    Peas,
    Chablis,
    Stuffed Mangoes,
    Kirschwasser,
    Omelette, plain,
    Dubonnet,
    Laubenheimer,
    Corned Beef and Cabbage,
    Bermuda potatoes,
    Whiskey Sour,
    Sauerkraut Juice,
    Romaine salad,
    Cafe,
    Hearts of Lettuce,
    Roast Turkey,
    Sliced Oranges,
    Broiled Chicken,
    Smoked beef,
    Sliced pineapple,
    Squash,
    Instant Postum,
    Boiled Ham,
    Sherbet,
    Jam,
    Strawberry shortcake,
    Gruyere Cheese,
    Chicory,
    Fresh milk,
    English mutton chop,
    Potatoes, French fried,
    Meringue Glace,
    Iced Tea,
    Wine Jelly,
    Stewed rhubarb,
    Liebfraumilch,
    Rice,
    BUTTERED BEETS,
    Tokay Grapes,
    Cream of tomato soup,
    Scotch Woodcock,
    Mock turtle soup,
    Chambertin,
    Spaghetti,
    Stuffed Tomato,
    Apricots,
    Plain Omelet,
    Hochheimer,
    Sponge Cake,
    Pousse Cafe,
    Potatoes, boiled,
    Table Celery,
    Broiled Fresh Mushrooms,
    Fresh Strawberries,
    Marmelade,
    Yorkshire Buck,
    Hot roast beef sandwich,
    Canadian Club,
    Petite marmite,
    Canadian Cheese,
    Salted Almonds,
    Bluefish,
    Pie a la Mode,
    //boiled new potatoes,
    Huitres,
    Friandises,
    Broccoli,
    Kippered Herring,
    lemon meringue pie,
    Au Gratin Potatoes,
    Bel Paese Cheese,
    Beefsteak,
    Lobster a la Newburg,
    Daiquiri,
    Thousand Island Dressing,
    Saratoga Potatoes,
    Spanish omelette,
    Grand Marnier,
    Pistachio Ice Cream,
    Liederkranz,
    Broiled Spring Chicken,
    Petit Fours,
    Seltzer,
    Cointreau,
    Grape Fruit,
    Macaroni,
    //Pickled lamb's tongue,
    Hot Chocolate,
    Salat,
    Hafergrutze,
    //Sirloin Steak with Mushrooms,
    Radieschen,
    Spaghetti au Gratin,
    Cherries,
    //Ices in Souvenir,
    GREEN TEA,
    Creme de Cacao,
    Potatoes, mashed,
    Stuffed green peppers,
    MIXED NUTS,
    Budweiser,
    Imported Swiss cheese,
    Potatoes, lyonnaise,
    Peach Ice Cream,
    Sliced Orange,
    Rice Cakes,
    Potatoes Parisienne,
    French rolls,
    Broiled bluefish,
    Sarsaparilla,
    Bouillon,
    Shredded Wheat,
    Consomme Julienne,
    Tangerines,
    Apricot Brandy,
    Boston Brown Bread,
    Grapefruit Supreme,
    Pickled onions,
    Hearts of lettuce salad,
    ORANGE PEKOE TEA,
    American,
    SANKA COFFEE,
    Milk Toast,
    Iced Coffee,
    rhubarb pie,
    Assorted Cold Cuts,
    Sliced Bananas,
    Cheese Sandwich,
    Rice Pudding,
    //Spinach with egg,
    Fancy Ices,
    Red Leg Partridge,
    Pork and beans,
    Chutney,
    orange sherbet,
    Chocolate Parfait,
    Lobster cocktail,
    Haut Sauterne,
    Apricot Water Ice,
    Chow Chow,
    Swiss,
    apple,
    Cranberry Sauce,
    Canape of Anchovies,
    Chicken consomme,
    German Pancake,
    Graves,
    Tapioca Pudding,
    APRICOT PIE,
    //Bar-le-Duc,
    Chartreuse, Yellow,
    American Cheese,
    Club Sandwich,
    Roast Lamb,
    Gin Fizz,
    Cheese Cake,
    Cauliflower au Gratin,
    Clam Broth,
    Chocolate Eclairs,
    Extra sirloin steak,
    Philadelphia Cream Cheese,
    cocoanut pie,
    Cherry Pie,
    English Pheasant,
    Wheat Cakes,
    Dipped Toast,
    Bismarck Herring,
    PRUNES,
    Ham Omelet,
    Assorted cheese,
    Cheddar Cheese,
    Codfish Cakes,
    Soda,
    American Cheese Sandwich,
    Fresh Vegetable Salad,
    Raspberry sherbet,
    Green peas,
    Apple pie,
    Martini Cocktail,
    Boston baked beans,
    Fried Oysters,
    Strawberry Ice Cream,
    Dutch cheese,
    Halibut steak,
    Ruddy Duck,
    MILK, PER GLASS,
    Carciofini,
    Nachtisch,
    Pate de Foie Gras,
    Eggs, fried,
    Sliced Peaches,
    Celeri,
    Preserved Peaches,
    //Tenderloin Steak with Mushrooms,
    //Fruit in Season,
    Roastbeef,
    RUM,
    Baked Beans,
    Bluepoints,
    Potatoes Lyonnaise,
    Cervelat,
    Caviar, Special Importation,
    Fried hominy,
    Lemon Sherbet,
    Dandelion Salad,
    Camembert Cheese,
    Lemon Soda,
    Lobster Newburg,
    Port Salut,
    Combination Salad,
    Extra Special Heavy Cream,
    Breakfast Bacon,
    Egg plant,
    Omelet, plain,
    Rudesheimer,
    Rye Bread,
    Leberwurst,
    Manhattan Cocktail,
    //Fresh String Beans,
    Fried Clams,
    cole slaw,
    Ox Tongue,
    Chocolate eclair,
    Sardellen,
    Cheese and Crackers,
    Corn fritters,
    French asparagus,
    Spanish olives,
    Potatoes, baked,
    Potato Croquettes,
    Caramel custard,
    Crabmeat Cocktail,
    Crab flake cocktail,
    Strawberry ice cream,
    CHAMPAGNE,
    Clam Stew ,
    Asparagus Tips,
    Orange ice,
    Chicken Salad Sandwich,
    Mixed Green Salad,
    Watercress salad,
    Fried Oyster Crabs,
    //Potatoes hashed in cream,
    Poland Water,
    //Chef's Salad,
    Apfelsinen,
    Baked Alaska,
    Sliced Chicken,
    Apple Juice,
    Coupe of Fresh Strawberries, Favorite,
    Petits Fours,
    Camembert cheese,
    Celery salad,
    Lyon Sausage,
    Russian caviar,
    fresh strawberry ice cream,
    Cold Chicken,
    Mixed Ice Cream,
    Champagne Cocktail,
    Cocktail,
    HARICOTS VERTS,
    Grape Nuts,
    BLUEBERRY PIE,
    Eclair,
    Preserved Skinless Figs,
    Supreme of Fruit, Astor,
    Ice Cream,
    Julienne,
    Stewed pears,
    Onion Soup au gratin,
    Cup custard,
    Obst,
    Soft Shell Crabs,
    Crackers and Milk,
    Butter,
    Assorted Fruit,
    Stinger,
    Lettuce and Tomato,
    Saucisson de Lyon,
    WestphalÃ­an Ham,
    Boiled Rice,
    Raspberries,
    Caviar sandwich,
    Cold turkey,
    crab meat cocktail,
    Pot of Tea,
    Spaghetti Italienne,
    Heart of Lettuce Salad,
    Oyster Patties,
    French Toast,
    Old Fashioned,
    //Melon in Season,
    Alligator Pear Salad,
    Anchovis,
    //Cook's Imperial,
    Zeltinger,
    MUFFINS,
    Amandes salees,
    Stuffed Olives,
    Port du Salut,
    PASTRY,
   // Bent's Water Crackers,
    Side Car,
    Eggs, boiled,
    Chianti,
    Eggs, Scrambled,
    Peach Short Cake,
    Nuts and Raisins,
    Fried Soft Shell Crabs,
    Clams,
    Stewed potatoes,
    Terrapin,
    Frische Milch,
    Potato,
    //Mumm's Extra Dry,
    compot,
    Marinated Herring,
    Coffee, Pot,
    Clear green turtle soup,
    Salami,
    Chicken okra soup,
    Bacardi Cocktail,
    California Orange,
    Apple sauce,
    Neapolitan Ice Cream,
    Endive salad,
    Beef,
    Cognac,
    Macon,
    Neapolitan,
    //Figs in syrup,
    Lady Fingers,
    Stuffed Figs and Dates,
    Oatmeal Porridge,
    Mixed Salad,
    Cheese Omelette,
    Strawberry jam,
    Macaroni au Gratin,
    Fried Scallops,
    Nesselrode pudding,
    Sliced Bananas and Cream,
    Irish stew,
    Cafe Turc,
    Oyster Fry,
    Fancy Ice Cream,
    Fresh Mackerel,
    Vienna Bread,
    Grape Juice,
    Escarole salad,
    Clysmic,
    Brawn,
    Brook Trout,
    Fried onions,
    Fresh strawberries and cream,
    Bologna Sausage,
    Assorted Nuts,
    Welsh Rarebit,
    Chicken sandwich,
    //Pear \au feu d'Enfer\,
    Chicken (half),
    Clear green turtle,
    Rockaways,
    Biscuits,
    Fried Bacon,
    Blackberries,
    Coca Cola,
    Salted almonds,
    Young Onions,
    Onions,
    Club Soda,
    Ribs of beef ,
    Roast Lamb, Mint Sauce,
    GRAHAM ROLLS,
    NEW POTATOES,
    Cream cheese,
    Squab Chicken (half),
    Old Tom Gin,
    Shrimp,
    Concombres,
    Steamed Rice,
    Drambuie,
    Coffee ice cream,
    Whitebait,
    Consomme Vermicelli,
    Crab Meat salad,
    India Relish,
    Gebackene Kartoffeln,
    Rice and milk,
    Lobster, Newburg,
    Fresh asparagus,
    Venison,
    Sparkling Moselle,
    Lettuce and Tomato Sandwich,
    Ham sandwich,
    //Curried Chicken with Rice,
    Gin Rickey,
    Cocktails,
    Head Cheese,
    Cold Lamb,
    Hot mince pie,
    Assorted Fresh Fruit,
    Soup du Jour,
    Scotch Grouse,
    Cold rice pudding,
    //Porterhouse steak with mushrooms,
    Pear Melba,
    Sirloin steak,
    Chicory salad,
    Brandy peaches,
    Plain Lemonade,
    COFFEE,
    ROAST TURKEY, CRANBERRY SAUCE,
    Sherry Flip,
    Mangoes,
    SALADE DE SAISON,
    Raspberry jam,
    Fresh Fruit Cocktail,
    Fried Sweet Potatoes,
    Fish cakes,
    Claret Punch,
    Westphalia Ham,
    Lettuce and Tomatoes,
    Lamb, mint sauce,
    //Guinness' Stout,
    Rolls and butter,
    //Spinach with Egg,
    Fried smelts,
    Tea, Pot,
    Oyster stew,
    Maple Syrup,
    Macedoine salad,
    //Canvas-Back Duck,
    //Sirloin Steak with Onions,
    Coffee, per pot,
    Smoked Beef Tongue,
    TUTTI FRUTTI ICE CREAM,
    //Pim-olas,
    //Strawberries with cream,
    Corn Cakes,
    Ham omelette,
    Waffles,
    Chocolade,
    Spanish omelet,
    Sloe Gin,
    //Red-head duck,
    Glass of milk,
    //Sliced Bananas with Cream,
    Brandy,
    Vermouth, Italian,
    Canape of Caviar,
    Julienne Soup,
    Eggs, shirred,
    Salmon Salad,
    Broiled Squab,
    Oyster Bay Asparagus,
    Vienna Rolls,
    Mettwurst,
    Chartreuse, green,
    Silver Fizz,
    Crab Salad,
    Pickled Oysters,
    Alligator Pear,
    Caviar Canape,
    //Pont l'Eveque cheese,
    Prune Juice,
    Tongue sandwich,
    Pistache Ice Cream,
    Mock Turtle,
    New asparagus,
    Gervais,
    Tea, per pot,
    Potatoes Julienne,
    Gumbo,
    Malted Milk,
    Chicken Soup,
    Capon,
    Beef consomme,
    Corn Flakes,
    Crabflake Cocktail,
    //Assorted Hors D'oeuvres,
    Ham and Eggs,
    Ribs of prime beef,
    Beef tongue,
    Cream, per glass,
    Sauerkraut,
    Stewed Oysters,
    Finnan Haddie,
    Sloe Gin Fizz,
    AMERICAN COFFEE,
    Crab Meat Cocktail,
    liver and bacon,
    Fresh mushrooms,
    lemon pie,
    Pie,
    Cold Consomme,
    Chocolate Sundae,
    Consomme en Tasse,
    Dill Pickle,
    Port du Salut cheese,
    Pink Lady,
    Bacon and Eggs,
    Broiled Chicken (half),
    Country Sausage,
    Potatoes, Saratoga,
    Turnips,
    Graham Wafers,
    Broiled oysters,
    Gekochte Kartoffeln,
    Stewed Strawberries,
    Cafe Noir,
    Waldorf salad,
    //Baked apples with cream,
    St. Estephe,
    Liver Sausage,
    Boston Cream Pie,
    Spring Onions,
    Lamb Chop,
    //Potatoes O'Brien,
    Tomato Broth,
    Roast Beef,
    //Moet & Chandon,
    Veuve Clicquot, Yellow Label,
    Roast Potatoes,
   // Fruits in Season,
    Boned capon,
    Eclairs,
    Spring chicken,
    Cauliflower, Polonaise,
    Hashed Browned Potatoes,
    Corn Fritters,
    Fruit Salad,
    Lemon Water Ice,
    Milchreis,
    Caviar on Toast,
    Rostbraten,
    Chateau Yquem,
    Spring Turkey (half),
    Clam broth,
    New beets,
    Lemon ice cream,
    Crullers,
    Cacao,
    Jamaica Rum,
    Potatoes, Fried,
    Water Crackers,
    Petits pois,
    //Chocolate Layer Cake,
    Apple Fritters,
    PINEAPPLE WATER ICE,
    Schweizer KÃ¤se,
    French Sardines,
    Fresh Fruit Cup,
    Long Island Duckling,
    Cream Toast,
    Malaga Grapes,
    Boiled Onions, Cream Sauce,
    Hamburg steak,
    Margaux,
    Beaune,
    Golden plover,
    French vanilla ice cream,
    Jelly,
    Combination salad,
    Ginger,
    Ruinart Brut,
    //Lamb Chops (2),
    Pumpkin pie,
    OLIVES,
    Sliced Cucumbers,
    Old Tom,
    Strained honey,
    Tomato Omelette,
    Vegetable Salad,
    Pineapple Cheese,
    China Tea,
    Linden Tea,
    German fried potatoes,
    Blackberry Brandy]   //!!!!-----THIS NEEDS THE WORD LIST IN AN ARRAY OR A WAY TO GRAB FROM A DICTIONARY!!!!!----
var rand = myArray[Math.floor(Math.random() * myArray.length)];

rest.get('http://api.dp.la/v2/items?&sourceResource.subject.name=food+and+cooking&sourceResource.type=image&q='+rand+'&api_key=YOUR_DPLA_APIKEY').on('complete', function(data, response){
			var results = data.docs; // Grabs up to ten results from the DPLA
			var i = Math.floor(Math.random()*results.length); // Select a random number based on the number of results from DPLA
			itemTitle = data.docs[i].sourceResource.title; // Uses the random number to select a single item from the list of DPLA results
			
			// Sometimes the titles are too long for a tweet. Here we shorten them and add an ellipsis
			if (itemTitle.length > 100){
			  itemTitle = itemTitle.substr(0, 100) + "\u2026";
			  }
			else {itemTitle = itemTitle;
			  }
	
			itemURL = "http://dp.la/item/" + data.docs[i].id; // This is the source URL for the item

	
	// Now we build	the tweet, which is made up of an introductory phrase, the pluralized noun, another phrase, and the item title and URL	
	statement = intro + rand + check + "\u201c" + itemTitle + "\u201d at " + itemURL;
	console.log(statement);
		    // tweet it!	
		T.post('statuses/update', {status: statement}, function(err, reply) {});

	});
	});
	

	
	}

// Create a tweet upon running dplabot.js
makeDPLA();

// Set up the timing for subsequent executions of makeDPLA. Here we run it every 87 minutes.

setInterval(function() {
  try {
    makeDPLA();
  }
 catch (e) {
    console.log(e);
  }
},1000*60*87);
