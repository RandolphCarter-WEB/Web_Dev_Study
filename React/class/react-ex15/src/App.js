import style from './App.css';
import tw from "tailwind-styled-components"
import classNames from 'classnames';

const cx = classNames.bind(style);

function App() {

  const StyledH1 = tw.h1`
  ${p => p.$attr ? "text-red-"+p.$attr : "text-red-600"}
  text-9xl underline bold`;
  
  return (
    <div id="mainContainer">
      <h1>Hello World</h1>
      <StyledH1>This is tailwindCss and styled components</StyledH1>
      <StyledH1 $attr="200">This is tailwindCss and styled components</StyledH1>
      <h1 className={cx("h1", {bg : true}, {ts: false})}>Style</h1>
    </div>
  );
}

export default App;
