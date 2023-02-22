import {
    users_db,
    sent_messages_db,
    contacts_db,
    received_messages_db,
} from "../database/db.js";

export const resolvers = {
    Query: {
        getAllUsers: () => users_db,
        getUser: (parent, args) => users_db.find((user) => user.id === args.id),
        getUserContacts: (parent, args) =>
            users_db.find((user) => user.id == args.id).contacts,
    },
    Mutation: {
        createUser: (parent, args) => {
            const { email, username } = args;
            const rid = String(Math.random())
            const user = {
                id: rid,
                email,
                username,
                contacts: [],
                sentMessages: [],
                receivedMessages: [],
            };
            users_db.push(user);
            return user;
        },
        addContactToUser: (parent, args) => {
            const { userid, email, username } = args;
            const rid = String(Math.random());
            const newContact = {
                id: rid,
                email,
                username,
            };
            contacts_db.push(newContact);
            const user = users_db.find((user) => user.id === userid);
            user.contacts.push(newContact);
            return newContact;
        },
    },
};