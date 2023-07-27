import SingleItem from './SingleItem';
import { useFetchTasks } from './reactQueryCustomHooks';

const Items = () => {
  const { isLoading, error, data } = useFetchTasks();

  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>Loading...</p>;
  }

  // if (isError) {
  //   return <p style={{ marginTop: '1rem' }}>There was an error...</p>;
  // }

  if (error) {
    // console.log(error);
    return <p style={{ marginTop: '1rem' }}>{error.response.data}</p>;
  }

  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
