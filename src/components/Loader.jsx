import { Circles } from 'react-loader-spinner';

function Loader() {
  return (
    <Circles
      height="80"
      width="80"
      color="cornflowerblue"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}

export default Loader;
