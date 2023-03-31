import { isStaticMessage } from './static/MessageData'
import { isTextMessage } from './text/MessageData'
import { isOptionMessage } from './options/MessageData'

import Static from './static/MessageView.vue';
import TextInput from './text/MessageView.vue';
import RadioButtonGroup from './options/MessageView.vue';
import {AnyMessageData} from "@/chat/messages/MessageData";

const getMessageRenderer = (message: AnyMessageData) => {
    if(isStaticMessage(message)) {
        return Static;
    }
    if (isTextMessage(message)) {
        return TextInput;
    }
    if (isOptionMessage(message)) {
        return RadioButtonGroup;
    }

    throw new Error('Unknown message type');
}

export { getMessageRenderer }


