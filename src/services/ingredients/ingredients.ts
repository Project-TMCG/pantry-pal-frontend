interface Ingredient {
  name: string;
  image: string | undefined;
}

const Produce: Ingredient[] = [
  {
    name: "Apple",
    image: "https://i.gyazo.com/24e23c66589f6d0e7dc8d14017d98ff2.png",
  },
  {
    name: "Avocado",
    image: "https://i.gyazo.com/5ad86933eb129340cc6b3ab9fefa2cf4.png",
  },
  {
    name: "Bananas",
    image: "https://i.gyazo.com/7e1d2dde72b818fe96e5d6046259cd76.png",
  },
  {
    name: "Bell Pepper",
    image: "https://i.gyazo.com/e7394b962c8be0d710f8b4fb4222d257.png",
  },
  {
    name: "Broccoli",
    image: "https://i.gyazo.com/b2faa083424c17d3e055cf2a8eec2ad0.png",
  },
  {
    name: "Carrot",
    image: "https://i.gyazo.com/48575e644c093f8f2cd0ae54107feb3d.png",
  },
  {
    name: "Cauliflower",
    image: "https://i.gyazo.com/462fca9b18d69f8dcd32109353891c92.png",
  },
  {
    name: "Celery",
    image: "https://i.gyazo.com/e46314748a6a47d5798e3060bf1abab6.png",
  },
  {
    name: "Corn",
    image: "https://i.gyazo.com/e1f151b69d176344c93137c843b65575.png",
  },
  {
    name: "Cucumber",
    image: "https://i.gyazo.com/ecabcf78aeaa6b04bec2a524007afdd8.png",
  },
  {
    name: "EggPlant",
    image: "https://i.gyazo.com/c56319022fa52f29ec193e70f47414d6.png",
  },
  {
    name: "Grapes",
    image: "https://i.gyazo.com/afdaecbe517b3ac4d7192d27cb2524cc.png",
  },
  {
    name: "Green Beans",
    image: "https://i.gyazo.com/d53d93f22b8f24dd86fd8a707cee3ee4.png",
  },
  {
    name: "Lemon",
    image: "https://i.gyazo.com/dcbbe5f5bb2b97b74ef597aee633a775.png",
  },
  {
    name: "Lettuce",
    image: "https://i.gyazo.com/8acf1c3ddd4307bb223fc30e5b7670ab.png",
  },
  {
    name: "Lime",
    image: "https://i.gyazo.com/0c3f9212f78608025409dd22e1588ee1.png",
  },
  {
    name: "Mushroom",
    image: "https://i.gyazo.com/feb702cc25e23de21c91c0bc8c202ffe.png",
  },
  {
    name: "Onion",
    image: "https://i.gyazo.com/8b99742f5be20e40cd3f3e3c1567ccea.png",
  },
  {
    name: "Orange",
    image: "https://i.gyazo.com/fdc9a71d939bf6eabb6e0639aa29165e.png",
  },
  {
    name: "Peas",
    image: "https://i.gyazo.com/b8633179e86bf3cbb6f29a15e131a79d.png",
  },
  {
    name: "Pineapple",
    image: "https://i.gyazo.com/bd17871c0ab204bddedbbb4ddcbc53c4.png",
  },
  {
    name: "Potato",
    image: "https://i.gyazo.com/f677d4edd92271a4cfcf60870d594686.png",
  },
  {
    name: "Spinach",
    image: "https://i.gyazo.com/6eda9b798cedb56743063f76f3710b17.png",
  },
  {
    name: "Strawberry",
    image: "https://i.gyazo.com/0141fef4bceea8f41c583ddba7563545.png",
  },
  {
    name: "Tomato",
    image: "https://i.gyazo.com/b7ac2b78fd890c73e19b0e40ab5ee1a9.png",
  },
  {
    name: "Watermelon",
    image: "https://i.gyazo.com/7ea36c52a5cfdcfbf97243a545efc4ad.png",
  },
  {
    name: "Zucchini",
    image: "https://i.gyazo.com/360a516f1bb817c3fe9121977bfc0d1d.png",
  },
];

const Meat: Ingredient[] = [
  {
    name: "Beef",
    image: "https://i.gyazo.com/b951a2aa5d3c63c2a61c942a97e148b0.png",
  },
  {
    name: "Chicken",
    image: "https://i.gyazo.com/b3d4c752d027d46cbd2faf2236ca239a.png",
  },
  {
    name: "Clams",
    image: "https://i.gyazo.com/b4c926cb019f28c20845c373df133451.png",
  },
  {
    name: "Cod",
    image: "https://i.gyazo.com/c866894c40784d5b3fe567d4a02a46b1.png",
  },
  {
    name: "Crab",
    image: "https://i.gyazo.com/87d02b92b80493ad942eb62bb370e43b.png",
  },
  {
    name: "Ham",
    image: "https://i.gyazo.com/6498a68ca6054f2d3757aa282fb469d7.png",
  },
  {
    name: "Lamb",
    image: "https://i.gyazo.com/fc5b99aa320bc1dacde6b7db88fc9875.png",
  },
  {
    name: "Lobster",
    image: "https://i.gyazo.com/52d79c8847176c214a8f54d8664a5d8c.png",
  },
  {
    name: "Muscles",
    image: "https://i.gyazo.com/3079a1b6bfca16f514ce432fa216b9db.png",
  },
  {
    name: "Pork",
    image: "https://i.gyazo.com/fbe8d145a9b20140f5cfd3b0c0b6204a.png",
  },
  {
    name: "Sardines",
    image: "https://i.gyazo.com/387829d3cd88c201c383daf400a8ba22.png",
  },
  {
    name: "Salmon",
    image: "https://i.gyazo.com/407e891e474847b61f1b08f2b202969f.png",
  },
  {
    name: "Sausage",
    image: "https://i.gyazo.com/abe79d2c4fc8f77a4e465f09b14105c3.png",
  },
  {
    name: "Scallops",
    image: "https://i.gyazo.com/803b268d16754ef2fe10c0d9a6dc046e.png",
  },
  {
    name: "Shrimp",
    image: "https://i.gyazo.com/fac0ba933e563b6ad43484c7ffe3f564.png",
  },
  {
    name: "Tilapia",
    image: "https://i.gyazo.com/a6ab0398bbb2047a30a160f73b87776c.png",
  },
  {
    name: "Tuna",
    image: "https://i.gyazo.com/b019f72b3b4426a24fce6690fb93ef34.png",
  },
  {
    name: "Turkey",
    image: "https://i.gyazo.com/606b2c0445321ba3d259ad7bafedac9f.png",
  },
];


const Dairy: Ingredient[] = [
  {
    name: "Almond Milk",
    image: "https://i.gyazo.com/d4dbc13cdd4da6e4463492b807a989d5.png",
  },
  {
    name: "Brie",
    image: "https://i.gyazo.com/f189df9c1a1812b2e855277319c7b176.png",
  },
  {
    name: "Butter",
    image: "https://i.gyazo.com/ab806bfd429cf3db327cdf2489ed55bb.png",
  },
  {
    name: "Buttermilk",
    image: "https://i.gyazo.com/4c8729a6c4d4299a5bd8ae6ef60ff329.png",
  },
  {
    name: "Cheddar",
    image: "https://i.gyazo.com/f750f3842d28de7a2d07a6b9b47799f4.png",
  },
  {
    name: "Cheese",
    image: "https://i.gyazo.com/490ee091355d15055dc35a36b7c102f7.png",
  },
  {
    name: "Coconut Milk",
    image: "https://i.gyazo.com/13eb33198f641c74f2700fb898eec531.png",
  },
  {
    name: "Condensed Milk",
    image: "https://i.gyazo.com/7bc850984f4a201d441d0bb9faf9b79d.png",
  },
  {
    name: "Cottage Cheese",
    image: "https://i.gyazo.com/0acb69937f41982c72fe9c9a9c1efb7c.png",
  },
  {
    name: "Cream Cheese",
    image: "https://i.gyazo.com/fca7a0d796deb969b67c125c016bc2e5.png",
  },
  {
    name: "Feta",
    image: "https://i.gyazo.com/377fba5547c6cbf20b5bb14d36f56ff7.png",
  },
  {
    name: "Goat Cheese",
    image: "https://i.gyazo.com/fe5bd1b061130891fc82e1f96d7eb2bb.png",
  },
  {
    name: "Greek Yogurt",
    image: "https://i.gyazo.com/80bf30d550ca8376ae84a82aaf7eb35b.png",
  },
  {
    name: "Heavy Cream",
    image: "https://i.gyazo.com/b9ac8d003484b541f94817ef528916c9.png",
  },
  {
    name: "Low-Fat Milk",
    image: "https://i.gyazo.com/f032ccabc0acb7713e48ed2e7a0f9fb7.png",
  },
  {
    name: "Milk",
    image: "https://i.gyazo.com/26465923d757fd09a3a7ec11bdb04d37.png",
  },
  {
    name: "Mozarella",
    image: "https://i.gyazo.com/62b7fcf8103583ce2a0099e3d46c7b98.png",
  },
  {
    name: "Oat Milk",
    image: "https://i.gyazo.com/301b41ba7fac1bd26586a914080e89c9.png",
  },
  {
    name: "Parmesean",
    image: "https://i.gyazo.com/0977930eaf1481c956192b964873fbc5.png",
  },
  {
    name: "Provolone",
    image: "https://i.gyazo.com/78e88970e34fba42aa25f0649d9d2a53.png",
  },
  {
    name: "Ricotta",
    image: "https://i.gyazo.com/910dcc31aff93faac65d0dd1d76727ce.png",
  },
  {
    name: "Soy Milk",
    image: "https://i.gyazo.com/81e583a69dbe5bd079e871807e816605.png",
  },
  {
    name: "Sour Cream",
    image: "https://i.gyazo.com/04b7b52c77186442350f5af678438809.png",
  },
  {
    name: "Swiss Cheese",
    image: "https://i.gyazo.com/11fd40e60f65e64794ac0e2863355dea.png",
  },
  {
    name: "Whipped Cream",
    image: "https://i.gyazo.com/1fa3ee7f0846180e64351fadbd140e6a.png",
  },
  {
    name: "Whole Milk",
    image: "https://i.gyazo.com/36aabddeda6e4ac808383ce2a5090600.png",
  },
  {
    name: "Yogurt",
    image: "https://i.gyazo.com/12926afd528e44a4be74234572729577.png",
  },
];

const Baking: Ingredient[] = [
  {
    name: "Baking Powder",
    image: "https://i.gyazo.com/7efeddcc511456dd436cf413c8ff4af4.png",
  },
  {
    name: "Baking Soda",
    image: "https://i.gyazo.com/5a7bae7c265eca92ef40f0d7a7362d08.png",
  },
  {
    name: "Cardamom",
    image: "https://i.gyazo.com/b7ed651f685a2bbc10c25cce3edcfaa5.png",
  },
  {
    name: "Cayenne Pepper",
    image: "https://i.gyazo.com/865c36322533997a992ec6bd5fccf7cf.png",
  },
  {
    name: "Chocolate",
    image: "https://i.gyazo.com/2e61c13c1d8f1b947e565b283eaf9e39.png",
  },
  {
    name: "Cinnamon",
    image: "https://i.gyazo.com/5cf804c713539b981ee9cc5dff9be860.png",
  },
  {
    name: "Cloves",
    image: "https://i.gyazo.com/a0fde7fcafc0b83a350a60f18027df4f.png",
  },
  {
    name: "Cocoa Powder",
    image: "https://i.gyazo.com/153896f70d374d29be71e4c95b424b03.png",
  },
  {
    name: "Corn Starch",
    image: "https://i.gyazo.com/148b04b76994f5f2b795f56b31657bb7.png",
  },
  {
    name: "Flour",
    image: "https://i.gyazo.com/683ce43972bba567ad966b80d697532d.png",
  },
  {
    name: "Ginger",
    image: "https://i.gyazo.com/1e6c10475d68c100fc59a1f65401310f.png",
  },
  {
    name: "Honey",
    image: "https://i.gyazo.com/5d125b22110c1ea453ec1deb16bf954b.png",
  },
  {
    name: "Maple Syrup",
    image: "https://i.gyazo.com/e0625f9d4ca4c62d9bca418026dc68a3.png",
  },
  {
    name: "Nutmeg",
    image: "https://i.gyazo.com/9eef7deaaccdffc50e36d2cf8d1c16fb.png",
  },
  {
    name: "Olive Oil",
    image: "https://i.gyazo.com/65e373758128cf972973fcf1c194a2a0.png",
  },
  {
    name: "Oregano",
    image: "https://i.gyazo.com/9afdb2c73c5b44c31b4756f1af712c69.png",
  },
  {
    name: "Pepper",
    image: "https://i.gyazo.com/f7ac02e49f87a2f337c935a8ec0fb38e.png",
  },
  {
    name: "Powdered Sugar",
    image: "https://i.gyazo.com/07231b93ea5d95f525be0cbcd76c60c6.png",
  },
  {
    name: "Rosemary",
    image: "https://i.gyazo.com/5198e6436aeb81a36ca9c782e5472556.png",
  },
  {
    name: "Salt",
    image: "https://i.gyazo.com/8bde07e381d5644b2571402786f90367.png",
  },
  {
    name: "Thyme",
    image: "https://i.gyazo.com/3a6814c36f8e39947d1ee3c3245c107b.png",
  },
  {
    name: "Turmeric",
    image: "https://i.gyazo.com/329a80cc5fdc4574572382189f5eba52.png",
  },
  {
    name: "Vanilla Extract",
    image: "https://i.gyazo.com/e97cd8a7ce10c3b2b9f91b4f47231b9f.png",
  },
  {
    name: "White Sugar",
    image: "https://i.gyazo.com/1e50db34a687eb63809925044b3282a4.png",
  },
  {
    name: "Yeast",
    image: "https://i.gyazo.com/8fc2033fd146170d024f1a9f2d1dcd50.png",
  },
];

const Diet: Ingredient[] = [
  {
    name: "Dairy-Free",
    image: "https://i.gyazo.com/361f4f83a7b916f41f22cf732c8514aa.png",
  },
  {
    name: "Egg-Free",
    image: "https://i.gyazo.com/b5da943c6f9113f856e2497d2bbb5e18.png",
  },
  {
    name: "Gluten-Free",
    image: "https://i.gyazo.com/54ebfc9e98d26a88916ea7934b0209b1.png",
  },
  {
    name: "Halal",
    image: "https://i.gyazo.com/4e57c5107f30698ad19c7945168876dc.png",
  },
  {
    name: "Kosher",
    image: "https://i.gyazo.com/22b32adebd512449adf9e498b1b4aeb1.png",
  },
  {
    name: "Lactose-Free",
    image: "https://i.gyazo.com/aecc75907549482f6442492ce07c00f0.png",
  },
  {
    name: "Low-Carb",
    image: "https://i.gyazo.com/fe7dcb08a9855cc32bfc5e6ac2f358dc.png",
  },
  {
    name: "Low-Fat",
    image: "https://i.gyazo.com/e3e3d7e2f62f3da826bf542b41e901b2.png",
  },
  {
    name: "Nut-Free",
    image: "https://i.gyazo.com/f389de44bd2ef42a26886fff3e8fac1e.png",
  },
  {
    name: "Organic",
    image: "https://i.gyazo.com/6d46e6b9ac15d290ad784da2c03e35fd.png",
  },
  {
    name: "Paleo",
    image: "https://i.gyazo.com/2ccee43ae7c3d39a6e240c3fca4a9a1d.png",
  },
  {
    name: "Pescatarian",
    image: "https://i.gyazo.com/505461a664d67fd921b70c46441c19ee.png",
  },
  {
    name: "Shelfish-Free",
    image: "https://i.gyazo.com/8b15e2175497d881011f8f3680e710ea.png",
  },
  {
    name: "Soy-Free",
    image: "https://i.gyazo.com/5d979d05d455d95224e3e80bddfee440.png",
  },
  {
    name: "Sugar-Free",
    image: "https://i.gyazo.com/12d22819990bc88e4354e3aa889d9cb6.png",
  },
  {
    name: "Vegan",
    image: "https://i.gyazo.com/7f331ad4bc91185c3c4b886ed612e93c.png",
  },
  {
    name: "Vegetarian",
    image: "https://i.gyazo.com/4571f496108c47d0101c33648ba67681.png",
  },
];

export const ingredients: Ingredient[][] = [Produce, Meat, Dairy, Baking, Diet];
