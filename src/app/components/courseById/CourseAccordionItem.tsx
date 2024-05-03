import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  UnorderedList,
} from '@chakra-ui/react';

import { CourseAccordionList, Topic } from '../..';

interface CourseAccordionItemProps {
  topic: Topic;
}

export const CourseAccordionItem = ({ topic }: CourseAccordionItemProps) => {
  const { topic: topicName, contents } = topic;

  return (
    <AccordionItem key={topicName}>
      <h2>
        <AccordionButton _expanded={{ bg: 'red.600', color: 'white' }}>
          <Box as="span" flex="1" textAlign="left" textTransform="uppercase">
            {topicName}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>
        <UnorderedList>
          {contents.map((content) => (
            <CourseAccordionList key={content._id} content={content} />
          ))}
        </UnorderedList>
      </AccordionPanel>
    </AccordionItem>
  );
};
