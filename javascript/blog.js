const url = 'http://localhost:3000/cards/1';

fetch(url)
  .then(response => response.json())
  .then(data => {
    let infoElement = document.getElementById('js-info')

    infoElement.innerHTML = ` 
  <div class="info__Text">
  <h4 class="info__tilte">${data.title}</h4>
  <p class="info__paragrah">${data.completeParagraph}</p>
</div>
<div class="info__profile">
  <div class="info__user-data">
    <img src="${data.profile}" alt="profile image" class="card__profile info__img">
    <div class="info__content">
      <span class="info__name">${data.name}</span>
      <span class="info__date">Published on ${data.completeDate}</span>
    </div>
  </div>
  <div class="info__social">
    <span class="info__share">SHARE:</span>
    <a href="#" class="info__social-link">
      <img src="images/instagram.svg" alt="instagram logo">
    </a>
    <a href="#" class="info__social-link">
      <img src="images/facebook.svg" alt="facebook logo">
    </a>
    <a href="#" class="info__social-link">
      <img src="images/twitter.svg" alt="twitter logo">
    </a>
  </div>
</div>
<div class="info__text2">
  <img src="${data.image}" alt="photo reference" class="info__img-text">
  <p class="info__text2-refe">${data.reference}</p>
  <p class="info__text2-paragrah">${data.completeParagraph}</p>
</div>
  `;

    console.log(data)
  }

  )
  .catch(err => console.log(err))