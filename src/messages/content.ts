import { MESSAGE_PLACE_PROMPT } from './names';
import { MessageHandlerType, PlacePromptMessageDataType } from './type';

export const contentHandlers: Record<string, MessageHandlerType> = {
    [MESSAGE_PLACE_PROMPT]: (data: unknown, sendResponse) => {
        const { prompt } = data as PlacePromptMessageDataType;

        console.log('Sending this prompt: '+prompt);
        const textArea = document.getElementById("prompt-textarea") as HTMLTextAreaElement;
        if (textArea) {
            textArea.value = prompt;
        } else {
            console.error("Could not find the target textarea");
        }

        sendResponse({});
    },
};
