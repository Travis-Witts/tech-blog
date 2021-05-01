const createReview = async(event) =>{
    event.preventDefault();
    const postId = event.target.id;
    const content = document.querySelector('#comment').value;
    console.log(postId + content)
    const response = await fetch(`/api/comment/${postId}`,{
        method:'POST',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok){
        document.location.replace('/');
    }else{
        alert('Fail to create review');
    }
}

document.querySelector('.formSub').addEventListener('submit', createReview);