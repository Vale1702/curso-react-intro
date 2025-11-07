import { useNavigate, useParams, } from "react-router-dom";
import { blogdata } from "./blogdata";
import './style.css'
import { useAuth } from "../Auth/auth";

function BlogPost(){
    const navigate = useNavigate();
    const  {slug} = useParams();

    const auth = useAuth();

    const blogpost = blogdata.find( post => post.slug === slug);

    const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username;

    const returnToBlog = () =>{
        navigate('/blog');
    }  
   return(
        <>
            <h2> {blogpost.title}</h2>
            <button onClick={returnToBlog}>Inicio</button>
            <p>{blogpost.content}</p>
            <p> {blogpost.author}</p>

            {canDelete &&(
                <button>Eliminar Blog</button>
            )}
        </>
    );
}

export {BlogPost};