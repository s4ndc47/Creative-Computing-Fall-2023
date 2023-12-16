document.addEventListener('DOMContentLoaded', function () {
  
    let textHolder = [
      'JapanMilkTea',
    ];
  
     let imgLinks = [
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_23421563_1796487543735386_5787581582273413120_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_37109643_275289399689613_1377719843771383808_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_22351989_290215314809006_5843100438370451456_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_22637739_1759295210796350_6709233726649270272_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_23594735_269686073554511_7204296065485373440_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_30915200_836134633240650_5646527614957912064_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_30590265_452708355183623_426492661969453056_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_30829836_209201946478516_6565983626591207424_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_36136577_238114316791444_8416965208039227392_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_22157390_136453450320336_6054481900997705728_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_29714408_204911403428974_763312935148716032_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_30591852_1684861268276448_207032297138946048_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_40560773_1153176404848370_3429121146676317855_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_37583462_808689442668259_4649177926120505344_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_47020329_302804800360632_4430896240368201139_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_22280483_1518604378218270_4319255881519726592_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_22580159_222306428304591_7582545296849108992_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_30079592_509388656124124_4488684902463569920_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_124232341_3608613179197422_8790598188543150593_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_26156484_881735678671329_4787652125624631296_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_27880103_1560198000765759_2787966948049158144_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_26228955_406073023155228_2243585710206484480_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_21980897_1509882142436585_6642907401395634176_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_38771609_279614272629174_5953955197842620416_n_1080.jpg',

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
  