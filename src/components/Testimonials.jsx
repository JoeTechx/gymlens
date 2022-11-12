import SectionHead from "./SectionHead"
import{ImQuotesLeft}from "react-icons/im"
import card from "../UI/Card"
import { IoIsArrowDropLeftCircled, IoIsArrowDropRightCircled} from "react-icons/io"
import { testimonials} from "../data"

const Testimonials = () => {
  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHead icon={<ImQuotesLeft>} title"=Trestimoials"/>
        </div>
    </section>
  )
}

export default Testimonials