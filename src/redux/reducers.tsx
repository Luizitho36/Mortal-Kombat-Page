import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
	{
		id: "1",
		name: "Arcade Mortal Kombat (1992)",
		price: 200,
	},
	{
		id: "2",
		name: "Arcade Mortal Kombat II",
		price: 600,
	},
	{
		id: "3",
		name: "Arcade Mortal Kombat 3",
		price: 400,
	},
];

export type ItemId = string;

export interface Item {
	name: string;
	price: number;
}

export interface ItemWithId extends Item {
	id: ItemId;
}

const initialState: ItemWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).carrito : DEFAULT_STATE;
})();

export const carritoSlice = createSlice({
	name: "carrito",
	initialState,
	reducers: {
		addNewItem: (state, action: PayloadAction<Item>) => {
			const id = crypto.randomUUID()
			return state.concat({ id, ...action.payload })
		},
		deleteItemById: (state, action: PayloadAction<ItemId>) => {
			const id = action.payload;
			return state.filter((item) => item.id !== id);
		},
		rollbackItem: (state, action: PayloadAction<ItemWithId>) => {
			const isItemAlreadyDefined = state.some(item => item.id === action.payload.id)
			if (!isItemAlreadyDefined) {
				state.push(action.payload)
			}
		}
	},
});

export default carritoSlice.reducer;

export const { addNewItem, deleteItemById, rollbackItem } = carritoSlice.actions;
