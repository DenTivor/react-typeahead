import delay from './delay';

const icons = [
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
];

class IconsApi {
    static getAllIcons() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], icons));
            }, delay);
        });
    }

    static findIcons(query) {
        let newIcons = this.getItemsForSearch(query);

        // debugger;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // debugger;
                resolve(Object.assign([], newIcons));
            }, delay);
        });
    }

    static getItemsForSearch(query) {
        let result = [];

        icons.forEach((item) => {
            if (item.name.indexOf(query) > -1) {
                result.push(item);
            }
        });

        // debugger;
        return result;
    }
}

export default IconsApi;