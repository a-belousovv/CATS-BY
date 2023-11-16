import { configureStore } from '@reduxjs/toolkit'
import ComplexSlice from './slices/Complex/ComplexSlice'
import CombinationSlice from './slices/Combination/CombinationSlice'
import CartSlice from './slices/Cart/CartSlice'
import NavigationSlice from './slices/Navigation/Navigation'
import CatalogSlice from './slices/Catalog/CatalogSlice'

export const store = configureStore({
	reducer: {
		complex: ComplexSlice,
		combination: CombinationSlice,
		cart: CartSlice,
		navigation: NavigationSlice,
		catalog: CatalogSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
