//import { showSlides, plusSlides, currentSlide} from './Home'; 
describe('Slideshow functionality', () => {
  let slides;
  let thumbnails;

  beforeEach(() => {
    // Skapa en enkel DOM-struktur för testerna
    document.body.innerHTML = `
      <div class="slideshow-container">
        <div class="mySlides" style="display: none;">Slide 1</div>
        <div class="mySlides" style="display: none;">Slide 2</div>
        <div class="mySlides" style="display: none;">Slide 3</div>
        <div class="mySlides" style="display: none;">Slide 4</div>
      </div>
      <div style="text-align:center">
        <span class="demo"></span>
        <span class="demo"></span>
        <span class="demo"></span>
        <span class="demo"></span>
      </div>
    `;
    require('./Home.js');
    slides = document.getElementsByClassName("mySlides");
    thumbnails = document.getElementsByClassName("demo");
  });

  

  test('should show the first slide initially', () => {
    jest.useFakeTimers();
    // show slides runs automatically
    slides = document.getElementsByClassName("mySlides");
    expect(slides[0].style.display).toBe('block');
    expect(slides[1].style.display).toBe('none');
    expect(slides[2].style.display).toBe('none');
  });

 test('should show the next slide when plusSlides is called', () => {
    const {plusSlides} = require('./Home.js');
    plusSlides(1); // Gå till nästa slide
    slides = document.getElementsByClassName("mySlides");
    expect(slides[1].style.display).toBe('block');
    expect(slides[0].style.display).toBe('none');
  });

  test('should loop back to the first slide after the last slide', () => {
    const {plusSlides, showSlides} = require('./Home.js');
    showSlides(0)
    plusSlides(1); // Gå till slide 2
    plusSlides(1); // Gå till slide 3
    plusSlides(1); // Gå till slide 4
    plusSlides(1); // Gå till  första slide igen
    slides = document.getElementsByClassName("mySlides");
    console.log("BODY", document.body.innerHTML)
    expect(slides[0].style.display).toBe('block');
    expect(slides[1].style.display).toBe('none');
  });

  test('should show the correct slide when currentSlide is called', () => {
    const {currentSlide, showSlides} = require('./Home.js');
    showSlides(0);
    currentSlide(2); // Gå till andra slide
    slides = document.getElementsByClassName("mySlides");
    console.log("BODY", document.body.innerHTML);
    expect(slides[1].style.display).toBe('block');
    expect(slides[0].style.display).toBe('none');
  });
});

