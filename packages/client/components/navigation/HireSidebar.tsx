import { useTranslation } from 'next-i18next';
import { Stack, Heading } from '@chakra-ui/react';

import NavLink from './NavLink';
import { faUsers, faClipboardList } from '@fortawesome/free-solid-svg-icons';

export default function HireSidebar() {
  const { t } = useTranslation('common');

  return (
    <Stack
      direction="column"
      as="nav"
      fontSize="sm"
      color="gray.600"
      aria-label="Main Navigation"
      spacing={2}
    >
      <Stack mt="5%">
        <Heading
          color="gray.300"
          letterSpacing="2px"
          font="Inter"
          justify="left"
          fontSize="xs"
          p="3"
          pl="5"
        >
          {t('components.hire_sidebar.hiring')}
        </Heading>
        <NavLink
          path="/developers"
          icon={faUsers}
          title={t('components.hire_sidebar.developers_for_hire')}
        />
        <NavLink
          path="/my_projects"
          icon={faClipboardList}
          title={t('components.hire_sidebar.my_projects')}
        />
      </Stack>
    </Stack>
  );
}
