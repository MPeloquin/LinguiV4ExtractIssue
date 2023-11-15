import React from 'react';
import { i18n } from '@lingui/core';

interface AComponentProps {}

export const BComponent: React.FC<AComponentProps> = () => {
    const test = i18n._({ id: 'error.message' });
    //const test = 'bla';
    return <>{test}</>;
};
