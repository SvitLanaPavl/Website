let inputFocus = document.getElementById('search-input');
inputFocus.addEventListener('mouseover', () => {
    inputFocus.focus();
});

const navbar = document.querySelectorAll('.nav-sticky');
window.addEventListener('scroll', () => {
    navbar.forEach(function(bar) {
bar.classList.toggle('sticky', window.scrollY>0);
    })
    
    
 
    
});
const mobilenav = document.getElementById('xs-hidden');
const hamburger = document.getElementById('hamburger');
const supportedContent = document.getElementById('navbarSupportedContent');


hamburger.addEventListener('click', () => {
    if(supportedContent.style.display === 'none'){
        supportedContent.style.display = 'flex';
    }

    else {
        supportedContent.style.display = 'none';
    }
    
});




function displaySearch () {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const mainContent = document.getElementsByTagName('main');
    let itemsAvailable = false;
    const searchResult = [];
    mainContent.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchInput)) {
            let newDiv = document.createElement('div');
            mainContent.appendChild(newDiv);
            newDiv.appendChild(searchResult);
            item.style.display = 'block';
            itemsAvailable = true;
            return searchResult.push(item);
           
        }

        else {
            item.display = 'none';
        }
    })

}






