import Head from "next/head";

const NotFound = () => {
    return (  
        <>
        <Head>
            <title>Page Not Found</title>
        </Head>
        <div className="not-found">
            <h1>404 <span>|</span> <span className="not-found-det">Page not Found</span></h1> 
        </div>
        </>
    );
}
 
export default NotFound;