const apiUrl = 'https://7pu263mpcarw3lhazop5ec7u7e0bclzu.lambda-url.us-east-1.on.aws/';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('submitForm');
    const modalOverlay = document.querySelector(".modal-overlay");
    const closeModalButton = document.getElementById("closeModal");

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const githubRepoUrl = document.getElementById('githubRepoUrl').value;

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, githubRepoUrl }),
        })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    displaySuccessModal();
                } else {
                    console.error('Form submission failed.');
                }
            })
            .catch((error) => {
                console.error('An error occurred:', error);
            });
    });

    const displaySuccessModal = () => {
        modalOverlay.style.display = "flex";

        closeModalButton.addEventListener("click", () => {
            modalOverlay.style.display = "none";
        });
    }
});
