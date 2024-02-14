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

const Packages4 = () => {
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
            src="https://i.pinimg.com/564x/bf/e2/50/bfe25085b3c013cc3176c8142fd67058.jpg"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Package-4
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Bareilly sharif Tour
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Dargah-e-Ala Hazrat needs no introduction. Also famous as Bareilly
            Sharif, Dargah-e-Ala Hazrat is a sacred site for the followers of
            Islam. This place is the final resting place of Ahmad Raza Khan and
            Mufti Akhtar Raza khan Azhari, the Hanafi jurists who are known for
            his strong opposition of Wahhabism in India. At present, it is
            visited by the devotees on a grand scale.
          </Typography>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            It Is Known For
          </Typography>
          <Card className="w-full">
            <List>
              <ListItem>
                Dargah-e-Ala Hazrat is the spiritual center for the Sunnah sect
                of South Asia
              </ListItem>
              <ListItem>
                Dargah-e- Tajushariah is the spiritual center for the Sunnah
                sect of South Asia
              </ListItem>
              <ListItem>
                Standing in the Islamic style of architecture, it is said that
                the dome of this Muslim shrine was designed by Alama Shah
                Mehmood Jaan Qadri just by using matchsticks
              </ListItem>
              <ListItem>
                This dargah runs a madrsa that educates the individuals about
                Islam, Quran, and its preaching. Also, the Quran is translated
                word-by-word at Dargah-e-Ala Hazrat{" "}
              </ListItem>
              <ListItem>
                The atmosphere of this dargah is enchanting and provides an
                otherworldly pleasure to the devotees
              </ListItem>
              <ListItem>
                The festivals like Bakrid, Id-Ul-Fitr, Urs-e-Rizvi etc. are
                celebrated here with a great passion{" "}
              </ListItem>
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

export default Packages4;
