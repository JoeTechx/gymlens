import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
import './Gallery.css'



const Gallery = () => {
const galleryLength = 15;
const images = []


for (let i = 1; i <= galleryLength; i++){
  images.push(require(`../../images/gallery${i}.jpg`))
}

  return (
    <>
     <Header title="Our Gallery" image={HeaderImage}>
        Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum
        omnis ex, fuga temporibus qui nesciunt odio aliquam.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return (
                <article key={index}>
                  <img src={image} alt={`Gallery Img ${index + 1}`}/>
                
                </article>
              )

            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery