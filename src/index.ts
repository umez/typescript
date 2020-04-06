// import { User } from './models/User';
// import { UserEdit } from './views/UserEdit';

import { CollectionView } from "./views/CollectionView";
import { Collection } from "./models/collection";
import { UserProps, User } from "./models/User";
import { UserList } from "./views/UserList";

// const root =document.getElementById('root');
// const user = User.buildUser({name: 'NAME', age: 20})
// if(root) {
//   const userEdit = new UserEdit(root, user);
//   userEdit.render();
// } else  {
//   throw new Error('Root element not found');
// }


const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
  return User.buildUser(json);
})

users.fetch();

users.on('change', () => {
  const root = document.getElementById('root');
  if(root) {
    new UserList(root, users).render();
  }

})
