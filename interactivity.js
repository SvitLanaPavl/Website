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

let galleryImages = document.querySelectorAll('.g-image');
let getLatestOpenedImage;
let windowWidth = window.innerWidth;
if(galleryImages) {
    galleryImages.forEach(function() {

    })
}

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






