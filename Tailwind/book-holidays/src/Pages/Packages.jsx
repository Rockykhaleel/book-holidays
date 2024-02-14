import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  List,
  ListItem,
} from "@material-tailwind/react";
import { BreadcrumbsDefault5 } from "../Components/Breadp";

const Packages = () => {
  return (
    <div>
      <BreadcrumbsDefault5 />

      <Card className="w-full flex-row my-10">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1614844848029-058f34a0508b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Package-1
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Explore Mysore
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Book Holidays is South India’s leading travel agency with vast
            experience in Tourism and Hospitality. We’re backed by our
            experience and expertise in the hospitality industry and live by the
            motto, ‘Customer Delight.’ At Go Holidays, we create customized
            tours and holiday packages in and around Mysore using customer
            profiling.
          </Typography>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Few of the prominent sight seeings are
          </Typography>
          <Card className="w-96">
            <List>
              <ListItem>Mysore palace</ListItem>
              <ListItem>Mysore Zoo</ListItem>
              <ListItem>KRS/ Brindavan Garden</ListItem>
              <ListItem>Jagan mohan art gallery </ListItem>
              <ListItem>Chamundi Hills</ListItem>
              <ListItem>Karanji Lake </ListItem>
              <ListItem>Masjid e Azam</ListItem>
              <ListItem>St. Philomena church</ListItem>
            </List>
          </Card>
          <a href="contact" className="inline-block mt-7">
            <Button variant="text" className="flex items-center gap-2">
              Book Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default Packages;
