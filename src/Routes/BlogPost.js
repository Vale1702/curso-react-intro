import { useNavigate, useParams, } from "react-router-dom";
import { blogdata } from "./blogdata";
import './style.css'
import { useAuth } from "../Auth/auth";
import { useBlogs } from "../App/useBlogs";

function BlogPost(){
    const navigate = useNavigate();
    const  {slug} = useParams();
    const auth = useAuth();
    const {deleteBlog} = useBlogs();

    const blogpost = blogdata.find( post => post.slug === slug);

    if(!blogpost){
        return <p>Blog no encontrado</p>
    }

    const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username;

    const handDelete = () =>{
    deleteBlog(slug);
    navigate('/blog');
 }    

   return(
        <>
            <h2> {blogpost.title}</h2>
            <button onClick={() => navigate ('/')}>Inicio</button>
            <p>{blogpost.content}</p>
            <p> {blogpost.author}</p>

            {canDelete &&(
                <button onDelete={handDelete} style={ { color : "red"}}>Eliminar Blog</button>
            )}
        </>
    );
}

export {BlogPost};