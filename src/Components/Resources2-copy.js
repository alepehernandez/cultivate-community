import '../html-css/css/app.css';
import '../html-css/css/resource.css'

function Resources(props) {
    return (
        <div>
            <div className="intro py-4 bg-teal text-white">
                <div className="intro-content">
                    <div className="container">
                <h1>Resources</h1>
                </div>
                    </div>
                </div>
                <main className="main" role="main">
                    <div className="py-5 bg-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="nav flex-column nav-pills">
                                        <a className="nav-link active" data-toggle="pill" href="#general-resources">General Resources</a>
                                        <a className="nav-link" data-toggle="pill" href="#locations">AA Meeting Locations</a>
                                        <a className="nav-link" data-toggle="pill" href="#care-teams">Care Teams</a>
                                        <a className="nav-link" data-toggle="pill" href="#emergency-lines">Emergency Lines</a>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="general-resources" role="tabpanel">
                                            <div className="card mb-4">
                                                <div className="card-body">
                                                    <h5 className="card-title">General Resources</h5>
                                                    <p>Log in or register an account to see recommended resources based on your location!</p>
                                                </div>
                                            </div> 
                                            {/* /.card */}
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title">...</h5>
                                                </div>
                                            </div>
                                            {/* /.card */}
                                        </div>
                                        <div className="tab-pane fade" id="locations" role="tabpanel">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title">AA Meeting Locations</h5>
                                                    <h6>Find AA Meetings by States</h6>
                                                <div className="container">
                                                    <a href="https://alcoholicsanonymous.com/">
                                                        <img src="./_images/aa-meetings.jpg" alt="Map of AA Meetings" id="map" />
                                                    </a>
                                                </div><br/>
                                                <h6>Call 800-839-1686 to get 24/7 addiction help:</h6>
                                                <ul>
                                                    <li>
                                                    Find the best drug rehab centers
                                                    </li>
                                                    <li>
                                                    Access free detox and rehab programs
                                                    </li>
                                                    <li>
                                                    Get 24-hour guidance on starting your recovery
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* /.card */}
                                    </div>
                                    <div className="tab-pane fade" id="care-teams" role="tabpanel">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Care Teams</h5>
                                            </div>
                                    </div>
                                    {/* /.card */}
                                </div>
<div className="accordion accordion-flush" id="accordionFlushExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingOne">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Emergency Lines
        </button>
      </h2>
      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">
          <h6>1. Call 911</h6>
          <p>
            If you or a loved one is in immediate danger, calling 911 and talking with police may be necessary. It is important to notify the operator that it is a psychiatric emergency and ask for police officers trained in crisis intervention or trained to assist people experiencing a psychiatric emergency.
          </p>
          <h6>2. <a href="https://www.suicidepreventionlifeline.org/">National Suicide Prevention Lifeline -- Call 800-273-TALK (8255)</a></h6>
          <p>
            If you or someone you know is in crisis—whether they are considering suicide or not—please call the toll-free Lifeline at 800-273-TALK (8255) to speak with a trained crisis counselor 24/7. The National Suicide Prevention Lifeline connects you with a crisis center in the Lifeline network closest to your location. Your call will be answered by a trained crisis worker who will listen empathetically and without judgment. The crisis worker will work to ensure that you feel safe and help identify options and information about mental health services in your area. Your call is confidential and free.
          </p>
          <h6>3. <a href="http://www.crisistextline.org/">Crisis Text Line -- Text NAMI to 741-741</a></h6>
          <p>
            Connect with a trained crisis counselor to receive free, 24/7 crisis support via text message. 
          </p>
          <h6>4. <a href="http://www.thehotline.org/">National Domestic Violence Hotline -- Call 800-799-SAFE (7233)</a></h6>
          <p>
            Trained expert advocates are available 24/7 to provide confidential support to anyone experiencing domestic violence or seeking resources and information. Help is available in Spanish and other languages.
          </p>
          <h6>5. <a href="https://www.rainn.org/about-national-sexual-assault-telephone-hotline">National Sexual Assault Hotline -- Call 800-656-HOPE (4673)</a></h6>
          <p>
            Connect with a trained staff member from a sexual assault service provider in your area that offers access to a range of free services. Crisis chat support is available at Online Hotline. Free help, 24/7.
          </p><br/>
          <h6>Source: <a href="https://nami.org/help">National Alliance on Mental Illness (NAMI)</a></h6>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          AA Meeting Locations
        </button>
      </h2>
      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">
          <h6>Find AA Meetings by States</h6>
          <div className="container">
            <a href="https://alcoholicsanonymous.com/">
              <img src="./_images/aa-meetings.jpg" alt="Map of AA Meetings" id="map" />
            </a>
          </div><br/>
          <h6>Call 800-839-1686 to get 24/7 addiction help:</h6>
          <ul>
            <li>
              Find the best drug rehab centers
            </li>
            <li>
              Access free detox and rehab programs
            </li>
            <li>
              Get 24-hour guidance on starting your recovery
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Care Teams
        </button>
      </h2>
      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingFour">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
          Other Resources
        </button>
      </h2>
      <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
      </div>
    </div>
  </div>
  </div>
                    </div>
                </div>
            </div>
            </div>
            </main>
        </div>
    )
}

export default Resources;