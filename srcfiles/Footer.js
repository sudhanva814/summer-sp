import 'bootstrap/dist/css/bootstrap.min.css';

const Footer=()=>{
return(
<footer className="text-center text-lg-start bg-dark text-white">


  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-3">

          <h2 className="text-uppercase fw-bold mt-4">
            TSF Bank
          </h2>
        </div>


        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-3">
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i className="fas fa-home me-3"></i> </p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            sudhanva246211@gmail.com
          </p>
          <p><a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/sudhanwa-shankara-m-a98157171/" role="button"
        >LinkedIn</a></p>
          <p><a className="btn btn-outline-light btn-floating m-1" href="https://github.com/sudhanva814" role="button"
        >GitHub</a></p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4">
    © 2021 Copyright: TSF Foundation
  </div>
</footer>
);
}
export default Footer;