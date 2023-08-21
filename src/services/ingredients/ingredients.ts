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
    image: "https://i.gyazo.com/37a2d37cb3368e71713bacd757b232d0.png",
  },
  {
    name: "Chicken",
    image: "https://i.gyazo.com/591c7aeafd977bfd7cce3e5d2dcc4af3.png",
  },
  {
    name: "Clams",
    image: "https://i.gyazo.com/d290f1edd579cc8f5ba423dd17b82860.png",
  },
  {
    name: "Cod",
    image: "https://i.gyazo.com/0b39694fc2984fd194de106eeddb15e2.png",
  },
  {
    name: "Crab",
    image: "https://i.gyazo.com/8b918ca94e9dc12dd351423d0877892e.png",
  },
  {
    name: "Ham",
    image: "https://i.gyazo.com/b8fd68ef6c297cae484c6df5360889f0.png",
  },
  {
    name: "Lamb",
    image: "https://i.gyazo.com/fbca157e72cee47ff6a5b13cc65e4f38.png",
  },
  {
    name: "Lobster",
    image: "https://i.gyazo.com/c11c1d878d6fb414ee05d28f663b369f.png",
  },
  {
    name: "Muscles",
    image: "https://i.gyazo.com/6c567a1d00219e89ee189a94c7c97c53.png",
  },
  {
    name: "Pork",
    image: "https://i.gyazo.com/e4c0dfbca410bc259cf375d86cdfaa1a.png",
  },
  {
    name: "Sardines",
    image: "https://i.gyazo.com/75e6785bef32e15fc92f27795a6a702f.png",
  },
  {
    name: "Salmon",
    image: "https://i.gyazo.com/7a56e2fb4c148a318b1593744fefeed3.png",
  },
  {
    name: "Sausage",
    image: "https://i.gyazo.com/8a6a96350c1cca4ffee929352345b7d4.png",
  },
  {
    name: "Scallops",
    image: "https://i.gyazo.com/694285ea89ecf94f6ae78a4e5a559994.png",
  },
  {
    name: "Shrimp",
    image: "https://i.gyazo.com/7fafcadd9e0402bd1da07e47c9ad4de7.png",
  },
  {
    name: "Tilapia",
    image: "https://i.gyazo.com/134e560c366b846d4ea5610e189e9ae3.png",
  },
  {
    name: "Tuna",
    image: "https://i.gyazo.com/77e20c7c0b370c1bdd1d5530fbcd06b3.png",
  },
  {
    name: "Turkey",
    image: "https://i.gyazo.com/f6550eca9a5157b7b362a82d719725c7.png",
  },
];


const Dairy: Ingredient[] = [
  {
    name: "Almond Milk",
    image: "https://i.gyazo.com/b3c3960f30c7a30c3c351459c719546e.png",
  },
  {
    name: "Brie",
    image: "https://i.gyazo.com/b8605d13b20290df4d3e4740db8f6014.png",
  },
  {
    name: "Butter",
    image: "https://i.gyazo.com/7e27dbdb06d6882092f0aad07a6f9536.png",
  },
  {
    name: "Buttermilk",
    image: "https://i.gyazo.com/6d893e5d7a205230458f422559e599d1.png",
  },
  {
    name: "Cheddar",
    image: "https://i.gyazo.com/c61844906b756039cf3ecade47987176.png",
  },
  {
    name: "Cheese",
    image: "https://i.gyazo.com/27e461e99cad8307a4488644e89d9c5b.png",
  },
  {
    name: "Coconut Milk",
    image: "https://i.gyazo.com/ebc30f67a56d503cfbc5f985a412a39f.png",
  },
  {
    name: "Condensed Milk",
    image: "https://i.gyazo.com/6ac512156e24126bf6f46cf674756ac4.png",
  },
  {
    name: "Cottage Cheese",
    image: "https://i.gyazo.com/53e58df371476d7d17a02b5d0ae9bf8b.png",
  },
  {
    name: "Cream Cheese",
    image: "https://i.gyazo.com/f81e650878fe6db051d84318564cf835.png",
  },
  {
    name: "Feta",
    image: "https://i.gyazo.com/3d90ce9b2a4417b4d8d91a932adad29c.png",
  },
  {
    name: "Goat Cheese",
    image: "https://i.gyazo.com/82b79e4da68f122fc05cc30d4c8c9d7a.png",
  },
  {
    name: "Greek Yogurt",
    image: "https://i.gyazo.com/1cd764111fdc3e80593bdc519253e544.png",
  },
  {
    name: "Heavy Cream",
    image: "https://i.gyazo.com/19e3fa3e6b8c1a259d690c1f3fb6b9bf.png",
  },
  {
    name: "Low-Fat Milk",
    image: "https://i.gyazo.com/44f0613d8ba28d480a0753712bbafa9a.png",
  },
  {
    name: "Milk",
    image: "https://i.gyazo.com/19e3fa3e6b8c1a259d690c1f3fb6b9bf.png",
  },
  {
    name: "Mozarella",
    image: "https://i.gyazo.com/bb53f7db618fc987f6a708a7d3151fab.png",
  },
  {
    name: "Oat Milk",
    image: "https://i.gyazo.com/707b4b4c02273021c03181f46baacaca.png",
  },
  {
    name: "Parmesean",
    image: "https://i.gyazo.com/56728233969ef23e4f0a540f9e59fb7b.png",
  },
  {
    name: "Provolone",
    image: "https://i.gyazo.com/01775f93a558621255efc72bc6f46ddb.png",
  },
  {
    name: "Ricotta",
    image: "https://i.gyazo.com/cb9105e69fb1c2e7c81ef0d7ea455523.png",
  },
  {
    name: "Soy Milk",
    image: "https://i.gyazo.com/3245de7e91195eb59cf66eb0b61f4476.png",
  },
  {
    name: "Sour Cream",
    image: "https://i.gyazo.com/a5664b10517b125bf46f0a3024489663.png",
  },
  {
    name: "Swiss Cheese",
    image: "https://i.gyazo.com/0da7d9b60441223f2d48ec2d7f0b987c.png",
  },
  {
    name: "Whipped Cream",
    image: "https://i.gyazo.com/0e35bba54f72e609eb20d74d0017d00c.png",
  },
  {
    name: "Whole Milk",
    image: "https://i.gyazo.com/76d509133a549c0ab0a0e6f84866902f.png",
  },
  {
    name: "Yogurt",
    image: "https://i.gyazo.com/6915f65d0af0b7e2bbebbd3662f53906.png",
  },
];

const Baking: Ingredient[] = [
  {
    name: "Baking Powder",
    image: "https://i.gyazo.com/dac7326c4ad6b76f4df0e40d232e3eba.png",
  },
  {
    name: "Baking Soda",
    image: "https://i.gyazo.com/de7e9919c0296049fc68974d88409fd6.png",
  },
  {
    name: "Cardamom",
    image: "https://i.gyazo.com/767e7a35fcb7587f5ed7926f56a6c064.png",
  },
  {
    name: "Cayenne Pepper",
    image: "https://i.gyazo.com/a6de0c39c171a04c5f7517b9436d4a36.png",
  },
  {
    name: "Cinnamon",
    image: "https://i.gyazo.com/7d9d4a918fd7b8e8a6ee3cd95c0d0545.png",
  },
  {
    name: "Cloves",
    image: "https://i.gyazo.com/d381f2fa3536bf46aa9d45a2bfa29908.png",
  },
  {
    name: "Cocoa Powder",
    image: "https://i.gyazo.com/090f239cf06a763107ac46d4873f3594.png",
  },
  {
    name: "Corn Starch",
    image: "https://i.gyazo.com/85abd33eefbb2dd76df47988c4d763dc.png",
  },
  {
    name: "Flour",
    image: "https://i.gyazo.com/efd648d25c7c0fa0705f14dd1502c435.png",
  },
  {
    name: "Ginger",
    image: "https://i.gyazo.com/c8181ae8dc74f9e37d263206bf1c6e25.png",
  },
  {
    name: "Honey",
    image: "https://i.gyazo.com/f498256b9e4c0bb5fc544484420c030c.png",
  },
  {
    name: "Maple Syrup",
    image: "https://i.gyazo.com/736dcbabfdbe4e56a1ab54e633816c3b.png",
  },
  {
    name: "Nutmeg",
    image: "https://i.gyazo.com/cfa7772f896a37a2d17039af983113ea.png",
  },
  {
    name: "Olive Oil",
    image: "https://i.gyazo.com/4519ca8e6c729d4490478452db6f7f0c.png",
  },
  {
    name: "Oregano",
    image: "https://i.gyazo.com/049f465913aa6f62656ffd0d756ed326.png",
  },
  {
    name: "Pepper",
    image: "https://i.gyazo.com/6ba850b9b61593af96be0224c42958c3.png",
  },
  {
    name: "Powdered Sugar",
    image: "https://i.gyazo.com/eb62abec9430e7b7cc19f41dc6409ae9.png",
  },
  {
    name: "Rosemary",
    image: "https://i.gyazo.com/90d76ebbb2c9645458f2074e4bad20e8.png",
  },
  {
    name: "Salt",
    image: "https://i.gyazo.com/c9a74b768ffad8a3156471d4010e455d.png",
  },
  {
    name: "Thyme",
    image: "https://i.gyazo.com/3ac4136641a2ca66606cd73db655eec8.png",
  },
  {
    name: "Turmeric",
    image: "https://i.gyazo.com/13d0aafb8a4ae82176089501abe99dc5.png",
  },
  {
    name: "Vanilla Extract",
    image: "https://i.gyazo.com/129d7d9c55f1201e714336f4421e5aad.png",
  },
  {
    name: "White Sugar",
    image: "https://i.gyazo.com/5643d50c1d14ea461317d0fd24dedcc6.png",
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
