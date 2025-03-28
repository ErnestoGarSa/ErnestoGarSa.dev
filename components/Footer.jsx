const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="mb-4 sm:mb-0">
          <h3 className="text-lg font-bold mb-2">Sección 1</h3>
          <ul>
            <li>
              <a href="#">Enlace 1</a>
            </li>
            <li>
              <a href="#">Enlace 2</a>
            </li>
            <li>
              <a href="#">Enlace 3</a>
            </li>
          </ul>
        </div>

        <div className="mb-4 sm:mb-0">
          <h3 className="text-lg font-bold mb-2">Sección 2</h3>
          <ul>
            <li>
              <a href="#">Enlace 1</a>
            </li>
            <li>
              <a href="#">Enlace 2</a>
            </li>
            <li>
              <a href="#">Enlace 3</a>
            </li>
          </ul>
        </div>

        <div className="mb-4 sm:mb-0">
          <h3 className="text-lg font-bold mb-2">Sección 3</h3>
          <ul>
            <li>
              <a href="#">Enlace 1</a>
            </li>
            <li>
              <a href="#">Enlace 2</a>
            </li>
            <li>
              <a href="#">Enlace 3</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Misión de la Empresa</h3>
          <p></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
