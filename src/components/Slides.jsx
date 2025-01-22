import { Carousel, Image } from "react-bootstrap";

const Slides = () => {
   return (
      <Carousel draggable={false}>
         {/* Item 1 */}
         <Carousel.Item>
            <Image src="https://placehold.co/1900x700" fluid />
            <Carousel.Caption>
               <h3>First slide label</h3>
               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
         </Carousel.Item>

         {/* Item 2 */}
         <Carousel.Item>
            <Image src="https://placehold.co/1900x700" fluid />
            <Carousel.Caption>
               <h3>First slide label</h3>
               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
         </Carousel.Item>

         {/* Item 3 */}
         <Carousel.Item>
            <Image src="https://placehold.co/1900x700" fluid />
            <Carousel.Caption>
               <h3>First slide label</h3>
               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   );
};
export default Slides;
