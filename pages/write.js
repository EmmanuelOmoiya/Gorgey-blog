import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Write.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';

const Write = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [disable, setDisable] = useState(false);
    const handlePost = async (e) => {
        e.preventDefault();
        setDisable(true);
        // reset error and message
        setError('');
        setMessage('');

        // fields check
        if (!title || !content) alert('All fields are required');

        // post structure
        let post = {
            title,
            content,
            author,
            published: false,
            createdAt: new Date().toISOString(),
            day: new Date().getUTCDay(),
            month: new Date().getMonth(),
            date: new Date().getDate(),
            year: new Date().getFullYear(), 
        };

        // save the post
        axios.post('http://localhost:3000/api/posts', post,{
            header:{ 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' }
        })
            .then((res)=>{
                router.push('/');
                console.log('Posted sucessfully');
                console.log(res.data)
            })
            .catch((error)=>{
                alert(error)
                console.log(error)
            });
    };

    return (
        <>
            <Head>
                <title>Gorgey Blog | Write</title>
            </Head>  
            <div className="write">
                <form onSubmit={handlePost} className={styles.form}>
                    <input type="text" placeholder="Title...." className={styles.title} onChange={(e) => setTitle(e.target.value)} value={title}/>
                    <div className={styles.main}>
                        <input type="text" placeholder='Author...' className={styles.author} onChange={(e) => setAuthor(e.target.value)} value={author}/>
                        <textarea name="" id=""  placeholder="Write your post here...." className={styles.textarea} onChange={(e) =>setContent(e.target.value)} value={content}></textarea>
                        <button className={styles.post} disabled={disable}  type='submit' onClick={handlePost}>Post</button>
                    </div>
                </form>
            </div>
        </>
    );
}
 
export default Write;