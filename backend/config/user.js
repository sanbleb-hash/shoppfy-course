import bcrypt from 'bcryptjs'

export const users = [
  {
  name: 'john ken',
  email: 'jk@examle.com',
  password: bcrypt.hashSync('12345', 10),
  isAdmin: true},
   {
  name: 'job ken',
  email: 'jok@examle.com',
  password:  bcrypt.hashSync('12345', 10),
  
}, {
  name: 'jane ken',
  email: 'jank@examle.com',
  password:  bcrypt.hashSync('12345', 10),
 
}
]