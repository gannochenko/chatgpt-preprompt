export const sendMessage = async <P extends object>(
    tabId: number,
    name: string,
    data?: unknown,
) => {
    return new Promise<P>((resolve) => {
        chrome.tabs.sendMessage(tabId, { name, data }, (response) => {
            resolve(response);
        });
    });
};
