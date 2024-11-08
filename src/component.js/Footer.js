import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  return (
    <div>
      <footer className={`text-center text-lg-start bg-${props.mode} text-${props.textMode}`}>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Connect with NewsMania on social media:</span>
          </div>
          <div className={`text-${props.textMode}`}>
            <a href="https://facebook.com" className="me-4" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="me-4" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="me-4" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="me-4" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </section>

        <section className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-newspaper me-3"></i>NewsMania
              </h6>
              <p>
                Stay informed with NewsMania, your go-to source for breaking news, in-depth
                analyses, and insightful articles covering global events, business, sports,
                entertainment, and much more.
              </p>
            </div>

       
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Categories</h6>
              <p><Link to="/Footer/business" className="text-reset">Business</Link></p>
              <p><Link to="/Footer/sports" className="text-reset">Sports</Link></p>
              <p><Link to="/Footer/science" className="text-reset">Science</Link></p>
            </div>

            {/* Quick Links */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
              <p><a href="/about" className="text-reset">About Us</a></p>
            </div>
          </div>
        </section>
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © {new Date().getFullYear()} NewsMania. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
