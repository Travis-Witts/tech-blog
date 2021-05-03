const createPost = async(event) =>{
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#post').value;
    console.log(title + content)
    const response = await fetch(`/api/post`,{
        method:'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok){
        document.location.replace('/');
    }else{
        alert('Fail to create post');
    }
}

document.querySelector('#postSub').addEventListener('submit', createPost);