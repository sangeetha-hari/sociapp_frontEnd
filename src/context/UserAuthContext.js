import { createContext, useContext, useState } from "react";


const User= createContext();
const Loggedin= createContext();

export {User,Loggedin};

// const UserAuthContext = createContext();

// export function UserAuthContexProvider({ children }) {
//     const [name, setName] = useState("John Doe");
//     const [age, setAge] = useState(1);
//   return (
//     <UserAuthContext.Provider value={{ name, age}}>
//       {children}
//     </UserAuthContext.Provider>
//   );
// }

// const withUser = (Child) => (props) => (
//     <UserAuthContext.Consumer>
//       {(context) => <Child {...props} {...context} />}
//       {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
//     </UserAuthContext.Consumer>
//   );

//   export { UserAuthContext, withUser };
// export function useUserAuth(){
//     return useContext(userAuthContext)
// }
