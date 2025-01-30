import React from "react";

interface RenderItemsProps<T> {
  items: T[];
  children: (item: T) => React.ReactNode;
  empty?: string;
}

export const RenderItems = <T,>({
  items,
  children,
  empty = "Nenhum item encontrado",
}: RenderItemsProps<T>) => {
  if (items.length === 0) {
    return <p>{empty}</p>;
  }

  return (
    <div>
      {items.map((item, index) => (
        <React.Fragment key={index}>{children(item)}</React.Fragment>
      ))}
    </div>
  );
};
