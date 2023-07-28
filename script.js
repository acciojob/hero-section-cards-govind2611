//your JS code here. If required.
// JavaScript can be used to handle the comment submission and display dummy comments.

// Function to handle comment submission
function submitComment() {
  const commentInput = document.getElementById("comment-input");
  const commentText = commentInput.value.trim();

  if (commentText !== "") {
    // Create a new comment element
    const newComment = document.createElement("div");
    newComment.className = "comment";
    newComment.textContent = commentText;

    // Append the new comment to the comments section
    const commentsSection = document.querySelector(".comments");
    commentsSection.appendChild(newComment);

    // Clear the comment input
    commentInput.value = "";
  }
}

// Event listener for comment submission
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", submitComment);
