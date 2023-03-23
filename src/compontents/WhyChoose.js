import { Search } from "react-bootstrap-icons";
import { Eyeglasses } from "react-bootstrap-icons";
import { Eye } from "react-bootstrap-icons";
export default function WhyChoose() {
  return (
    <div className='reasons-section'>
      <h2>Reasons to Choose ClearView Optic</h2>
      <div className='panels'>
        <div className='panels-wrapper'>
          <div className='panel panel-one'>
            <div className='panel-content'>
              <div className='panel-top'>
                <div className='panel-img'>
                  <Search color='white' size={40} />
                </div>
                <h3>Comprehensive Eye Exams</h3>
              </div>
              <div className='panel-middle'>
                <p>
                  Our eye exams are thorough and comprehensive to ensure that
                  you receive the best possible care for your eyes. Our team of
                  experts uses the latest technology to evaluate your visual
                  acuity, assess your eye health, and determine the right
                  prescription for you.
                </p>
              </div>
              <div className='panel-bottom'>
                <button>LEARN MORE</button>
              </div>
            </div>
          </div>
          <div className='panel panel-two'>
            <div className='panel-content'>
              <div className='panel-top'>
                <div className='panel-img'>
                  <Eyeglasses color='white' size={50} />
                </div>
                <h3>Wide Selection of Designer Frames</h3>
              </div>
              <div className='panel-middle'>
                <p>
                  At ClearView Optic, we offer a wide selection of stylish and
                  high-quality frames from some of the most popular designer
                  brands. Whether you're looking for a classic, trendy, or
                  sporty look, we have something to suit your style and budget.
                </p>
              </div>
              <div className='panel-bottom'>
                <button>LEARN MORE</button>
              </div>
            </div>
          </div>
          <div className='panel panel-three'>
            <div className='panel-content'>
              <div className='panel-top'>
                <div className='panel-img'>
                  <Eye color='white' size={50} />
                </div>
                <h3>Skilled Eye Care Professionals</h3>
              </div>
              <div className='panel-middle'>
                <p>
                  Our optometrists use the latest technology to evaluate your
                  visual acuity and eye health. We start with a review of your
                  history and perform tests to assess your vision and detect
                  potential problems. Based on the results, we provide
                  personalized recommendations and prescriptions.
                </p>
              </div>
              <div className='panel-bottom'>
                <button>LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
