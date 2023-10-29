type HomeBannerProps= {
    image: string
}
function HomeBanner({image} : HomeBannerProps) {
  return (
    <div >
        <img src={image}  />
    </div>
  )
}

export default HomeBanner