import useFetch from "../hooks/useFetch";

function CustomHookExample1() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  //   res.loading is also curret
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      {data.map((post) => (
        <h5 key={post.id}>{post.title}</h5>
      ))}
    </div>
  );
}

export default CustomHookExample1;
