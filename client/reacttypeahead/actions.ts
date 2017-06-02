import { Promise } from 'es6-promise';
import IconsApi from './api/mockIconsApi';
import { Icon } from './model';


const findIcons = (value: string) => {
  const promise: Promise<Icon[]> = new Promise(
    (resolve: (icons: Icon[]) => void, reject: (str: string) => void) => {
      resolve(IconsApi.get(value));
    }
  );
  
  return promise; 
}

export {
  findIcons
}
