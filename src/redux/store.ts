import { configureStore } from '@reduxjs/toolkit'
import ComplexSlice from './slices/Complex/ComplexSlice'
import CombinationSlice from './slices/Combination/CombinationSlice'
import CartSlice from './slices/Cart/CartSlice'

export const store = configureStore({
	reducer: {
		complex: ComplexSlice,
		combination: CombinationSlice,
		cart: CartSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
