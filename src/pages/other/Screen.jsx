const Screen = () => {
  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <video width="100%" controls>
            <source src="https://player.vimeo.com/external/450069827.sd.mp4?s=d30093b0ea62a29e5aa86bbfd1efd6cb0dc3869c&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
    </div>
  )
}

export default Screen