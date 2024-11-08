const loadMoreReviewsButton = document.getElementById("load-more-reviews");
const reviews = document.getElementById("reviews");

const hideElement = (element) => element.classList.add('d-none');

const createSpinner = () => {
    const spinner = document.createElement('div');
    spinner.classList.add('spinner-border');
    return spinner;
}

const fetchNewCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
        const card = document.createElement('div');
        card.classList.add('col-md-4');
        card.innerHTML = `
        <div class="card shadow">
                        <img src="assets/woman.png" class="card-img-top m-auto pt-3 avatar-icon" alt="user-avatar">
                        <div class="card-body">
                            <h5 class="card-title text-center">Petra Petrović</h5>
                            <h5 class="card-title text-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </h5>
                            <p class="card-text fs-6">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Etiam vehicula justo nec auctor egestas. Curabitur lobortis
                                id mi ac consequat. Phasellus hendrerit posuere porta.</p>
                        </div>
                    </div>
        `;
        cards.push(card);
    }
    return cards;
}

const appendArrayOfElementsInParent = (arr, parent) => {
    arr.forEach(element => {
        parent.append(element);
    })
}

const loadMoreReviews = () => {
    hideElement(loadMoreReviewsButton);
    const spinner = createSpinner();
    reviews.append(spinner);
    setTimeout(() => {
        reviews.removeChild(spinner);
        const cards = fetchNewCards()
        appendArrayOfElementsInParent(cards, reviews);
    }, 2000);
}

loadMoreReviewsButton.addEventListener('click', loadMoreReviews);