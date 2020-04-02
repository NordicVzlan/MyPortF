import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">David Lopez</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/Photo"><a className="nav-link">Eye Test</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/contact"><a className="nav-link">Contact</a></Link>
          </li>
        </ul>
      </div>
    
   </div>

  </nav>

 
);


export default Navbar;