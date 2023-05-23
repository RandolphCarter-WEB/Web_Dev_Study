import './App.css';
import Practicelist from './practicelist'

function App() {
    return (
        <div id="mainContainer">
            <Header/>
            <Practicelist/>
        </div>
    )
}


function Header() {
    return (
        <div id="header" style={`background-image:url(${process.env.PUBLIC_URL + `/image/bassplayer.jpg`})`}>
            <p id="headerTitle">Bass Tutor</p>
        </div>
    )
}

export default App;