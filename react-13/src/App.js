import "./App.css";
import thumbnail from "./assest/img/thumbnail.jpg";

function App() {
  return (
    <div className="container-fluid">
      <div
        className="container"
        style={{ background: "#30373f", color: "white" }}
      >
        <div className="row pt-5 pb-5">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h1 style={{ fontStyle: "italic" }}>
              Title of a longer featured blog post
            </h1>
            <p>
              Multiple lines of text that form the lece, information new readers
              quickly and effciently about what's most interesting in this
              post's contents.
            </p>
            <h6>Continue reading...</h6>
          </div>
        </div>
      </div>

      <div className="container mt-2">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="row border border-1">
              <div className="col-8">
                <div className="card border border-0">
                  <div className="card-body">
                    <a
                      href="#"
                      className="card-link mb-1 text-decoration-none fw-bolder"
                    >
                      World
                    </a>
                    <h3 className="card-title mt-3">Featured post</h3>
                    <h6 className="card-subtitle text-muted">Nov 12</h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="card-link text-decoration-none">
                      Continue Reading...
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4 cardimage d-flex justify-content-center align-items-center">
                <h5 className="text-white">Thumbnail</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="row border border-1">
              <div className="col-8">
                <div className="card border border-0">
                  <div className="card-body">
                    <a
                      href="#"
                      className="card-link mb-1 text-decoration-none text-success fw-bolder"
                    >
                      Design
                    </a>
                    <h3 className="card-title mt-3">Post title</h3>
                    <h6 className="card-subtitle text-muted">Nov 11</h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="card-link text-decoration-none">
                      Continue Reading...
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4 cardimage d-flex justify-content-center align-items-center">
                <h5 className="text-white">Thumbnail</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-2">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-8">
            <h3 className="fst-italic">From the Firehose</h3>
            <hr />
            <h2>Sample blog post</h2>
            <h6 className="text-muted">January 1,2014 by Mark</h6>
            <p>
              This blog post shows a few different types of content that's
              supported and styled with Bootstrap. Basic typography, images and
              code are supported.
            </p>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              expedita labore harum magni, a eveniet nobis iure delectus
              deserunt error vero illo quae! Non reprehenderit amet iure aut
              explicabo provident!
            </p>
            <p>
              Sapiente rerum error expedita ipsa ducimus necessitatibus
              doloribus et ea assumenda dolores incidunt, quasi quia nisi odit
              autem quae delectus esse quaerat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
