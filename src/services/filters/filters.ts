
const DishType: string[] = [
    "main course",
    "side dish",
    "dessert",
    "appetizer",
    "salad",
    "bread",
    "breakfast",
    "soup",
    "beverage",
    "sauce",
    "marinade",
    "fingerfood",
    "snack",
    "Drink",
] 
const Equipment: string[] = [
    "Blender",
    "Frying Pan",
    "bowl",
] 

export const filters: {[key: string]: string[]} = {
    "Dish Type": DishType,
    "Equipment": Equipment,
}
