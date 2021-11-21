import {
  Box,
  Text,
  Icon,
  Form,
  Input,
  Heading,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faProductHunt,
  faTwitter,
  faLinkedinIn,
  faBehance,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';

export default function AddLinks({
  profileLinks,
  openLinksModal,
  closeLinksModal,
  linksDataHandler,
}) {
  //formData where links are stored (takes the profileLinks props from parent component)
  const [formData, setFormData] = useState(profileLinks);

  const { linkedin, twitter, behance, dribbble, producthunt } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    linksDataHandler(formData);
    closeLinksModal();
  };

  return (
    <Box>
      <Heading>Add Links</Heading>
      <Form>
        <br></br>
        <FontAwesomeIcon icon={faProductHunt} />
        <Input
          placeholder="@username"
          name="producthunt"
          value={producthunt}
          onChange={(e) => onChange(e)}
        ></Input>
        <br></br>
        <FontAwesomeIcon icon={faTwitter} />
        <Input
          placeholder="username"
          name="twitter"
          value={twitter}
          onChange={(e) => onChange(e)}
        ></Input>
        <br></br>
        <FontAwesomeIcon icon={faBehance} />
        <Input
          placeholder="username"
          name="behance"
          value={behance}
          onChange={(e) => onChange(e)}
        ></Input>
        <br></br>
        <FontAwesomeIcon icon={faDribbble} />
        <Input
          placeholder="username"
          name="dribbble"
          value={dribbble}
          onChange={(e) => onChange(e)}
        ></Input>
        <br></br>
        <FontAwesomeIcon icon={faLinkedinIn} />
        <Input
          placeholder="username"
          name="linkedin"
          value={linkedin}
          onChange={(e) => onChange(e)}
        ></Input>
      </Form>
    </Box>
  );
}
