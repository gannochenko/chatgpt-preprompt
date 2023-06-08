import React, { FC } from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ApplicationPropsType } from './type';
import { useApplication } from './hooks/useApplication';

export const Application: FC<ApplicationPropsType> = () => {
    const { sendPromptGrammaticallyCorrectProps } = useApplication();

    return (
        <Box padding={2} width={300}>
            <Button variant="outlined" fullWidth {...sendPromptGrammaticallyCorrectProps}>
                Is this sentence grammatically correct... ?
            </Button>
        </Box>
    );
};
