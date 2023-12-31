const Data = [];

const coffeeTypes = [
    {
        id: 1,
        name: 'Espresso ',
        description: 'A concentrated coffee brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans.',
        price: 2.99,
        ingredients: ['Coffee Beans', 'Hot Water'],
        size: 'Small',
        type: 'Single Shot',
        milk: 'No Milk',
        img: require('../assets/Espresso.png'),
    },
    {
        id: 2,
        name: 'Cappuccino',
        description: 'A coffee drink that is composed of double espresso and steamed milk, with the surface topped with foamed milk.',
        price: 3.49,
        ingredients: ['Espresso', 'Steamed Milk', 'Foamed Milk'],
        size: 'Medium',
        type: 'Regular',
        milk: 'Whole Milk',
        img: require('../assets/Cappuccino.png'),
    },
    {
        id: 3,
        name: 'Latte',
        description: 'A coffee drink made with espresso and steamed milk. It is often topped with a small amount of milk foam.',
        price: 3.99,
        ingredients: ['Espresso', 'Steamed Milk', 'Milk Foam'],
        size: 'Medium',
        type: 'Regular',
        milk: '2% Milk',
        img: require('../assets/Latte.png'),
    },
    {
        id: 4,
        name: 'Mocha',
        description: 'A coffee beverage that combines espresso, hot milk, and chocolate, often topped with whipped cream.',
        price: 4.49,
        ingredients: ['Espresso', 'Hot Milk', 'Chocolate', 'Whipped Cream'],
        size: 'Medium',
        type: 'Flavored',
        milk: 'Whole Milk',
        img: require('../assets/Mocha_trans.png'),
    },
    {
        id: 5,
        name: 'Americano',
        description: 'A diluted espresso with hot water, resulting in a coffee that is similar in strength but different in flavor from drip coffee.',
        price: 2.99,
        ingredients: ['Espresso', 'Hot Water'],
        size: 'Medium',
        type: 'Regular',
        milk: 'No Milk',
        img: require('../assets/americano.png'),
    },
    {
        id: 6,
        name: 'Café au Lait',
        description: 'A coffee drink made with equal parts of brewed coffee and steamed milk.',
        price: 3.29,
        ingredients: ['Brewed Coffee', 'Steamed Milk'],
        size: 'Medium',
        type: 'Regular',
        milk: 'Whole Milk',
        img: require('../assets/americano.png'),
    },
    {
        id: 7,
        name: 'Macchiato',
        description: 'An espresso with a small amount of foamed milk on top.',
        price: 3.79,
        ingredients: ['Espresso', 'Foamed Milk'],
        size: 'Small',
        type: 'Single Shot',
        milk: '2% Milk',
        img: require('../assets/glace.png'),
    },
    {
        id: 8,
        name: 'Iced Coffee',
        description: 'Chilled coffee with ice cubes and optional milk and sweeteners.',
        price: 3.99,
        ingredients: ['Chilled Coffee', 'Ice Cubes', 'Milk (Optional)', 'Sweeteners (Optional)'],
        size: 'Large',
        type: 'Iced',
        milk: 'No Milk',
        img: require('../assets/flatwhite_trans.png'),
    },
    {
        id: 9,
        name: 'Turkish Coffee',
        description: 'A method of brewing very fine coffee grounds with water and often cardamom, served unfiltered.',
        price: 3.99,
        ingredients: ['Coffee Grounds', 'Water', 'Cardamom (Optional)'],
        size: 'Small',
        type: 'Traditional',
        milk: 'No Milk',
        img: require('../assets/glace.png'),
    },
    // {
    //     id: 10,
    //     name: 'Ristretto',
    //     description: 'An even more concentrated espresso with a shorter extraction time.',
    //     price: 3.49,
    //     ingredients: ['Coffee Beans', 'Hot Water'],
    //     size: 'Small',
    //     type: 'Single Shot',
    //     milk: 'No Milk',
    //     img: 'Espresso.png',
    // },
    // {
    //     id: 11,
    //     name: 'Café con Leche',
    //     description: 'A coffee drink made with brewed coffee and hot milk, similar to a latte.',
    //     price: 3.79,
    //     ingredients: ['Brewed Coffee', 'Hot Milk'],
    //     size: 'Medium',
    //     type: 'Regular',
    //     milk: 'Whole Milk',
    //     img: 'Espresso.png',
    // },
    // {
    //     id: 12,
    //     name: 'Mochaccino',
    //     description: 'A variation of the mocha, combining espresso, hot milk, chocolate, and whipped cream.',
    //     price: 4.99,
    //     ingredients: ['Espresso', 'Hot Milk', 'Chocolate', 'Whipped Cream'],
    //     size: 'Medium',
    //     type: 'Flavored',
    //     milk: 'Whole Milk',
    //     img: 'Espresso.png',
    // },
    // {
    //     id: 13,
    //     name: 'Red Eye',
    //     description: 'A coffee drink made by combining brewed coffee with a shot of espresso.',
    //     price: 4.29,
    //     ingredients: ['Brewed Coffee', 'Espresso'],
    //     size: 'Medium',
    //     type: 'Regular',
    //     milk: 'No Milk',
    //     img: 'Espresso.png',
    // },
    // {
    //     id: 14,
    //     name: 'Affogato',
    //     description: 'A dessert made by pouring a shot of hot espresso over a scoop of vanilla ice cream.',
    //     price: 4.79,
    //     ingredients: ['Espresso', 'Vanilla Ice Cream'],
    //     size: 'Small',
    //     type: 'Dessert',
    //     milk: 'No Milk',
    //     img: 'Espresso.png',
    // },
    // {
    //     id: 15,
    //     name: 'Vienna Coffee',
    //     description: 'A coffee drink made by adding whipped cream to a strong coffee and often flavored with cinnamon or chocolate.',
    //     price: 4.49,
    //     ingredients: ['Strong Coffee', 'Whipped Cream', 'Cinnamon (Optional)', 'Chocolate (Optional)'],
    //     size: 'Large',
    //     type: 'Specialty',
    //     milk: 'Whole Milk',
    //     img: 'Espresso.png',
    // },
    // {
    //     id: 16,
    //     name: 'Irish Coffee',
    //     description: 'A cocktail consisting of hot coffee, Irish whiskey, sugar, and topped with whipped cream.',
    //     price: 5.49,
    //     ingredients: ['Hot Coffee', 'Irish Whiskey', 'Sugar', 'Whipped Cream'],
    //     size: 'Medium',
    //     type: 'Alcoholic',
    //     milk: 'No Milk',
    //     img: 'Espresso.png',
    // },
    // {
    //     id: 17,
    //     name: 'Decaf Coffee',
    //     description: 'Coffee with most of the caffeine removed during processing.',
    //     price: 2.99,
    //     ingredients: ['Decaffeinated Coffee'],
    //     size: 'Medium',
    //     type: 'Regular',
    //     milk: '2% Milk',
    //     img: 'Espresso.png',
    // },
    // {
    //     id: 18,
    //     name: 'Café Cubano',
    //     description: 'A type of espresso originating from Cuba, often sweetened with sugar during brewing.',
    //     price: 3.99,
    //     ingredients: ['Espresso', 'Sugar'],
    //     size: 'Small',
    //     type: 'Single Shot',
    //     milk: 'No Milk',
    //     img: 'Espresso.png',
    // },
    // {
    //     id: 19,
    //     name: 'Café de Olla',
    //     description: 'A Mexican coffee flavored with cinnamon and piloncillo (unrefined cane sugar).',
    //     price: 3.99,
    //     ingredients: ['Coffee', 'Cinnamon', 'Piloncillo'],
    //     size: 'Medium',
    //     type: 'Flavored',
    //     milk: 'No Milk',
    //     img: './assets/Espresso.png',
    // },
    // {
    //     id: 20,
    //     name: 'Black Coffee',
    //     description: 'A simple, classic coffee made with just coffee and water, served without milk or sweeteners.',
    //     price: 2.49,
    //     ingredients: ['Coffee Beans', 'Hot Water'],
    //     size: 'Medium',
    //     type: 'Regular',
    //     milk: 'No Milk',
    //     img: 'Espresso.png',
    // },
];

Data.coffeeTypes = coffeeTypes;

export default Data;