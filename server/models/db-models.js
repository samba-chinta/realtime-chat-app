import { Schema, model } from 'mongoose';

const specification = {
    type: String,
    require: true,
}

//schemas for user, contacts, sent_messages & received messages
const userSchema = new Schema({
    id: specification,
    email: specification,
    username: specification,
    contacts: [{type: Schema.Types.ObjectId, ref: 'Contact'}], // populated with Contact
    sentMessage: [{type: Schema.Types.ObjectId, ref: 'SentMessage'}], // populated with SentMessage
    receivedMessages: [{type: Schema.Types.ObjectId, ref: 'ReceivedMessage'}] // populated with ReceivedMessage
})

const contactSchema = new Schema({
    id: specification,
    email: specification,
    username: specification
})

const sentMessageSchema = new Schema({
    id: specification,
    sender: {type: Schema.Types.ObjectId, ref: 'User'}, // populated with User
    recipient: {type: Schema.Types.ObjectId, ref: 'Contact'}, // populated with Contact
    message: specification,
    sent_at: Date
})

const receivedMessageSchema = new Schema({
    id: specification,
    sender: {type: Schema.Types.ObjectId, ref: 'Contact'}, // populated with Contact
    recipient:  {type: Schema.Types.ObjectId, ref: 'User'}, // populated with User
    message: specification,
    received_at: Date
})

// models User, Contact, SentMessage, ReceivedMessage
export const User = model('User', userSchema);
export const Contact = model('Contact', contactSchema);
export const SentMessage = model('SentMessage', sentMessageSchema);
export const ReceivedMessage = model('ReceivedMessage', receivedMessageSchema);
