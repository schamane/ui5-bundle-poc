import React, { FC } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import '@ui5/webcomponents-react/dist/Assets';
import '@ui5/webcomponents/dist/Assets';
import '@schamane/components/dist/index.modern.js';

import { Test } from '@schamane/components';

const Main: FC = () => {
  return (
    <ThemeProvider>
      <Test>test </Test>
    </ThemeProvider>
  );
};

render(<Main />, document.getElementById('root'));
