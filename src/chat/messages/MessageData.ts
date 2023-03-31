import { StaticMessageValue } from './static/MessageData'
import { TextMessageValue } from './text/MessageData'
import { OptionsMessageValue } from './options/MessageData'

enum MessageAuthors {
    USER = 'MessageAuthors.user',
    BOT = 'MessageAuthors.bot'
}


type MessageValue = StaticMessageValue |
    TextMessageValue |
    OptionsMessageValue

type MessageData<T> = {
    from: MessageAuthors.BOT | MessageAuthors.USER
    body: T
}

type AnyMessageData = MessageData<any>

export { MessageData, MessageAuthors, MessageValue, AnyMessageData }
