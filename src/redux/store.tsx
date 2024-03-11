import { configureStore, type Middleware } from "@reduxjs/toolkit";
import { toast } from 'sonner';
import carritoReducer, { rollbackItem } from "./reducers";


const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

// const syncWithDatabaseMiddleware: Middleware = store => next => action => {
// 	const { type, payload } = action
// 	const previousState = store.getState() as RootState
// 	next(action)

// 	if (type === 'carrito/deleteItemById') { // <- eliminado un item
// 		const itemIdToRemove = payload
// 		const itemToRemove = previousState.carrito.find(item => item.id === itemIdToRemove)

// 		fetch(`https://jsonplaceholder.typicode.com/item/${itemIdToRemove}`, {
// 			method: 'DELETE'
// 		})
// 			.then(res => {
// 				if (res.ok) {
// 					toast.success(`Item ${payload} eliminado correctamente`)
// 				}
// 				throw new Error('Error al eliminar el item')
// 			})
// 			.catch(err => {
// 				toast.error(`Error deleting item ${itemIdToRemove}`)
// 				if (itemToRemove) store.dispatch(rollbackItem(itemToRemove))
// 				console.log(err)
// 				console.log('error')
// 			})
// 	}
// }

export const store = configureStore({
	reducer: {
		carrito: carritoReducer,
	},
	// middleware: [persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
