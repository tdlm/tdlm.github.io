type Props = {
  children?: React.ReactNode;
};

export const ShrinkingHeader = ({ children }: Props) => {
  return (
    <header className="bg-black text-white shadow-sm top-0 sticky">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">{children}</nav>
      </div>
    </header>
  );
};
