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

const Package2 = () => {
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
            src="https://images.unsplash.com/photo-1613102789984-863cc1b91ff4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Package-2
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Ooty Honeymoon package
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            What better way than to spend quality time between a newly wedded
            couple ? An array of honeymoon packages designed in a manner that
            offers beyond imagination attraction to honeymooners, will be etched
            in memories which and will hold on for a life time. These packages
            are carefully designed with romantic theme to help honeymooners to
            know one another intimately at ooty.
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Ooty is one of the most beautiful hill stations with serene Tea
            plantations among the hills. It has serene Botanical gardens, Garden
            nestled in the beautiful lush green hills. You are sure to be
            enchanted by the beauty of Ooty & Coonoor & will be craving to come
            back again. Coonoor is also one of the most popular Hill Station
            after Ooty known for Dolphins nose Viewpoint, Catherine falls & Laws
            falls, making it a beautiful Honeymoon location for couples and
            newly married.
          </Typography>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            It has many sight seeings
          </Typography>
          <Card className="w-96">
            <List>
              <ListItem>Botanical garden</ListItem>
              <ListItem>Boat House</ListItem>
              <ListItem>Government Museum</ListItem>
              <ListItem>Mudumalai Tiger reserve </ListItem>
              <ListItem>Pykara water falls</ListItem>
              <ListItem>Wenlock shooting point </ListItem>
              <ListItem>Tea and chocolate factory</ListItem>
              <ListItem>Ooty Hill station</ListItem>
              <ListItem>Nilgiri Train raid</ListItem>
              <ListItem>Pine forest</ListItem>
              <ListItem>Jungle Safari</ListItem>
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

export default Package2;
