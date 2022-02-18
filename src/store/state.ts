import { FetchBoardResponseItemInfo, FetchCardItemInfo } from '@/apis/types'

export const state = {
	token: '',
	boards: [] as FetchBoardResponseItemInfo[],
	board: {} as FetchBoardResponseItemInfo,
	card: {} as FetchCardItemInfo,
	navColor: '#026aa7',
	bodyColor: '#ffffff',
}

export type RootState = typeof state
