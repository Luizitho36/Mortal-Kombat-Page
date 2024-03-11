import { Item, ItemId, addNewItem, deleteItemById } from "../redux/reducers";
import { useAppDispatch } from "./store";

export const useItemActions = () => {
	const dispatch = useAppDispatch();

	const addItem = ({ name, price }: Item) => {
		dispatch(addNewItem({ name, price }))
	}

	const removeItem = (id: ItemId) => {
		dispatch(deleteItemById(id));
	};

	return { addItem, removeItem };
};
