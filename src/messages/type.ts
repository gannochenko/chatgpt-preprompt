export type PlacePromptMessageDataType = {
    prompt: string;
};

export type PlacePromptMessageResponseType = {
};

export type MessageHandlerType = (
    data: unknown,
    sendResponse: (response: unknown) => void,
) => void;
