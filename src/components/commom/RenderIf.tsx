interface RenderIfProps {
  shouldRender: boolean;
  children: React.ReactNode;
}

export const RenderIf = ({ shouldRender, children }: RenderIfProps) => {
  return shouldRender ? <>{children}</> : null;
};
