const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const videoComment = document.querySelector(".video__comment")
const deleteBtn = document.querySelector(".deleteBtn")

const addComment = (text, id) => {
    const videoComments = document.querySelector(".video__comments ul");
    const newComment = document.createElement("li");
    newComment.dataset.id = id;
    newComment.className = "video__comment";
    const icon = document.createElement("i");
    icon.className = "fas fa-comment";
    const span = document.createElement("span");
    span.innerText = ` ${text}`;
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "❌";
    newComment.appendChild(icon);
    newComment.appendChild(span);
    newComment.appendChild(deleteBtn);
    videoComments.prepend(newComment);
};

const deleteCommentReq = async(event) => {
    const id = videoComment.dataset.id
    const reqUrl = await fetch(`/api/comment/${id}/delete`, {
        method: "DELETE"
    })
    console.log(reqUrl)
    console.log("requested")
};

    const handleSubmit = async (event) => {
        event.preventDefault();
        const textarea = form.querySelector("textarea")
        const text = textarea.value;
        const videoId = videoContainer.dataset.videoid;
        if(text === "") {
            return
        }
        const response = await fetch(`/api/videos/${videoId}/comment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({text}),
        });
        if(response.status === 201) {
            textarea.value = "";
        const { newCommentId } = await response.json();
        addComment(text, newCommentId);
        }
};

if (form) {
    form.addEventListener("submit", handleSubmit);
};

deleteBtn.addEventListener("click", deleteCommentReq)