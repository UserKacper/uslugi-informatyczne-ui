import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTiktok, faTwitch, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (
    <footer className='w-full flex flex-col'>
      <div className="w-full h-[70px] md:h-[60px] bg-[#AD93FF] shadow-xl">
        <div className="flex h-full pl-12 md:justify-between justify-center gap-y-3 max-md:flex-col">
          <span className="self-center">
            <p className="text-white font-semibold text-sm">Nawiąż z nami kontakt:</p>
          </span>
          <span className="self-center pr-12 flex gap-5">
            <FontAwesomeIcon icon={faFacebook} className='text-white' />
            <FontAwesomeIcon icon={faInstagram} className='text-white' />
            <FontAwesomeIcon icon={faXTwitter} className='text-white' />
            <FontAwesomeIcon icon={faTiktok} className='text-white' />
            <FontAwesomeIcon icon={faYoutube} className='text-white' />
            <FontAwesomeIcon icon={faLinkedin} className='text-white' />
            <FontAwesomeIcon icon={faTwitch} className='text-white' />
          </span>
        </div>
      </div>
      <div className="w-full bg-[#434455]">
        <div className='flex w-full text-white font-semibold md:justify-between max-lg:flex-col p-12 gap-10 max-lg:text-center'>
          <section className='w-full'>
            <h1>O nas</h1>
            <div className='font-light my-2 w-full lg:text-start'>
              Jesteśmy firmą zajmującą się tworzeniem oprogramowania i stron internetowych dla naszych klientów. <br className="max-lg:hidden" />Dbamy o najwyższą jakość i zadowolenie naszych klientów.
            </div>
          </section>

          <div className='flex justify-center'>
            <hr className='lg:hidden w-1/2' />
          </div>

          <section className='w-full'>
            <h1>Nasze usługi</h1>
            <div className=' my-2 font-thin max-lg:gap-2'>
              <p>Tworzenie stron internetowych</p>
              <p>Rozwój aplikacji mobilnych</p>
              <p>Projektowanie UX/UI</p>
              <p>Konsultacje IT</p>
            </div>
          </section>

          <div className='flex justify-center'>
            <hr className='lg:hidden w-1/2' />
          </div>

          <section className='w-full'>
            <h1>Przydatne linki</h1>
            <div className='flex flex-col my-2 font-thin max-lg:gap-2 w-full'>
              <a href="/">O nas</a>
              <a href="/price">Nasze usługi</a>
              <a href="/contact">Kontakt</a>
              <a href="/blog">Blog</a>
            </div>
          </section>

          <div className='flex justify-center'>
            <hr className='lg:hidden w-1/2' />
          </div>

          <section className='w-full'>
            <h1>Polityka</h1>
            <div className='flex flex-col my-2 font-thin max-lg:gap-2'>
              <a href="/privacy">Polityka prywatności</a>
              <a href="/terms">Regulamin</a>
              <a href="/cookies">Polityka cookies</a>
              <a href="/disclaimer">Zastrzeżenia prawne</a>
            </div>
          </section>
        </div>
      </div>
      <div className="w-full h-[50px] bg-[#2d2e3d] flex justify-center">
        <span className='self-center text-white font-light'>
          <p>© 2024 Copyright: YourCompany.com</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
