
import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useBlogs(){
    const {
        item : blogs,
        saveItem : saveBlogs,
        synchronizeItems: synchronizeBlogs,
        loading,
        error,
    }= useLocalStorage("Blogs>v1", []);

    const [searchValue, setSearchValue] = React.useState("");

    const searchedBlogs = blogs.filter((blog)=>{
        const blogTitle = blog.title.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return blogTitle.include(searchText);
    });

    const addBlog = (newBlog) =>{
        const newBlogs = [...blogs];
        newBlog.push(newBlog);
        saveBlogs(newBlogs);
    }

    const deleteBlog = (slug) => {
        const newBlogs = [...blogs];
        const blogIndex = newBlogs.findIndex((blog) => blog.slug === slug);
        newBlogs.splice(blogIndex,1)
        saveBlogs(newBlogs);
    };

    return{
        loading,
        error,
        blogs,
        searchedBlogs,
        searchValue,
        setSearchValue,
        addBlog,
        deleteBlog,
        synchronizeBlogs,
    };
}

export {useBlogs};