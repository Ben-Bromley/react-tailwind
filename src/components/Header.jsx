import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      <nav className="bg-blue-600 text-white flex p-4 justify-between items-center">
      	<div><p id="title" className="font-bold"><span className="text-3xl">BACKLINKED.</span><span className="text-yellow-400 text-2xl">CLUB</span></p></div>
      	<div>
          <Link to="/login">
            <button className="bg-green-500 px-4 py-1 rounded-md hover:bg-green-600">Login </button>
          </Link>
      	</div>
      </nav>
    </div>
  );
}

export default Header;