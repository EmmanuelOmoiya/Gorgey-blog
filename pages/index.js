import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export async function getStaticProps() {
  const url = `http://localhost:3000/api/posts`;
  const result = await fetch(url)
  return { props: {
    posts: await result.json()
  }}
}

const Home = ({posts}) => {
  return (
    <>
    <Head>
        <title>Gorgey Blog | Home</title>
        <meta name="keywords" content="Blog" />
      </Head>
    <div className={styles.container}>
      <div className={styles.pick}>
        <h1 className={styles.tpc}>WHAT?</h1>
      </div>
    </div>
    <div className={styles.posts}>
      <hr />
      {posts.length === 0 ? (
        <h2>No added posts</h2>
        ) : (
          <>
          {posts.message.map((post, i) => (
            <div className={styles.post} key={i}>
              <h2 className={styles.title}>{post.title}</h2>
              <p className={styles.author}>Posted by {post.author} on {post.date} / {post.month} / {post.year}</p>
              <br />
            </div>
           ))}
           <hr />
          </>
      )}
    </div>
    </>
  );
}
 
export default Home;


