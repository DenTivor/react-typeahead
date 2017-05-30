export type IconCard = {
  id?: number;
  description: string;
  url: string;
};

export type RequestIcon = {
	value: string;
}

export type ReceiveIcons = {
	cards: IconCard[];
}

export type IState = {
	isFetching: boolean;
	cards?: IconCard[];
	value?: string;
};