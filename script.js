<script>
function addBook() {
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("bookAuthor").value;
    let pages = document.getElementById("bookPages").value;
    let pdf = document.getElementById("bookPdf").value;

    if(name === "" || author === "" || pages === "" || pdf === ""){
        alert("Please fill all fields!");
        return;
    }

    // Create new card
    let card = `
        <div class="book-card">
            <h3>${name}</h3>
            <p><b>Author:</b> ${author}</p>
            <p><b>Pages:</b> ${pages}</p>
            <a href="${pdf}" class="pdf-btn" target="_blank">📄 Open PDF</a>
        </div>
    `;

    // Add to list
    document.getElementById("bookList").innerHTML += card;

    // Clear input
    document.getElementById("bookName").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookPages").value = "";
    document.getElementById("bookPdf").value = "";
}
</script>
