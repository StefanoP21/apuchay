import { Link } from 'react-router-dom';

import { AspectRatio, Button, Heading } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Course } from '../..';

interface CourseVideoProps {
  course: Course;
}

export const CourseVideo = ({ course }: CourseVideoProps) => {
  const { name, videoUrl, quizUrl } = course;

  return (
    <div>
      <Heading
        size="lg"
        color="red.600"
        border="solid"
        borderRadius="10px"
        padding={4}
      >
        {name}
      </Heading>
      <AspectRatio maxW="650px" ratio={2} my={10}>
        <iframe title={name} src={videoUrl} allowFullScreen />
      </AspectRatio>
      <Link to={quizUrl} target="_blank">
        <Button
          rightIcon={<ExternalLinkIcon />}
          variant="solid"
          colorScheme="red"
        >
          Cuestionario
        </Button>
      </Link>
    </div>
  );
};
