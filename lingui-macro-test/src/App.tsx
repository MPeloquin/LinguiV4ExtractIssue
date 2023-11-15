import { BComponent } from './components/BComponent.tsx';
import { i18n } from '@lingui/core';

function App() {
    const test = i18n._({ id: 'error.message' });

    return (
        <>
            <h1>v4</h1>
            <BComponent />
            {test}
        </>
    );
}

export default App;
