let screenSliderButtons = document.querySelectorAll('.screenSliderButton'),
    tabContentScreen = document.querySelectorAll('.screen-content'),
    tabsParentScreen = document.querySelector('.screenSliderButtons'),
    counterScreen = 0;

function hideSliderContentScreen() {
    tabContentScreen.forEach(item => {
        item.style.display = 'none';
    })

    screenSliderButtons.forEach(item => {
        item.classList.remove('active');
    })
}

function showSliderContentScreen(counterScreen = 0) {
    tabContentScreen[counterScreen].style.display = 'flex';
    screenSliderButtons[counterScreen].classList.add('active');
    tabContentScreen[counterScreen].style.animationName = 'fade'
    tabContentScreen[counterScreen].style.animationTimingFunction = 'ease'
    tabContentScreen[counterScreen].style.animationDuration = '0.5s'
}

hideSliderContentScreen();
showSliderContentScreen();

tabsParentScreen.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('screenSliderButton')) {
        screenSliderButtons.forEach((item, i) => {
            if(target == item) {
                hideSliderContentScreen();
                showSliderContentScreen(i);
                counterScreen = i;
            }
        });
    }
})

const buttonSliderNextScreen = document.querySelector('.slider_next_screen'),
      buttonSliderPreviousScreen = document.querySelector('.slider_previous_screen');
    
function controlCounter(counterScreen) {
    if (counterScreen == 4) {
        counterScreen = 0;
    }
    else if (counterScreen == -1) {
        counterScreen = 3;
    }
    return(counterScreen);
}

buttonSliderNextScreen.addEventListener('click', () => {
    hideSliderContentScreen();
    counterScreen += 1;
    counterScreen = controlCounter(counterScreen);
    showSliderContentScreen(counterScreen);
})

buttonSliderPreviousScreen.addEventListener('click', () => {
    hideSliderContentScreen();
    counterScreen -= 1;
    counterScreen = controlCounter(counterScreen);
    showSliderContentScreen(counterScreen);
})

let clientsSliderButtons = document.querySelectorAll('.clientsSliderButton'),
    tabContentClients = document.querySelectorAll('.clients-images'),
    tabsParentClients = document.querySelector('.clientsSliderButtons'),
    counterClients = 0;

function hideSliderContentClients() {
    tabContentClients.forEach(item => {
        item.style.display = 'none';
    })

    clientsSliderButtons.forEach(item => {
        item.classList.remove('active');
    })
}

function showSliderContentClients(counterClients = 0) {
    tabContentClients[counterClients].style.display = 'flex';
    clientsSliderButtons[counterClients].classList.add('active');
    tabContentClients[counterClients].style.animationName = 'fade'
    tabContentClients[counterClients].style.animationTimingFunction = 'ease'
    tabContentClients[counterClients].style.animationDuration = '0.5s'
}

hideSliderContentClients();
showSliderContentClients();

tabsParentClients.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('clientsSliderButton')) {
        clientsSliderButtons.forEach((item, i) => {
            if(target == item) {
                hideSliderContentClients();
                showSliderContentClients(i);
                counterClients = i;
            }
        });
    }
})

const buttonSliderNextClients = document.querySelector('.slider_next_clients'),
      buttonSliderPreviousClients = document.querySelector('.slider_previous_clients');
    
function controlCounter(counterClients) {
    if (counterClients == 4) {
        counterClients = 0;
    }
    else if (counterClients == -1) {
        counterClients = 3;
    }
    return(counterClients);
}

buttonSliderNextClients.addEventListener('click', () => {
    hideSliderContentClients();
    counterClients += 1;
    counterClients = controlCounter(counterClients);
    showSliderContentClients(counterClients);
})

buttonSliderPreviousClients.addEventListener('click', () => {
    hideSliderContentClients();
    counterClients -= 1;
    counterClients = controlCounter(counterClients);
    showSliderContentClients(counterClients);
})

let reviewsSliderButtons = document.querySelectorAll('.reviewsSliderButton'),
    tabContentReviews = document.querySelectorAll('.reviews-content'),
    tabsParentReviews = document.querySelector('.reviewsSliderButtons'),
    counterReviews = 0;

function hideSliderContentReviews() {
    tabContentReviews.forEach(item => {
        item.style.display = 'none';
    })

    reviewsSliderButtons.forEach(item => {
        item.classList.remove('active');
    })
}

function showSliderContentReviews(counterReviews = 0) {
    tabContentReviews[counterReviews].style.display = 'block';
    reviewsSliderButtons[counterReviews].classList.add('active');
    tabContentReviews[counterReviews].style.animationName = 'fade'
    tabContentReviews[counterReviews].style.animationTimingFunction = 'ease'
    tabContentReviews[counterReviews].style.animationDuration = '0.5s'
}

hideSliderContentReviews();
showSliderContentReviews();

tabsParentReviews.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('reviewsSliderButton')) {
        reviewsSliderButtons.forEach((item, i) => {
            if(target == item) {
                hideSliderContentReviews();
                showSliderContentReviews(i);
                counterReviews = i;
            }
        });
    }
})

const buttonSliderNextReviews = document.querySelector('.slider_next_reviews'),
      buttonSliderPreviousReviews = document.querySelector('.slider_previous_reviews');
    
function controlCounter(counterReviews) {
    if (counterReviews == 4) {
        counterReviews = 0;
    }
    else if (counterReviews == -1) {
        counterReviews = 3;
    }
    return(counterReviews);
}

buttonSliderNextReviews.addEventListener('click', () => {
    hideSliderContentReviews();
    counterReviews += 1;
    counterReviews = controlCounter(counterReviews);
    showSliderContentReviews(counterReviews);
})

buttonSliderPreviousReviews.addEventListener('click', () => {
    hideSliderContentReviews();
    counterReviews -= 1;
    counterReviews = controlCounter(counterReviews);
    showSliderContentReviews(counterReviews);
})

let tabMobileButtonHeader = document.querySelector('.tabMobileButtonHeader'),
    tabMobileContentHeader = document.querySelector('.mobile-header-container-tab-content'),
    darkBgHeader = document.querySelector('.mobile-header-container-tab-darkBg');

tabMobileButtonHeader.addEventListener('click', () => {
    tabMobileContentHeader.style.display = 'block';
    darkBgHeader.style.display = 'block';
    tabMobileContentHeader.style.animationName = 'fade'
    tabMobileContentHeader.style.animationTimingFunction = 'ease'
    tabMobileContentHeader.style.animationDuration = '0.5s'
    darkBgHeader.style.animationName = 'fade-darken-bg'
    darkBgHeader.style.animationTimingFunction = 'ease'
    darkBgHeader.style.animationDuration = '0.5s'
})

darkBgHeader.addEventListener('click', () => {
    tabMobileContentHeader.style.display = 'none';
    darkBgHeader.style.display = 'none';
})

let screenMobileSliderButtons = document.querySelectorAll('.screenMobileSliderButton'),
    tabContentScreenMobile = document.querySelectorAll('.mobile-screen-content'),
    tabsParentScreenMobile = document.querySelector('.screenMobileSliderButtons'),
    counterScreenMobile = 0;

function hideSliderContentScreenMobile() {
    tabContentScreenMobile.forEach(item => {
        item.style.display = 'none';
    })

    screenMobileSliderButtons.forEach(item => {
        item.classList.remove('active');
    })
}

function showSliderContentScreenMobile(counterScreenMobile = 0) {
    tabContentScreenMobile[counterScreenMobile].style.display = 'block';
    screenMobileSliderButtons[counterScreenMobile].classList.add('active');
    tabContentScreenMobile[counterScreenMobile].style.animationName = 'fade'
    tabContentScreenMobile[counterScreenMobile].style.animationTimingFunction = 'ease'
    tabContentScreenMobile[counterScreenMobile].style.animationDuration = '0.5s'
}

hideSliderContentScreenMobile();
showSliderContentScreenMobile();

tabsParentScreenMobile.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('screenMobileSliderButton')) {
        screenMobileSliderButtons.forEach((item, i) => {
            if(target == item) {
                hideSliderContentScreenMobile();
                showSliderContentScreenMobile(i);
                counterScreenMobile = i;
            }
        });
    }
})

const buttonSliderNextScreenMobile = document.querySelector('.slider_next_screen_mobile'),
      buttonSliderPreviousScreenMobile = document.querySelector('.slider_previous_screen_mobile');
    
function controlCounter(counterScreenMobile) {
    if (counterScreenMobile == 4) {
        counterScreenMobile = 0;
    }
    else if (counterScreenMobile == -1) {
        counterScreenMobile = 3;
    }
    return(counterScreenMobile);
}

buttonSliderNextScreenMobile.addEventListener('click', () => {
    hideSliderContentScreenMobile();
    counterScreenMobile += 1;
    counterScreenMobile = controlCounter(counterScreenMobile);
    showSliderContentScreenMobile(counterScreenMobile);
})

buttonSliderPreviousScreenMobile.addEventListener('click', () => {
    hideSliderContentScreenMobile();
    counterScreenMobile -= 1;
    counterScreenMobile = controlCounter(counterScreenMobile);
    showSliderContentScreenMobile(counterScreenMobile);
})

let clientsMobileSliderButtons = document.querySelectorAll('.mobileClientsSliderButton'),
    tabContentClientsMobile = document.querySelectorAll('.mobile-clients-images'),
    tabsParentClientsMobile = document.querySelector('.mobileClientsSliderButtons'),
    counterClientsMobile = 0;

function hideSliderContentClientsMobile() {
    tabContentClientsMobile.forEach(item => {
        item.style.display = 'none';
    })

    clientsMobileSliderButtons.forEach(item => {
        item.classList.remove('active');
    })
}

function showSliderContentClientsMobile(counterClientsMobile = 0) {
    tabContentClientsMobile[counterClientsMobile].style.display = 'grid';
    clientsMobileSliderButtons[counterClientsMobile].classList.add('active');
    tabContentClientsMobile[counterClientsMobile].style.animationName = 'fade'
    tabContentClientsMobile[counterClientsMobile].style.animationTimingFunction = 'ease'
    tabContentClientsMobile[counterClientsMobile].style.animationDuration = '0.5s'
}

hideSliderContentClientsMobile();
showSliderContentClientsMobile();

tabsParentClientsMobile.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('mobileClientsSliderButton')) {
        clientsMobileSliderButtons.forEach((item, i) => {
            if(target == item) {
                hideSliderContentClientsMobile();
                showSliderContentClientsMobile(i);
                counterClientsMobile = i;
            }
        });
    }
})

const buttonSliderNextClientsMobile = document.querySelector('.mobile_slider_next_clients'),
      buttonSliderPreviousClientsMobile = document.querySelector('.mobile_slider_previous_clients');
    
function controlCounter(counterClientsMobile) {
    if (counterClientsMobile == 4) {
        counterClientsMobile = 0;
    }
    else if (counterClientsMobile == -1) {
        counterClientsMobile = 3;
    }
    return(counterClientsMobile);
}

buttonSliderNextClientsMobile.addEventListener('click', () => {
    hideSliderContentClientsMobile();
    counterClientsMobile += 1;
    counterClientsMobile = controlCounter(counterClientsMobile);
    showSliderContentClientsMobile(counterClientsMobile);
})

buttonSliderPreviousClientsMobile.addEventListener('click', () => {
    hideSliderContentClientsMobile();
    counterClientsMobile -= 1;
    counterClientsMobile = controlCounter(counterClientsMobile);
    showSliderContentClientsMobile(counterClientsMobile);
})





let reviewsMobileSliderButtons = document.querySelectorAll('.mobileReviewsSliderButton'),
    tabContentReviewsMobile = document.querySelectorAll('.mobile-reviews-content'),
    tabsParentReviewsMobile = document.querySelector('.mobileReviewsSliderButtons'),
    counterReviewsMobile = 0;

function hideSliderContentReviewsMobile() {
    tabContentReviewsMobile.forEach(item => {
        item.style.display = 'none';
    })

    reviewsMobileSliderButtons.forEach(item => {
        item.classList.remove('active');
    })
}

function showSliderContentReviewsMobile(counterReviewsMobile = 0) {
    tabContentReviewsMobile[counterReviewsMobile].style.display = 'block';
    reviewsMobileSliderButtons[counterReviewsMobile].classList.add('active');
    tabContentReviewsMobile[counterReviewsMobile].style.animationName = 'fade'
    tabContentReviewsMobile[counterReviewsMobile].style.animationTimingFunction = 'ease'
    tabContentReviewsMobile[counterReviewsMobile].style.animationDuration = '0.5s'
}

hideSliderContentReviewsMobile();
showSliderContentReviewsMobile();

tabsParentReviewsMobile.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('mobileReviewsSliderButton')) {
        reviewsMobileSliderButtons.forEach((item, i) => {
            if(target == item) {
                hideSliderContentReviewsMobile();
                showSliderContentReviewsMobile(i);
                counterReviewsMobile = i;
            }
        });
    }
})

const buttonSliderNextReviewsMobile = document.querySelector('.slider_next_reviews_mobile'),
      buttonSliderPreviousReviewsMobile = document.querySelector('.slider_previous_reviews_mobile');
    
function controlCounter(counterReviewsMobile) {
    if (counterReviewsMobile == 4) {
        counterReviewsMobile = 0;
    }
    else if (counterReviewsMobile == -1) {
        counterReviewsMobile = 3;
    }
    return(counterReviewsMobile);
}

buttonSliderNextReviewsMobile.addEventListener('click', () => {
    hideSliderContentReviewsMobile();
    counterReviewsMobile += 1;
    counterReviewsMobile = controlCounter(counterReviewsMobile);
    showSliderContentReviewsMobile(counterReviewsMobile);
})

buttonSliderPreviousReviewsMobile.addEventListener('click', () => {
    hideSliderContentReviewsMobile();
    counterReviewsMobile -= 1;
    counterReviewsMobile = controlCounter(counterReviewsMobile);
    showSliderContentReviewsMobile(counterReviewsMobile);
})