import { createContext } from "react";

const UserContext = createContext({
    user:
    {
    name: "Dhruv",
    email: "dummy@gmail.com",
    }
});

UserContext.displayName="UserContext"

export default UserContext;
 