const NavLink = ({ href, icon }) => {
  return (
    <li className="mr-3 hover:text-dark-blue">
      <a href={href} target="_blank">
        {icon}
      </a>
    </li>
  );
};

export default NavLink;
