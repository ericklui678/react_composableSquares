import React from 'react';
import ReactDOM from 'react-dom';
import Square from './components/square';

const App = (props) => {
  const style = {
    'display': 'inline-block',
    'width': '150px',
    'height': '150px',
  };
  return (
    <div>
      <Square style={style} text='white on blue'
        color='white' backColor='blue'/>
      <Square style={style} text='blue on red'
        color='blue' backColor='red'/>
      <Square style={style} text='green on pink'
        color='green' backColor='pink'/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
