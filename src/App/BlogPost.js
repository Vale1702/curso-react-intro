import { Link, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";
import './style.css'

function BlogPost(){
    const  {slug} = useParams();

    const blogpost = blogdata.find( post => post.slug === slug);

    return(
        <>
            <h2> {blogpost.title}</h2>
            <p>{blogpost.content}</p>
            <p> {blogpost.autor}</p>
        </>
    );
}



export {BlogPost};