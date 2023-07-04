export const initialState = {
	basket: [],
	user: null,
};

function reducer(state, action) {
	console.log(action);
	// console.log(state)
	// console.log(action.item.quantity)
	switch (action.type) {
		case "ADD_TO_BASKET":
			const existingItem = state.basket.find(
				(item) => item.id === action.item.id
			);
			if (existingItem) {
				return {
					...state,
					basket: state.basket.map((item) =>
						item.id === action.item.id
							? { ...item, quantity: item.quantity + action.item.quantity } //1 + no of click
							: item
					),
				};
			} else {
				return {
					...state,
					basket: [...state.basket, action.item],
				};
			}
		case "DELETE":
			const existItem = state.basket.find((item) => item.id === action.item.id);
			if (existItem) {
				if (existItem.quantity === 1) {
					// Remove the item from the basket
					return {
						...state,
						basket: state.basket.filter((item) => item.id !== action.item.id), // if it one delete by filter and
					};
				} else {
					// Reduce the quantity of the item by 1
					return {
						...state,
						basket: state.basket.map((item) =>
							item.id === action.item.id
								? { ...item, quantity: item.quantity - 1 }
								: item
						),
					};
				}
			} else {
				return {
					...state,
					basket: [...state.basket, action.item],
				};
			}

		case "EMPTY_BASKET":
			return {
				...state,
				basket: [],
			};

		// case "REMOVE_FROM_BASKET":
		// 	const index = state.basket.findIndex(
		// 		(basketItem) => basketItem.id === action.id
		// 	);
		// 	let newBasket = [...state.basket];

		// 	if (index >= 0) {
		// 		newBasket.splice(index, 1);
		// 	} else {
		// 		console.warn(
		// 			`Cant remove product (id: ${action.id}) as its not in basket!`
		// 		);
		// 	}
		// 	return {
		// 		...state,
		// 		basket: newBasket,
		// 	};
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};

		default:
			return state;
	}
}

export default reducer;
