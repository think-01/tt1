import {MessageData, AnyMessageData} from "../MessageData";

type option = {
    name: string,
    value: boolean
}

type OptionsMessageValue = {
    field: string,
    options: option[]
}

const isOptionMessage = (message: AnyMessageData): message is MessageData<OptionsMessageValue> => "options" in message.body

export { OptionsMessageValue, isOptionMessage}
