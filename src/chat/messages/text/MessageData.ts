import {MessageData, AnyMessageData} from "../MessageData";

type TextMessageValue = {
    field: string,
    value: string | null
}

const isTextMessage = (message: AnyMessageData): message is MessageData<TextMessageValue> => "value" in message.body && typeof message.body.value === "string"

export {TextMessageValue, isTextMessage}
