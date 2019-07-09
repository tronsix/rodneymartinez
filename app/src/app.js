import React from 'react';

import Button from '@material/react-button';
import Nav from './components/nav';

function App() {
  return (
    <div>
      <Nav />
      <Button
          raised
          className='button-alternate'
          onClick={() => console.log('clicked!')}
        >
          Click Me!
        </Button>
    </div>
  );
}

export default App;
