import { Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <div className="footer">
      <Text mt={10} fontSize="l" color="whiteAlpha.900" p="30px">
        “Enlightenment is not an experience. It is the state where you are left
        absolutely alone, nothing to know. No object, however beautiful, is
        present. Only in that moment does your consciousness, unobstructed by
        any object, take a turn and move back to the source.” ― 
        <strong>Osho, Meditation: The First and Last Freedom</strong>
      </Text>
    </div>
  );
}
