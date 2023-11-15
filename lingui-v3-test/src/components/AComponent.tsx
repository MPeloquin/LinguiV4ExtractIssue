import React from 'react';
import { t } from '@lingui/macro';

interface AComponentProps {}

export const AComponent: React.FC<AComponentProps> = () => {
    const test = t({ id: 'error.message' });
    return <>{test}</>;
};
