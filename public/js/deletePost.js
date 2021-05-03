const destroy = async(event) =>{
    event.preventDefault();
    const post_id = event.target.id;

    const response = await fetch(`/api/post/${post_id}`,{
        method:'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace(`/`);
}


document.querySelector('.deletePost').addEventListener('click', destroy);