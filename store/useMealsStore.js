import { create } from 'zustand'

const loadFromSession = (key, defaultValue) => {
    if (typeof window !== 'undefined') {
        const stored = sessionStorage.getItem(key)
        return stored ? JSON.parse(stored) : defaultValue
    }
    return defaultValue
}

const saveToSession = (key, value) => {
    if (typeof window !== 'undefined') {
        sessionStorage.setItem(key, JSON.stringify(value))
    }
}

export const useMealsStore = create((set, get) => ({
    meals: loadFromSession('meals', [
        { name: 'Gleis Gourmet Burger', price: 12.5, location: 'Bahnhof', store: 'Gleis Gourmet', count: 0 },
        { name: 'Kupplung & Curry Spezial', price: 10, location: 'Bahnhof', store: 'Kupplung & Curry', count: 10 },
        { name: 'Ristorante Binario Pizza', price: 14, location: 'Bahnhof', store: 'Ristorante Binario', count: 2 },
        { name: 'Sushu Express 24 Menü', price: 13, location: 'Bahnhof', store: 'Sushu Express 24', count: 14 },
        { name: 'Café Abfahrt Sandwich', price: 8.5, location: 'Bahnhof', store: 'Café Abfahrt', count: 19 },
        { name: 'Indian Palace Curry', price: 11, location: 'Berufsschule', store: 'Indian Palace', count: 2 },
        { name: 'Royal Döner Menü', price: 9.5, location: 'Berufsschule', store: 'Royal Döner', count: 4 },
        { name: 'Mio Pizza Margherita', price: 12, location: 'Berufsschule', store: 'Mio Pizza', count: 7 },
        { name: 'Restaurant Rösli Menü', price: 13, location: 'Berufsschule', store: 'Restaurant Rösli', count: 9 },
    ]),
    cart: loadFromSession('cart', []),

    addToCart: (meal, quantity) => set((state) => {
        if (meal.count < quantity) return state

        const existing = state.cart.find((item) => item.name === meal.name)
        let updatedCart
        if (existing) {
            updatedCart = state.cart.map((item) =>
                item.name === meal.name
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            )
        } else {
            updatedCart = [...state.cart, { ...meal, quantity }]
        }

        const updatedMeals = state.meals.map((m) =>
            m.name === meal.name
                ? { ...m, count: m.count - quantity }
                : m
        )

        saveToSession('cart', updatedCart)
        saveToSession('meals', updatedMeals)

        return {
            cart: updatedCart,
            meals: updatedMeals
        }
    }),

    removeFromCart: (mealName) => set((state) => {
        const item = state.cart.find((i) => i.name === mealName)
        if (!item) return state

        const updatedMeals = state.meals.map((m) =>
            m.name === mealName ? { ...m, count: m.count + item.quantity } : m
        )

        const updatedCart = state.cart.filter((i) => i.name !== mealName)

        saveToSession('cart', updatedCart)
        saveToSession('meals', updatedMeals)

        return {
            cart: updatedCart,
            meals: updatedMeals
        }
    }),

    clearCart: () => set((state) => {
        const updatedMeals = state.meals.map((m) => {
            const item = state.cart.find((i) => i.name === m.name)
            return item ? { ...m, count: m.count + item.quantity } : m
        })

        saveToSession('cart', [])
        saveToSession('meals', updatedMeals)

        return { cart: [], meals: updatedMeals }
    }),

    getMealsByLocation: (location) => get().meals.filter((m) => m.location === location),
}))
