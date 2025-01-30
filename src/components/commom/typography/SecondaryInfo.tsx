interface SecondaryInfoProps {
  children: React.ReactNode;
}

export const SecondaryInfo = ({ children }: SecondaryInfoProps) => {
  return <p className=" text-sm text-green-500 bg-black">{children}</p>;
};
