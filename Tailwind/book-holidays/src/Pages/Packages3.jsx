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

const Packages3 = () => {
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
            src="https://images.unsplash.com/photo-1622004468207-4f8b21600c20?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Package-3
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Explore Coorg
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Come for your honeymoon, anniversary, family vacation, trekking,
            rafting, soft adventure or just to rejuvenate yourself! We will make
            sure that you come again and again to this heaven on earth !!! Our
            tour guides and chauffeurs are experts in their respective fields
            and will lead you to places & people that you will cherish for many
            a year to come….!
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Adventure seekers and travellers looking for new destination vistas
            are what excite us and have kept us going since many years. We have
            a team of dedicated travel consultants working 24/7 to ensure that
            you don’t miss out on anything while at Coorg. We thrive on the
            appreciation our customers shower on us for our service &
            reciprocate by giving them an outstanding experience every time.
          </Typography>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            The major sight seeings are
          </Typography>
          <Card className="w-96">
            <List>
              <ListItem>Raja seat</ListItem>
              <ListItem>Madikeri fort</ListItem>
              <ListItem>Abbey falls</ListItem>
              <ListItem>Iruppu falls </ListItem>
              <ListItem>Golden temple</ListItem>
              <ListItem>Tala cauvery </ListItem>
              <ListItem>Dubare Forest and Elephant camp</ListItem>
              <ListItem>Cauvery Nisarga Dhama</ListItem>
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

export default Packages3;
