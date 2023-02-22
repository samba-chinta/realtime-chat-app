export const typeDefs = `
    
    type Query {
        getAllUsers: [User]
        getUser(id: ID!): User
        getUserContacts(id: ID!): [Contact]
    }

    type Mutation {
        createUser(email:String, username: String): User
        addContactToUser(userid: ID, email: String, username: String): Contact
    }

    type User {
        id: ID!
        email: String!
        username: String!
        contacts: [Contact]
        sentMessages: [SentMessage]
        receivedMessages: [ReceivedMessage]
    }

    type Contact {
        id: ID!
        email: String!
        username: String!
    }

    type SentMessage {
        id: ID!
        message: String!
        sender: User!
        recipient: Contact!
        sent_at: String!
    }

    type ReceivedMessage {
        id: ID!
        message: String!
        sender: Contact!
        recipient: User!
        received_at: String!
    }
`;
