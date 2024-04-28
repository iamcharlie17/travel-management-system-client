const Footer = () => {
    return (
      <footer className=" grid gap-8 grid-cols-2 lg:grid-cols-4 md:grid-cols-2 p-10 bg-red-700 text-neutral-content space-y-4">
        <nav className="flex flex-col ">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col ">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col ">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className="flex flex-col ">
          <h6 className="footer-title">Connect</h6>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Twitter</a>
        </nav>
      </footer>
    );
  };
  
  export default Footer;