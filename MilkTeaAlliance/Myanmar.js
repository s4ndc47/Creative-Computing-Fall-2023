document.addEventListener('DOMContentLoaded', function () {
  
    let textHolder = [
      'MyanmarMilkTea',
    ];
  
     let imgLinks = [
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_11910422_1483945725233021_549617092_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_82885674_2574426159502878_184523595638756874_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_83561621_232348861108407_5031600966489631042_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_118878849_370778757249319_8944378121070464442_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_325784357_5877182655706123_660801326943918113_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_309557817_1126875591598824_1371449255670095003_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_342886511_5867993153250436_2152653756681987791_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_280752186_1192748654877358_8644081178976318603_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_240845371_220573299913943_7082160362482271519_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_241064067_284040183059853_8979893907344220805_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_181049732_161127672594814_8963001799359848548_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_47692738_146488153011271_198679365883907666_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_18948092_417311708668362_8941298526386651136_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_17494817_434560586885525_1461360904477081600_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_113984860_3067878773267330_2933184551575052293_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_12383473_1668569900069180_916339626_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_85205038_1123816597950756_5546886572687152582_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_85209752_212473946613316_7846489353374816761_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_249774121_857722094914295_1323934840476902307_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_276074186_385548586904078_7204247569433519461_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_276013266_1090154458228543_3125817341246766634_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_276169183_684581185999304_7872583734335441597_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_277111412_356952589686989_6832334764486699426_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_382270113_225340503872645_2530831193907034336_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_125203830_427305971999978_763633891333544834_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_124196248_487396655511226_8424251872415426529_n_1080.jpg',
    ];
    
    
    // Add images to page
    
    // First select the container we want to add images too
    let container = document.querySelector('#container');
    // Loop through the image array and add an image for each item in the array
    imgLinks.forEach((d) => {
      
      let newImg = document.createElement('img');
      newImg.src = d;
      newImg.style.left = 80 * Math.random() + '%';
      newImg.style.top = 80 * Math.random() + '%';
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
  