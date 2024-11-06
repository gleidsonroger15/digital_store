import LogoFooter from "./icons/LogoFooter";
import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";
import Facebook from "./icons/Facebook";


const Footer = () => {
  return (
    <footer className="bg-darkgray pt-10">
      <div className="container py-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 px-6">
          {/* Logo e redes sociais */}
          <div className="flex flex-col gap-8 flex-1">
            <LogoFooter />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex gap-6">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </div>

          {/* Informações */}
          <div className="flex flex-col gap-6 flex-1 lg:max-w-[250px]">
            <h2 className="text-white text-xl font-bold">Informação</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="text-gray-400">
                  Sobre Drip Store
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Segurança
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Trabalhe conosco
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Meus Pedidos
                </a>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div className="flex flex-col gap-6 flex-1 lg:max-w-[250px]">
            <h2 className="text-white text-xl font-bold">Categorias</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="text-gray-400">
                  Camisetas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Calças
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Bonés
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Headphones
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-white text-xl font-bold mb-4">Contato</h2>
            <p>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
            </p>
            <p>(85) 3051-3411</p>
          </div>
        </div>

        {/* Separador entre a parte superior e inferior do footer */}
        <hr className="my-6" />
        <h1 className="text-center text-gray-400">&copy; 2024 Digital College
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
