import React from "react";

// V is defaukt val
const UserContext = React.createContext('V')
// returns provider and consumer
const UsesrProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserConsumer, UsesrProvider }

export default UserContext