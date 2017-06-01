import delay from './delay';

const icons = [
    { id: 1, title: 'Go to shopping', completed: false },
    { id: 2, title: 'Start Gym', completed: false },
    { id: 3, title: 'Do the homework', completed: true },
    { id: 4, title: 'Learn ReactJS', completed: false },
    { id: 5, title: 'Understand Redux', completed: true }
];

class IconsApi {
    static getIconsTodos() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], icons));
            }, delay);
        });
    }
}

export default IconsApi;