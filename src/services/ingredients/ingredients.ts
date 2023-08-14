interface Ingredient {
  name: string,
  image: string | "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/"
}

const Produce: Ingredient[] = [
  { name: "Apple", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Avocados", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Bannanas", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Cucumber", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "EggPlant", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Grapes", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Orange", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Peas", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Pineapple", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Bell Pepper", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Broccoli", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Carrot", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Green Beans", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Lemon", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Lettuce", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Potato", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Spinach", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Strawberry", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Cauliflower", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Celery", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Corn", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Lime", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Mushroom", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Onion", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Tomato", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Watermelon", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Zuchini", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" }
];

const Meat: Ingredient[] = [
  { name: "Beef", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Chicken", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Clams", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Pork", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Sardines", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Salmon", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Cod", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Crab", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Ham", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Sausage", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Scallops", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Shrimp", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Lamb", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Lobster", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Muscles", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Tilapia", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Tuna", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Turkey", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" }
];

const Dairy: Ingredient[] = [
  { name: "Almond Milk", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Brie", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Butter", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Cream Cheese", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Feta", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Goat Cheese", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Parmesean", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Provolone", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Ricotta", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Buttermilk", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Cheddar", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Cheese", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Greek Yoghurt", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Heavy Cream", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Low-Fat Milk", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Sour Cream", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Soy Milk", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Swiss", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Coconut Milk", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Condensed Milk", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Cottage Cheese", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Milk", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Mozarella", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Oat Milk", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Whipped Cream", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Whole Milk", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Yoghurt", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" }
];
const Baking: Ingredient[] = [
  { name: "Baking Powder", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Baking Soda", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Brown Sugar", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Cream of Tartar", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Flour", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Ginger", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Cardamom", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Cayenne Pepper", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Cinnamon", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Honey", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Maple Syrup", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Nutmeg", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Cloves", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Cocoa Powder", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Corn Starch", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Olive Oil", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Oregano", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Pepper", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" }
];

const Diet: Ingredient[] = [
  { name: "Dairy-Free", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Egg-Free", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Gluten-Free", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Organic", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Paleo", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Pescatarian", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Halal", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Kosher", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Lactose-Free", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Shelfish-Free", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Soy-Free", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Sugar-Free", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Low-Carb", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Low-Fat", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Nut-Free", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Vegan", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Vegetarian", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" },
  { name: "Wheat-Free", image: "https://www.flickr.com/photos/198967395@N06/53115739812/in/dateposted-public/" }
];

export const ingredients: Ingredient[][] = [Produce, Meat, Dairy, Baking, Diet];