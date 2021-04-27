import { Icon, Input, Flex } from "@chakra-ui/react";
import { useRef } from "react";

import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  // const [search, setSearch] = useState('') //CONTROLLED COMPONENTS

  const searchInputRef = useRef<HTMLInputElement>(null);

  // useRef -> aguarda uma referência para nosso input dentro da DOM, eu preciso fala qual tipo de elemento esse ref
  //pertence, toda REF tem dentro dela o * current= que é o valor no momento atual * * value= propriedade do input

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxW={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled" //sem borda e sem background
        px="4"
        mr="4"
        placeholder="Buscar na Plataforma"
        _placeholder={{ color: "gray.400" }}
        ref={searchInputRef}
        // value={search}
        // onChange={event => setSearch(event.target.value)}
      />
      <Icon as={RiSearchLine} fontSize={20} />
    </Flex>
  );
}
// Formas de tratar formulários dentro do react
// => CONTROLLED COMPONENTS -> são basicamente componentes que controlamos o estado dele atraves de um estado do
// React, toda a vez que o usuário digitar alguma coisa salvo dentro do estado *utilizado em formularios mais simples

// => UNCONTROLLED COMPONENTS -> são formas de conseguir acessar o valor do input só no momento que precisar utilizar ele
// ou seja o valor do input não é armazenado dentro de uma variável no estado, ao contrário disse a gente acessa aquele
// valor do input no momento que a gente precisar ** fazemos isso dentro do react atravês das ref **
// A ref é muito utilizada tbm quando quero dar manualmente um foco a um input(utilizando a propriedade focus())

//INTERFACE IMPERATIVA -> quando diz exatamente o que a gente quer fazer pro codigo (manualmente), esta dizendo
// examente a instrução de codigo que vai realizar no input

// INTERFACE DECLARATIVA -> quando eu digo o que eu espero, atraves de ação, e ela acontece meio que automática
