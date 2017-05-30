import { createAction, Action } from 'redux-actions'

import { Promise } from 'es6-promise'

import SERVICE_STUB from './service-stub'

import {
	ReceiveIcons, 
	RequestIcon, 
	IconCard 
} from './model'

import { 
	REQUEST_ICONS,
	RECEIVE_ICONS
} from './constants/ActionTypes'

const requestIcons = createAction<RequestIcon, string>(
	REQUEST_ICONS,
	(text: string) => ({value: text})
)

const receiveIcons = createAction<ReceiveIcons, IconCard[]>(
	RECEIVE_ICONS,
	(cards: IconCard[]) => ({cards: cards})
)

const fetchIcons = (value: string) => {
	const p: Promise<IconCard[]> = new Promise(
		(resolve: (hints: IconCard[]) => void, reject: (str: string) => void) => {
			resolve(SERVICE_STUB.get(value));
		}
	);
	
	return p;
}

export { requestIcons, receiveIcons, fetchIcons }