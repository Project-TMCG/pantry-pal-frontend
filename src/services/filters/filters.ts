const DishType: string[] = [
    "Appetizer",
    "Beverage",
    "Breakfast",
    "Dessert",
    "Main Course",
    "Side Dish",
    "Snack",
] 
const Equipment: string[] = [
    "Air Fryer",
    "Blender",
    "Food Processor",
    "Immersion Blender",
    "Juicer",
    "Microwave",
    "Milk Frother",
    "Mixer",
    "Pressure Cooker",
    "Rice Cooker",
    "Slow Cooker",
    "Toaster",
] 
const Calories: string[] = [
    "200 calories",
    "300 calories",
    "400 calories",
    "500 calories",
    "600 calories",
    "700 calories",
    "800 calories",
] 
const Protein: string[] = [
    "10 grams",
    "20 grams",
    "30 grams",
    "40 grams",
    "50 grams",
    "60 grams",
    "70 grams",
] 
const Fat: string[] = [
    "10 grams",
    "30 grams",
    "50 grams",
    "70 grams",
    "80 grams",
    "100 grams",
    "120 grams",
] 
const Fiber: string[] = [
    "10 grams",
    "20 grams",
    "30 grams",
    "40 grams",
    "50 grams",
] 
const Carbs: string[] = [
    "10 grams",
    "30 grams",
    "50 grams",
    "70 grams",
    "80 grams",
    "100 grams",
] 
const Cholesterol: string[] = [
    "50 millmiigrams",
    "100 millmiigrams",
    "150 millmiigrams",
    "200 millmiigrams",
    "250 millmiigrams",
    "300 millmiigrams",
] 
const Reviews: string[] = [
    "★",
    "★★",
    "★★★",
    "★★★★",
    "★★★★★",
] 

interface filterType {
    "Dish Type": string[],
    "Equipment": string[],
    "Calories": string[],
    "Protein (g)": string[],
    "Fat (g)": string[],
    "Fiber (g)": string[],
    "Carbs (g)": string[],
    "Cholesterol (mg)": string[],
    "Reviews": string[],
}

export const filters: filterType = {
    "Dish Type": DishType,
    "Equipment": Equipment,
    "Calories": Calories,
    "Protein (g)": Protein,
    "Fat (g)": Fat,
    "Fiber (g)": Fiber,
    "Carbs (g)": Carbs,
    "Cholesterol (mg)": Cholesterol,
    "Reviews": Reviews,
}