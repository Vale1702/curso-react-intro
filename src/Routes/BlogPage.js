import { Link, Outlet} from "react-router-dom";
import './style.css'
import {blogdata} from './blogdata'

function BlogPage(){
    return(
        <>
            <h1> Blog Page</h1>

            <Outlet/>
            
            <ul >
            {blogdata.map(post => (
                <BlogLink ley={post.slug} post = {post}/>
            ))}
           </ul>
        </>
    );
}

function BlogLink({post}){
    return(
        <li>
            <Link to={`/blog/${post.slug}`}> {post.title}</Link>
        </li>
    );
}



export {BlogPage};