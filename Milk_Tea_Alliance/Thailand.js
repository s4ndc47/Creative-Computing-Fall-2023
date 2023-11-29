document.addEventListener('DOMContentLoaded', function () {
    // Your code goes here
  
    let textHolder = [
      "What's my favorite ice cream? To reveal it a dream. I could eat it day and night. Best not to wear white.Whatever size serving, I eat every bit. CHOCOLATE",
      'fudge ripples through vanilla ice cream. peanut butter cups and chunks of chocolate.sweet driblets trickle down a sugar cone...',
      'I recently started a brand new diet.It lets you eat ice cream,you really should try it.',
      'Give me Ice cream!',
      'Mint Chocolate Green…',
      'butter pecan',
      'lavender',
      'Ice cream, ice cream in a bowl. Ice cream, ice cream in a cone.',
      'ice cream is my friend, you are not',
      'Versatile vanilla vindicates vivacious flavor',
    ];
  
  
     let imgLinks = [
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/11/Snapinsta.app_343232279_256970093438541_8800055883440587663_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/11/Snapinsta.app_343572008_208222355009889_7275227983470193749_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/11/Snapinsta.app_343266685_224953430138899_2224363436999619557_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/11/Snapinsta.app_343307192_776849437356425_1778476156642296480_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/11/Snapinsta.app_343228583_1384605702329040_8318484965787298498_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/11/Snapinsta.app_342904079_169622016031903_7579215848510765415_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/11/Snapinsta.app_343065054_1475253366565374_2725555686446765135_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/11/Snapinsta.app_343276688_578825574314622_6132728842150524371_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/11/Snapinsta.app_403183262_1386744461923584_650169330370521090_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/11/Media-TastingChaTraMeurby-Lery-4-of-19.jpg',
         'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/11/Recipe-19.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/11/s-l1600.jpg',
    ];
    
    
  
    // Add images to page
    
    // First select the container we want to add images too
    let container = document.querySelector('#container');
    // Loop through the image array and add an image for each item in the array
    imgLinks.forEach((d) => {
      
      let newImg = document.createElement('img');
      newImg.src = d;
      newImg.style.left = 90 * Math.random() + '%';
      newImg.style.top = 90 * Math.random() + '%';
      container.appendChild(newImg);
    });
    
    
    // After adding images, we want to add click events to each image to remove them
    // So first we select *all* images on the page
    let imgs = document.querySelectorAll('img');
    
    // We loop through this selection of all images (an array)
    imgs.forEach((img)=> {
      //for each image, we add an event listener that will change its styling on click
      img.addEventListener('click', ()=>{
        img.style.display = 'none';
      })
    })
  });
  