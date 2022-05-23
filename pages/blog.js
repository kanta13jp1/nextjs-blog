function Blog({ posts }) {
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>title={post.title}</li>
        ))}
      </ul>
    )
}


// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://hello-world-1-6ccgk2l43a-an.a.run.app/encode')
    const posts = await res.json()

    console.log(posts)
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
}
  

  export default Blog