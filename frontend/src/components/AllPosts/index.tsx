import {trpc} from '../../lib/trpc'

export const AllPosts = () => {
  const {data, error, isLoading, isFetching, isError} = trpc.getPosts.useQuery()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>
  if (isFetching) return <div>Fetching...</div>
  if (!data) return <div>No data</div>
  if (data) {
    console.log(data.posts)
  }
  return (
    <div>
      <h1>Hello World</h1>{' '}
      {data.posts.map((el) => (
        <h1 key={el.id}>{el.name}</h1>
      ))}
    </div>
  )
  }