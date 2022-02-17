// common
export interface TitleString {
	title: string
}

// Login
export interface LoginForm {
	email: string
	password: string
}

export interface LoginResponse {
	accessToken: string
	user: LoginUserInfo
}

export interface LoginUserInfo {
	createdAt: string
	email: string
	id: number
	name: string
	password: string
	updatedAt: string
}

// Board
export interface FetchBoardResponse {
	list: FetchBoardResponseItemInfo[]
}

export interface FetchBoardResponseItem {
	item: FetchBoardResponseItemInfo
}

export interface FetchBoardResponseItemInfo {
	bgColor: string
	createdAt: string
	id: number
	lists?: any
	title: string
	updatedAt: string
	userId: number
}

export interface UpdateBoardInfo {
	bid: string
	data: TitleString
}

// List
export interface CreateListForm {
	title: string
	boardId: number
	pos: number
}

export interface UpdateListInfo {
	lid: number
	data: TitleString
}

export interface UpdateListResponse {
	title?: string
	pos?: number
}

// Card
export interface FetchCardItem {
	item: FetchCardItemInfo
}

export interface FetchCardItemInfo {
	createdAt: string
	description: string | null
	id: number
	listId: number
	pos: number
	title: string
	updatedAt: string
}

export interface CreateCardInfo {
	title: string
	listId: number
	pos: number
}

export interface CreateCardResponse {
	createdAt: string
	id: number
	listId: number
	pos: number
	title: string
	updatedAt: string
}

export interface UpdateCardInfo {
	cid: number
	data: UpdateCardData
}

export interface UpdateCardData {
	listId: number
	title?: string
	description?: string
}

export interface UpdateCardResponse {
	createdAt: string
	description: string
	id: number
	listId: number
	pos: number
	title: string
	updatedAt: string
}
