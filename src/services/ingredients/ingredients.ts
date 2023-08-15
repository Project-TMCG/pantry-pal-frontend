interface Ingredient {
  name: string;
  image: string | undefined;
}

const Produce: Ingredient[] = [
  {
    name: "Apple",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Avocados",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Bananas",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Cucumber",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "EggPlant",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Grapes",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Orange",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Peas",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Pineapple",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Bell Pepper",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Broccoli",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Carrot",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Green Beans",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Lemon",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Lettuce",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Potato",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Spinach",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Strawberry",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Cauliflower",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Celery",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Corn",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Lime",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Mushroom",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Onion",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  { name: "Tomato", image: "https://wallpapercave.com/wp/wp5329505.jpg" },
  {
    name: "Watermelon",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Zuchini",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
];

const Meat: Ingredient[] = [
  {
    name: "Beef",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Chicken",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Clams",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Pork",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Sardines",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Salmon",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Cod",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Crab",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Ham",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Sausage",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Scallops",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Shrimp",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Lamb",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Lobster",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Muscles",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Tilapia",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Tuna",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Turkey",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
];

const Dairy: Ingredient[] = [
  {
    name: "Almond Milk",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Brie",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Butter",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Cream Cheese",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Feta",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Goat Cheese",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Parmesean",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Provolone",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Ricotta",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Buttermilk",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Cheddar",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Cheese",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Greek Yoghurt",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Heavy Cream",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Low-Fat Milk",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Sour Cream",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Soy Milk",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Swiss",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Coconut Milk",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Condensed Milk",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Cottage Cheese",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Milk",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Mozarella",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Oat Milk",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Whipped Cream",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Whole Milk",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Yoghurt",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
];
const Baking: Ingredient[] = [
  {
    name: "Baking Powder",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Baking Soda",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Brown Sugar",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Cream of Tartar",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Flour",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Ginger",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Cardamom",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Cayenne Pepper",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Cinnamon",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Honey",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Maple Syrup",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Nutmeg",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Cloves",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Cocoa Powder",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Corn Starch",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Olive Oil",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Oregano",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
  {
    name: "Pepper",
    image: "https://spoonacular.com/recipeImages/642582-312x231.jpg",
  },
];

const Diet: Ingredient[] = [
  { name: "Dairy-Free", image: undefined },
  { name: "Egg-Free", image: undefined },
  { name: "Gluten-Free", image: undefined },
  { name: "Organic", image: undefined },
  { name: "Paleo", image: undefined },
  { name: "Pescatarian", image: undefined },
  { name: "Halal", image: undefined },
  { name: "Kosher", image: undefined },
  { name: "Lactose-Free", image: undefined },
  { name: "Shelfish-Free", image: undefined },
  { name: "Soy-Free", image: undefined },
  { name: "Sugar-Free", image: undefined },
  { name: "Low-Carb", image: undefined },
  { name: "Low-Fat", image: undefined },
  { name: "Nut-Free", image: undefined },
  { name: "Vegan", image: undefined },
  { name: "Vegetarian", image: undefined },
  { name: "Wheat-Free", image: undefined },
];

export const ingredients: Ingredient[][] = [Produce, Meat, Dairy, Baking, Diet];
