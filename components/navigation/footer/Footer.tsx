export interface IFooter extends React.ComponentPropsWithoutRef<"footer"> {}

const Footer: React.FC<IFooter> = ({ className, ...otherFooterProps }) => {
  return (
    <footer
      {...otherFooterProps}
      className={`bg-gradient-to-r from-blue-200 to-blue-900 py-2 px-5 w-full ${className}`}
    >
      Nepal
    </footer>
  );
};

export default Footer;
