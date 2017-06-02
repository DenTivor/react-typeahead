import { Icon } from '../model'
import { forEach, includes } from 'lodash'

const items: Icon[] = [
   {
    name: 'User blue icon',
    nickname: '@user_blue',
    tweets: '42978',
    following: '4200',
    followers: '8',
    text: 'В четчерг, четвертого числа...'
    
  },
  {
    name: 'User red icon',
    nickname: '@user_red',
    tweets: '92978',
    following: '200',
    followers: '18',
    text: 'В friday, пятого числа...'
    
  },
  {
    name: 'User other red icon',
    nickname: '@user_other_red',
    tweets: '9297823',
    following: '290',
    followers: '180',
    text: 'В tuesday, пятого числа...'
    
  },
  {
    name: 'User green icon',
    nickname: '@user_green',
    tweets: '42978',
    following: '4200',
    followers: '8',
    text: 'В monday, шестого числа...'
  }
]

const IconsApi = {
	get: (filter: string) => {
		const value = filter.trim();

		let matches = [];

		forEach(items, (item) => {
			if (includes(item.name, value)
				|| includes(item.nickname, value)) {
				matches.push(item);
			}
		});

		return matches;
	}
}

export default IconsApi;