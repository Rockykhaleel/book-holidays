import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import person from "../assets/person.jpg";

function TestimonialCard({ img, client, title }) {
  return (
    <Card shadow={false} className="bg-gray-100/50 rounded-2xl p-6">
      <CardHeader color="transparent" floated={false} shadow={false}>
        <Typography
          color="blue-gray"
          className="lg:mb-20 mb-4 text-2xl font-bold"
        >
          &quot;{title}&quot;
        </Typography>
      </CardHeader>
      <CardBody className="items-center mx-auto py-2 text-center content-center">
        <div className=" text-center items-center">
          <img src={img} className="w-8 h-8" alt={client} />
          <Typography
            variant="h6"
            color="blue-gray"
            className="text-center items-center"
          >
            {client}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

const testimonialss = [
  {
    title:
      "The travelling experience is just very mesmerising and can enjoy every moment.",
    client: "Saniya",
    img: person,
  },
  {
    title:
      "The trains, buses and hotels all were  so clean and well maintained that I had no issues at all during my stay in India.",
    client: "Allen",
    img: person,
  },
];

TestimonialCard.propTypes = {
  img: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Testimonials = () => {
  return (
    <div>
      <section className="px-8 py-10 lg:py-28">
        <div className="container min-w-full">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4 !text-2xl lg:!text-4xl text-center"
          >
            What people say About Us
          </Typography>
          <Typography
            variant="lead"
            className="max-w-3xl !text-gray-500 mb-10 lg:mb-20 mx-auto items-center text-center"
          >
            From life-enhancing adventures to unparalleled customer support, and
            exciting new journey.
          </Typography>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            {testimonialss.map((props, key) => (
              <TestimonialCard key={key} {...props} />
            ))}
          </div>

          <Card
            shadow={false}
            className="mt-8 bg-gray-100/50 text-center rounded-2xl p-6"
          >
            <CardHeader color="transparent" floated={false} shadow={false}>
              <Typography
                color="blue-gray"
                className="mb-4 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold"
              >
                &quot;I got very to visit the countryside and see the world that
                lies beyond the city walls.&quot;
              </Typography>
            </CardHeader>
            <CardBody className="items-center mx-auto py-2  text-center">
              <img
                src={person}
                className="w-8 h-8 mx-auto grayscale"
                alt="spotify"
              />
              <Typography
                variant="h6"
                color="blue-gray"
                className=" text-center"
              >
                Raghu
              </Typography>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
