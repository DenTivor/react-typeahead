export type Icon = {
  name?: string;
  nickname: string;
  tweets: string;
  following: string;
  followers: string;
  text: string;
};

export type RequestIcon = {
	value: string;
}

export type ReceiveIcons = {
	icons: Icon[];
}

export type IState = {
  icons?: Icon[];
  value?: string;	
}