import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselWithContent() {
  return (
    <Carousel
      transition={{ duration: 2 }}
      autoplay={true}
      loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      className="rounded-xl"
    >
      <div className="relative h-96 w-full">
        <img
          src="https://images.unsplash.com/photo-1590766940554-634a7ed41450?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 1"
          className="h-96 w-full object-cover"
        />
        <div className="absolute inset-0 grid h-96 w-full place-items-center bg-black/35">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <div className="flex justify-center gap-2">
              <a href="packages">
                <Button size="lg" color="white">
                  Explore
                </Button>
              </a>
              <a href="gallery">
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-96 w-full">
        <img
          src="https://images.unsplash.com/photo-1580979222901-12a0e56abf7d?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 2"
          className="h-96 w-full object-cover"
        />
        <div className="absolute inset-0 grid h-96 w-full place-items-center bg-black/35">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <div className="flex justify-center gap-2">
              <a href="packages">
                <Button size="lg" color="white">
                  Explore
                </Button>
              </a>
              <a href="gallery">
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-96 w-full">
        <img
          src="https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 3"
          className="h-96 w-full object-cover"
        />
        <div className="absolute inset-0 grid h-96 w-full place-items-center bg-black/35">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <div className="flex justify-center gap-2">
              <a href="packages">
                <Button size="lg" color="white">
                  Explore
                </Button>
              </a>
              <a href="gallery">
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
