import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className="container py-5">
      <hr />
      <div className="row">
        <div className="col-12 col-md">
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="102.132"
            height="25.00003"
            fill="#da1b5b"
            fillOpacity="1"
            strokeWidth="2"
            viewBox="0 0 27.02242 6.61459"
          >
            <path
              transform="matrix(2.29527 0 0 2.29527 -122.29997 -607.96468)"
              d="m62.2136 264.88481-.78388 1.41252c-.08643.15557-.21378.39334-.28751.57044 0-.20955-.01658-.36936-.02434-.49671l-.15628-1.48625h-.61137l.35666 2.87372h.5214l1.33915-2.39747h.0046l.2741-.47625zm-3.91443.27904c-.18062-.22542-.47237-.27904-.94862-.27904h-.65687l-.45755 2.15088h.5856l.36055-1.69968h.25894c.3817 0 .45543.25082.45543.51329 0 .1524-.05362.72707-.30762 1.12536-.10266.15981-.28751.29528-.5341.29528h-.28329l.00035-.001h-1.36066l-.00035.003h-.6149c-.11853 0-.21448-.096-.21448-.21343v-.27799h-.34255c-.26423 0-.37183-.1651-.23989-.36724.13194-.20179.34784-.5327.47978-.73484.13194-.20214.3482-.20214.47978 0 .13229.20214.34784.53305.48013.73484.13159.20214.02399.36724-.24024.36724h-.39088v.14605a.1096.1096 0 0 0 .10971.10971h1.22379v-1.61819c0-.29598-.23989-.53587-.53587-.53587h-1.78611c-.29598 0-.53587.23989-.53587.53587v1.78612c0 .29562.23989.53587.53587.53587h1.78611c.0067 0 .01341-.001.02011-.002h1.15464c.62795 0 .91546-.11113 1.21497-.42651.35313-.3743.5214-.98531.5214-1.4538 0-.3362-.08643-.52529-.2173-.69391m1.24636-.28716-1.5434 2.86138h.61983l.34536-.67733.24201-.47625.25435-.52987c.10266-.20532.25048-.54963.25048-.54963s0 .242.01234.48436l.04093.59514.03703.47625.0575.67733h.59514l-.2914-2.86138z"
            />
            <path
              fill="#720e33"
              transform="matrix(2.29527 0 0 2.29527 -122.29997 -607.96468)"
              d="m62.97013 264.87725-.1023.48084h.59971l.10196-.48084zm-.61172 2.87408h.59972l.46638-2.19321h-.59938zm1.37266-2.87337-.1023.48013h1.32538l.1023-.48013zm-.25824 2.87831h.5962l.46743-2.20098h-.5962z"
            />
          </svg>
          <small className="d-block mb-3 text-muted"> ?? 2022</small>
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted" href="#">
                Random feature
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Team feature
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Stuff for developers
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Another one
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Last time
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Products</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted" href="#">
                Categories
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Offers
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Lastest collections
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Bargins
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Services</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted" href="#">
                Business
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Education
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Government
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Gaming
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>
            <a href="/about">About</a>
          </h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted" href="#">
                Team
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Locations
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Privacy
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Terms
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Legal
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Social</h5>
          <div className={styles.social}>
            <ul
              className="list-unstyled social list-group list-group-flush"
              aria-current="true"
            >
              <button type="button" className="list-group-item">
                <a href="https://www.davit.ie/share/dhfn394">
                  <i className="fa fa-facebook"></i>
                </a>
              </button>
              <button className="list-group-item">
                <a href="https://www.davit.ie/share/dhfn394">
                  <i className="fa fa-twitter"></i>
                </a>
              </button>
              <button className="list-group-item">
                <a href="https://www.davit.ie/share/dhfn394">
                  <i className="fa fa-instagram"></i>
                </a>
              </button>
              <button className="list-group-item">
                <a href="https://www.davit.ie/share/dhfn394">
                  <i className="fa fa-google-plus"></i>
                </a>
              </button>
              <button className="list-group-item">
                <a href="https://www.davit.ie/share/dhfn394">
                  <i className="fa fa-envelope"></i>
                </a>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
