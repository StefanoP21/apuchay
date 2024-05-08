import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { BiLogOut, BiUser } from 'react-icons/bi';

interface ProfileProps {
  name: string;
}

export const Profile = ({ name }: ProfileProps) => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<BiUser />}
        variant="solid"
        colorScheme="red.500"
        rounded="full"
        _hover={{ bg: 'red.800', rounded: 'full' }}
      />
      <MenuList bg="red.600" border="none" padding={2} minWidth={'auto'}>
        <MenuItem
          bg="red.600"
          icon={<ExternalLinkIcon />}
          _hover={{ bg: 'red.800', rounded: 'full' }}
        >
          {name}
        </MenuItem>
        <MenuItem
          bg="red.600"
          icon={<BiLogOut />}
          _hover={{ bg: 'red.800', rounded: 'full' }}
          onClick={handleLogout}
        >
          Cerrar sesión
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
