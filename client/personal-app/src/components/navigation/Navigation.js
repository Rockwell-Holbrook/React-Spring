import './Navigation.scss';
import Logo from '../../assets/mario.png';

function Navigation() {
    return (
    <div className="appHeader">
        <div className="logo">
            <img src={Logo} alt="logo" title="logo" />
        </div>

        <div className="navigation">
        <ul>
              <li><a href="#post1">Home</a></li>
              <li><a href="#post2">Milestones</a></li>
              <li><a href="#post3">Special Events</a></li>
              <li><a href="#post4">Journal Entry</a></li>
            </ul>
        </div>
    </div>
);}


export default Navigation