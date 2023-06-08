import { MESSAGE_PLACE_PROMPT } from './names';
import { MessageHandlerType, PlacePromptMessageDataType } from './type';

export const contentHandlers: Record<string, MessageHandlerType> = {
    [MESSAGE_PLACE_PROMPT]: (data: unknown, sendResponse) => {
        const { prompt } = data as PlacePromptMessageDataType;

        console.log('Sending this prompt: '+prompt);

        sendResponse({});
    },
};
