import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExatHref?: boolean;
}

export function ActiveLink({
  shouldMatchExatHref,
  children,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldMatchExatHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }
  // logistica um pouco diferente dentro do activeLink para que ele fique ativo ate quando entrar nas
  // paginas internas de alguma categoria
  if (
    !shouldMatchExatHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
}
