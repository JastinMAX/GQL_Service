import React from 'react';
import ReactDOM from 'react-dom';

import GetSchema from './DataSyncComponent/getSchema';

const App = () => {
  return (
    <div>
      <GetSchema/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));