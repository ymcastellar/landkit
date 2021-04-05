const url = 'http://localhost:3000/cards';
let counter = 0;

fetch(url)
  .then(response => response.json())
  .then(data => {
    let html = ''
    data.forEach(data => {
      if (counter <= 5) {
        
        html += `<div class="card-container">
      <a href="blog.html">
      <div class="card">
      <img src="${data.image}" alt="" class="card__img">
      <div class="card__body">
        <h4 class="card__title" <b>${data.title}</b></h4>
        <p class="card__text">${data.paragraph}</p>
      </div>
      <hr class="card__hr">
      <div class="card__footer">
        <div class="card__name">
          <img src="${data.profile}" alt="profile picture" class="card__profile">
          <span>${data.name}</span>
        </div>
        <div class="card__date">
          <span>${data.date}</span>
        </div>
      </div>
      <img src="images/stars.svg" alt="star icon" class="card__star">
      <span class="card__price">$49/MO</span>
      </div>
      </a>
      </div>
        `;
      }
      counter += 1;
      if (counter > 6) {
        let loadbtn = document.getElementById('js-loadbtn');
        let loadaction = document.querySelector('js-loadmore');
        function show() {
          html += `<div class="card-container">
          <a href="blog.html">
          <div class="card">
          <img src="${data.image}" alt="" class="card__img">
          <div class="card__body">
            <h4 class="card__title" <b>${data.title}</b></h4>
            <p class="card__text">${data.paragraph}</p>
          </div>
          <hr class="card__hr">
          <div class="card__footer">
            <div class="card__name">
              <img src="${data.profile}" alt="profile picture" class="card__profile">
              <span>${data.name}</span>
            </div>
            <div class="card__date">
              <span>${data.date}</span>
            </div>
          </div>
          <img src="images/stars.svg" alt="star icon" class="card__star">
          <span class="card__price">$49/MO</span>
          </div>
          </a>
          </div>
            `;
        }
        loadbtn.innerHTML = `
              <button class="load-more js-loadmore" onclick=('click', show())>
                <span></span>
                <span>Load More</span>
                <img src="images/arrow.svg" alt="arrow icon" class="loadmore__arrow">
              </button>`
      }
    });

    let element = document.getElementById('js-card')
    element.innerHTML = html;
    let notFountEl = document.getElementById('js-not-found');
  
    if (counter == 0) {
      notFountEl.innerHTML = `<div class="not-found__text">
      <h4 class="not-found__title">Uh oh.</h4>
      <p class="not-found__paragrah">We ran into an issue, but don’t worry, we’ll take care of it for sure.</p>
      <a href="#" class="results__link not-found__btn">Back to safety</a>
    </div>
    <div class="not-found__image">
      <img src="images/not-found-img.png" alt="not found image" class="not-found__image-item">
    </div>`;
  }
  console.log(counter);
  })
  .catch(err => console.log(err))


  