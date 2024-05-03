import { Link } from 'react-router-dom';

import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  useToast,
} from '@chakra-ui/react';
import { WarningIcon, CopyIcon } from '@chakra-ui/icons';

import type { Project } from '../..';

interface ProjectByIdCardProps {
  project: Project;
}

export const ProjectByIdCard = ({ project }: ProjectByIdCardProps) => {
  const {
    infobrasCode,
    imageUrl,
    name,
    entity,
    type,
    status,
    startDate,
    endDate,
    location,
    address,
    amount,
  } = project;

  const toast = useToast();

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      toast({
        title: 'Copiado al portapapeles',
        description: `El código "${code}" ha sido copiado al portapapeles.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        colorScheme: 'blue',
      });
    });
  };

  return (
    <Card
      direction={{ base: 'column', md: 'row' }}
      overflow="hidden"
      variant="outline"
      marginBottom={10}
      borderRadius="3xl"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', md: '500px' }}
        src={imageUrl}
        alt={name}
      />
      <Stack>
        <CardBody paddingBottom={0}>
          <Heading size="md" paddingBottom="4">
            {name}
          </Heading>
          <Text
            py="2"
            paddingStart={2}
            bg="red.200"
            w="210px"
            borderRadius={10}
          >
            <b>Código INFOBRAS:</b> {infobrasCode}
          </Text>
          <Text py="2">
            <b>Entidad:</b> {entity}
          </Text>
          <Text py="2">
            <b>Tipo de obra:</b> {type}
          </Text>
          <Text py="2">
            <b>Estado:</b> {status}
          </Text>
          <Text py="2">
            <b>Fecha de inicio:</b> {startDate}
          </Text>
          <Text py="2">
            <b>Fecha de fin:</b> {endDate}
          </Text>
          <Text py="2">
            <b>Ubicación:</b> {location}
          </Text>
          <Text py="2">
            <b>Dirección:</b> {address}
          </Text>
          <Text py="2">
            <b>Monto aprobado:</b> S/. {amount}
          </Text>
          <Text py="2" color="blue.600">
            <b>
              *Haga click en el botón de copiar el código INFOBRAS para
              completar su reporte
            </b>
          </Text>
        </CardBody>

        <CardFooter>
          <ButtonGroup spacing="6">
            <Link to={`https://forms.gle/39s6ofcoEgNLgTow8`} target="_blank">
              <Button
                rightIcon={<WarningIcon />}
                variant="solid"
                colorScheme="red"
              >
                Reportar
              </Button>
            </Link>
            <Button
              leftIcon={<CopyIcon />}
              variant="outline"
              colorScheme="blue"
              onClick={() => copyToClipboard(infobrasCode.toString())}
            >
              {infobrasCode}
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Stack>
    </Card>
  );
};
