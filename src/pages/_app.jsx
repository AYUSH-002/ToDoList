import { TodoProvider } from "../context/TodoContext";
import PropTypes from 'prop-types';
import "tailwindcss/tailwind.css"; 
import "../index.css";

function MyApp({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Component {...pageProps} />
    </TodoProvider>
  );
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired, // Assuming Component is a React component
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;

