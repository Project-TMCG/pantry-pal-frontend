interface Ingredient {
  name: string;
  image: string | undefined;
}

const Produce: Ingredient[] = [
  {
    name: "Apple",
    image: "https://i.gyazo.com/37c70b488dceab57bec589f176bbcb18.png",
  },
  {
    name: "Avocados",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Bannanas",
    image: "https://i.gyazo.com/fafe13127de3874f7c5ecede5940c5a5.png",
  },
  {
    name: "Cucumber",
    image: "https://i.gyazo.com/f051b9b88da7809f203e324c9c38d267.png",
  },
  {
    name: "EggPlant",
    image: "https://i.gyazo.com/7185cbb32df313d590a0a2aa1597e025.png",
  },
  {
    name: "Grapes",
    image: "https://i.gyazo.com/5a44acce68df7d5b0fbf7e5bee8a0c1f.png",
  },
  {
    name: "Orange",
    image: "https://i.gyazo.com/0dcec8c8140d378e1aea5c247dd49cb4.png",
  },
  {
    name: "Peas",
    image: "https://i.gyazo.com/fbd9a539ae3dac67ff047c87437731c8.png",
  },
  {
    name: "Pineapple",
    image: "https://i.gyazo.com/47e15735eb100e5d4fef87902ad7ebb7.png",
  },
  {
    name: "Bell Pepper",
    image: "https://i.gyazo.com/85f2da0d363434de8af57e79ccedd2cc.png",
  },
  {
    name: "Broccoli",
    image: "https://i.gyazo.com/372354b6b8e17b6902c7d20acbc6da99.png",
  },
  {
    name: "Carrot",
    image: "https://i.gyazo.com/adb1f52d3ea23272f4e466e64df38ff3.png",
  },

  {
    name: "Green Beans",
    image: "https://i.gyazo.com/926d9010ed6b6332a1c4dd8d054cb807.png",
  },
  {
    name: "Lemon",
    image: "https://i.gyazo.com/f848c00f927d2cb0ebe156a0e99d543c.png",
  },
  {
    name: "Lettuce",
    image: "https://i.gyazo.com/b50cb2d6f23a71da3293f0a96360bc88.png",
  },
  {
    name: "Potato",
    image: "https://i.gyazo.com/bbae3ca434f1bd4c44cc9c94a86a63fc.png",
  },
  {
    name: "Spinach",
    image: "https://i.gyazo.com/f003283ce24ca5a91d4623a579701a05.png",
  },
  {
    name: "Strawberry",
    image: "https://i.gyazo.com/0ee217ed0d07939fb41228857b39746f.png",
  },
  {
    name: "Cauliflower",
    image: "https://i.gyazo.com/5a69d1305cf79570205d4fc5854ec404.png",
  },
  {
    name: "Celery",
    image: "https://i.gyazo.com/65772bc951d88633c2d62994d645b38e.png",
  },
  {
    name: "Corn",
    image: "https://i.gyazo.com/0710c11b048ef573a605329a99616d84.png",
  },
  {
    name: "Lime",
    image: "https://i.gyazo.com/ab25f1db52908add535e0172d91754bd.png",
  },
  {
    name: "Mushroom",
    image: "https://i.gyazo.com/262ec8332f6b26be527f7a1edc9a69db.png",
  },
  {
    name: "Onion",
    image: "https://i.gyazo.com/089f99f5314dafdfeaf6a3301885277b.png",
  },
  {
    name: "Tomato",
    image: "https://i.gyazo.com/4f1e1b7c1847e03a4ebae3b1164deb49.png",
  },
  {
    name: "Watermelon",
    image: "https://i.gyazo.com/e18b008ae237829b9976cd8ef554cf0b.png",
  },
  {
    name: "Zuchini",
    image: "https://i.gyazo.com/1a88c956d9e7590b9a92ccf6c0b6b96c.png",
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
    name: "Sour Cream",
    image: "https://i.gyazo.com/a5664b10517b125bf46f0a3024489663.png",
  },
  {
    name: "Soy Milk",
    image: "https://i.gyazo.com/3245de7e91195eb59cf66eb0b61f4476.png",
  },
  {
    name: "Swiss Cheese",
    image: "https://i.gyazo.com/0da7d9b60441223f2d48ec2d7f0b987c.png",
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
    image: "https://i.gyazo.com/7a56e2fb4c148a318b1593744fefeed3.png",
  },
  {
    name: "Baking Soda",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Brown Sugar",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Cream of Tartar",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Flour",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Ginger",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Cardamom",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Cayenne Pepper",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Cinnamon",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Honey",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Maple Syrup",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Nutmeg",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Cloves",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Cocoa Powder",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Corn Starch",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Olive Oil",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Oregano",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Pepper",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
];

const Diet: Ingredient[] = [
  {
    name: "Dairy-Free",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Egg-Free",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Gluten-Free",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Organic",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Paleo",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Pescatarian",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Halal",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Kosher",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Lactose-Free",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Shelfish-Free",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Soy-Free",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Sugar-Free",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Low-Carb",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Low-Fat",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Nut-Free",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Vegan",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Vegetarian",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
  {
    name: "Wheat-Free",
    image: "https://i.gyazo.com/2d149b5b1d4433f5310776ecb23fb872.png",
  },
];

export const ingredients: Ingredient[][] = [Produce, Meat, Dairy, Baking, Diet];
