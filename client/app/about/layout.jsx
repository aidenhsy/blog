export const metadata = {
  title: 'About',
};

const AboutLayout = ({ children }) => {
  return (
    <div>
      <h1>this is about layout</h1>
      {children}
    </div>
  );
};

export default AboutLayout;
