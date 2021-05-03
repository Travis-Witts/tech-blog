const destroy = async(event) =>{
    event.preventDefault();
    let post_id = event.target.id;
    console.log(event.target.id)

    const response = await fetch(`/api/post/${post_id}`,{
        method:'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace(`/`);
}


document.querySelector('.deletePost').addEventListener('click', destroy);