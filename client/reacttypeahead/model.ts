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
  processStatus: string;
}

export type ReceiveIcons = {
	icons: Icon[];
  processStatus: string;
}

export type IState = {
  icons?: Icon[];
  value?: string;	
  processStatus?: string;
}