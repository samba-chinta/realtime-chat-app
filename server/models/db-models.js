import { Schema, model } from 'mongoose';

const specification = {
    type: String,
    require: true,
}

//schemas
const userSchema = new Schema({
    user_id: specification,
    email: specification,
    username: specification,
    contacts: [{type: Schema.Types.ObjectId, ref: 'Contact'}],
    sentMessage: [{type: Schema.Types.ObjectId, ref: 'SentMessage'}],
    receivedMessages: [{type: Schema.Types.ObjectId, ref: 'ReceivedMessage'}]
})

const contactSchema = new Schema({
    contact_id: specification,
    email: specification,
    username: specification
})

const sentMessageSchema = new Schema({
    message_id: specification,
    sender: {type: Schema.Types.ObjectId, ref: 'User'},
    recipient: {type: Schema.Types.ObjectId, ref: 'Contact'},
    message: specification,
    sent_at: Date
})

const receivedMessageSchema = new Schema({
    message_id: specification,
    sender: {type: Schema.Types.ObjectId, ref: 'Contact'},
    recipient:  {type: Schema.Types.ObjectId, ref: 'User'},
    message: specification,
    received_at: Date
})

// models
export const User = model('User', userSchema);
export const Contact = model('Contact', contactSchema);
export const SentMessage = model('SentMessage', sentMessageSchema);
export const ReceivedMessage = model('ReceivedMessage', receivedMessageSchema);
