import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { NotificationNav } from "./NotificationsNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex as="header" w="100%" maxW={1480} h="20" mx="4" px="6" align="center">
      <Logo />
      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
// quando eu preciso ter icone e input junto a melhor forma e fazer com que o elemento que
//esta por volta dos dois se pareça com um input para a pessoa clicar.
