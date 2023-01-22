import React from 'react'

const HomeCarousel = () => {
  return (
        <div className="container-fluid my-5 py-4 px-md-4">
            <div className="carousel slide carousel-fade" data-bs-ride="carousel" id="carousel-1">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="slide-container position-relative"><img className="w-100 h-100" src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-4.jpeg" alt="Slide_Image" style={{objectFit: 'cover', backgroundColor: '#121317'}} />
                            <div className="carousel-overlay w-100 h-100 position-absolute d-flex align-items-center">
                            <div className="carousel-content p-4">
                                <h1>Money Heist</h1>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p><button className="btn btn-primary px-4 border-0 bg-primary" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="mb-1 me-1" style={{fontSize: 30}}>
                                    <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>PLAY NOW</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="slide-container position-relative"><img className="w-100 h-100" src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-25.jpeg" alt="Slide_Image" style={{objectFit: 'cover'}} />
                            <div className="carousel-overlay w-100 h-100 position-absolute d-flex align-items-center">
                            <div className="carousel-content p-4">
                                <h1>CREED II</h1>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p><button className="btn btn-primary px-4 border-0 bg-primary" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="mb-1 me-1" style={{fontSize: 30}}>
                                    <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>PLAY NOW</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="slide-container position-relative"><img className="w-100 h-100" src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-24.jpeg" alt="Slide_Image" style={{objectFit: 'cover'}} />
                            <div className="carousel-overlay w-100 h-100 position-absolute d-flex align-items-center">
                            <div className="carousel-content p-4">
                                <h1>SAN ANDREAS</h1>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p><button className="btn btn-primary px-4 border-0 bg-primary" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="mb-1 me-1" style={{fontSize: 30}}>
                                    <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>PLAY NOW</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HomeCarousel