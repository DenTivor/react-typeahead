import { IconCard } from './model'
import { forEach, includes } from 'lodash'

const items: ProfileCard[] = [
  {
    "id": "589acaef5719420a3336e320",
    "description": "User blue icon",
    "url": "some/user/blue/icon.png",
  },
  {
    "id": "589ac1111111111a3336e320",
    "description": "User light grey icon",
    "url": "some/user/light/grey/icon.png",
  },
]

const SERVICE_STUB = {
	get: (filter: string) => {
		const value = filter.trim();

		let matches = [];

    debugger;
		forEach(items, (item) => {
			if (includes(item.realName, value)
				|| includes(item.screenName, value)
				|| includes(item.description, value)) {
				matches.push(item);
			}
		});

		return matches;
	}
}

export default SERVICE_STUB