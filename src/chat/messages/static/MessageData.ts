import {MessageData, AnyMessageData} from "../MessageData";

type StaticMessageValue = string

const isStaticMessage = (message: AnyMessageData): message is MessageData<StaticMessageValue> => typeof message.body === "string"

export { StaticMessageValue, isStaticMessage}
