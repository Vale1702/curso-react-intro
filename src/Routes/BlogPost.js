import { useNavigate, useParams, } from "react-router-dom";
import { blogdata } from "./blogdata";
import './style.css'

function BlogPost(){
    const navigate = useNavigate();
    const  {slug} = useParams();

    const blogpost = blogdata.find( post => post.slug === slug);

    const returnToBlog = () =>{
        navigate('/blog');
    }  
   return(
        <>
            <h2> {blogpost.title}</h2>
            <button onClick={returnToBlog}>Inicio</button>
            <p>{blogpost.content}</p>
            <p> {blogpost.autor}</p>
        </>
    );
}



export {BlogPost};