import { RootState } from './state'

export const getters = {
	isAuth(state: RootState): boolean {
		return !!state.token
	},
}

export type Getters = typeof getters
