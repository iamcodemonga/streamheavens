import React from 'react'

const MovieDetails = () => {
  return (
    <div className="modal fade" role="dialog" tabIndex={-1} id="modal-1">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header border-0">
                <h4 className="modal-title mt-0 ms-3">Movie</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
                <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="w-100 h-100"><img className="modal_movie_img mb-3" src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-6.jpeg" width="100%" alt='movie_image' /></div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                    <div className="movie_details_container">
                        <div><span className="badge bg-primary me-2">Thriller</span><span className="badge bg-primary">18+</span></div>
                        <h4 className="mt-0">War zone :&nbsp; Battle of the warlocks</h4>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>
                        <div>
                        <p className="text_small mt-4 mb-1 text-white-50">Language : English</p>
                        <p className="text_small mb-1 text-white-50">Subtitle : English</p>
                        <p className="text_small mb-1 text-white-50">Run time : 1hr 25mins</p>
                        <p className="text_small mb-1 text-white-50">Released : 20 Aug, 2020</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="modal-footer border-0"><a className="btn btn-primary" role="button" href="videoplayer.html">Watch now</a><button className="btn btn-light" type="button" data-bs-dismiss="modal">Close</button></div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails;