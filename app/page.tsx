
import { BrowserRouter } from "react-router-dom";
import About from "../components/about/About";
import Blog from "../components/blog/Blog";
import BookTable from "../components/bookTable/BookTable";
import ContactUs from "../components/contactUs/ContactUs";
import Gallery from "../components/gallery/Gallery";
import Landing from "../components/landing/Landing";
import Reviews from "../components/reviews/Reviews";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Gallery />
      <BookTable />
      <Blog />
      <Reviews />
      <ContactUs />
    </>
  );
}
