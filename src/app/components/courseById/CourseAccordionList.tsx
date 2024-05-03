import { ListItem } from '@chakra-ui/react';
import { Content } from '../..';

interface CourseAccordionListProps {
  content: Content;
}

export const CourseAccordionList = ({ content }: CourseAccordionListProps) => {
  const { content: contentName } = content;

  return <ListItem>{contentName}</ListItem>;
};
