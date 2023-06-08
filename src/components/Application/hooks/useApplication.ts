import { useCallback, useEffect, useRef, useState } from 'react';
import copy from 'clipboard-copy';

import { MESSAGE_PLACE_PROMPT } from '../../../messages/names';
import { getTabId } from '../../../util/tab';
import { sendMessage } from '../../../util/sendMessage';
import { PlacePromptMessageResponseType } from '../../../messages/type';

export const useApplication = () => {
    const onCopyTokenButtonClick = useCallback(async () => {
        const tabId = await getTabId();
        const response = await sendMessage<PlacePromptMessageResponseType>(
            tabId,
            MESSAGE_PLACE_PROMPT,
            {
                prompt: "Is this sentence grammatically correct: \"___\"?",
            }
        );

        console.log('RESPONSE');
        console.log(response);
    }, []);

    return {
        sendPromptGrammaticallyCorrectProps: {
            onClick: onCopyTokenButtonClick,
        },
    };
};
