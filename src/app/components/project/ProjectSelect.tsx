import { Select, Heading } from '@chakra-ui/react';

interface ProjectSelectProps {
  title: string;
  items: { id: string; name: string }[];
  onSelect: (id: string) => void;
}

export const ProjectSelect = ({
  title,
  items,
  onSelect,
}: ProjectSelectProps) => {
  const handleSelect = (item: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(item.target.value);
  };

  return (
    <div>
      <Heading size="md" marginBottom={5}>
        {title}
      </Heading>
      <Select placeholder="Seleccione" onChange={handleSelect}>
        {items.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </Select>
    </div>
  );
};
