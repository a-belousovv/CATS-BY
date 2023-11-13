import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { NavigationInitial } from '../../../@types/redux/Navigation/types'

const initialState: NavigationInitial = {
	isBurger: false,
}
export const NavigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		setIsBurger: (state, action: PayloadAction<boolean>) => {
			state.isBurger = action.payload
		},
	},
})

export const { setIsBurger } = NavigationSlice.actions

export default NavigationSlice.reducer
