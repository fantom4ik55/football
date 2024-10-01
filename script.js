const sortingItems = document.querySelectorAll(".header__sorting-sport-live1");

sortingItems.forEach((item) => {
    
  
  item.addEventListener("click", toggleSportList);
  item.addEventListener("toggle", () => {

    if (item.open) {
      sortingItems.forEach((otherItem) => {
        
        if (otherItem !== item) {
          otherItem.open = false;
          
        } else{
            
        }
      });
    }
   
       
  });
});
// при клике на другие header__sorting-sport-live1 класс header__sorting-sport-border-none не пропадает
function toggleSportList() {
    const sportList = document.querySelector(".header__sorting-sport-list");
    sportList.classList.contains('header__sorting-sport-border-none') ? null : sportList.classList.add('header__sorting-sport-border-none');
    
  
  }
  //закрытие и удаление классна header__sorting-sport-border-none
  document.addEventListener('click', function(event) {
    const detailsElements = document.querySelectorAll('details');

     
    let isClickInside = false;
    detailsElements.forEach(details => {
        if (details.contains(event.target)) {
            isClickInside = true;
        }
    });
    var sortingSportList = document.querySelector('.header__sorting-sport-list');
    if (!isClickInside) {
        detailsElements.forEach(details => {
            sortingSportList.classList.remove('header__sorting-sport-border-none');
            details.removeAttribute('open');

            
        });
    }
});
document.querySelectorAll('.header__sorting-sport-live1').forEach((details) => {
    details.addEventListener('toggle', () => {
        if (details.open) {
            document.querySelectorAll('.header__sorting-sport-live1').forEach((otherDetails) => {
                if (otherDetails !== details) {
                    otherDetails.open = false;
                }
            });
        }
    });
});



// Выбираем элемент с классом header__sorting-box
const sortingBox = document.querySelector('.header__sorting-box'); 

sortingBox.addEventListener('click', (event) => {
  const detailsElements = sortingBox.querySelectorAll('details');  

  detailsElements.forEach(element => {
    if (event.target !== element && !element.contains(event.target)) { //  
      element.open = false;  
    }
  });
});
//--------------------------------------------------------------------------


flatpickr(".header__nav-place-data-input",{
  altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
});