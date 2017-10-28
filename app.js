let menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],
        get appetizers() {

        },
        set appetizers(appetizerIn) {

        },
        get mains() {

        },
        set mains(mainIn) {

        },
        get desserts() {

        },
        set desserts(dessertIn) {

        },
    },
    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        }
},
    addDishToCourse(courseName,dishName,dishPrice) {
        let dish= {
            name: dishName,
            price: dishPrice
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        let dishes = this._courses[courseName];
        let randomIndex = Math.floor(Math.random() * dishes.length);
    },
    generateRandomMeal() {
        let appetizer = getRandomDishFromCourse(this._appetizers);
        let main = getRandomDishFromCourse(this._mains);
        let dessert = getRandomDishFromCourse(this._desserts);
        let totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ... The price is $${totalPrice}.`;
    }
};
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('mains', 'Befsroganoff', 6.25);
menu.addDishToCourse('desserts', 'Tiramisu', 5.25);
let meal = menu.generateRandomMeal();
conole.log(meal);