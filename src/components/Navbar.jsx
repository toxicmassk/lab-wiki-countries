import { Link, useParams } from 'react-router-dom';

const Navbar = () => {
  const params = useParams();
  console.log(params);
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link className="nav-brand" to="/">
          LAB - WikiCountries
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
