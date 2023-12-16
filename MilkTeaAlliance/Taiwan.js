document.addEventListener('DOMContentLoaded', function () {
  
    let textHolder = [
      'TaiwanMilkTea',
    ];
  
     let imgLinks = [
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/image2637212686066624337-600x400-1.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/800x_100_w-5d2bd44e6b95a.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/images7.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/images9.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/images6.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/images5.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/手搖飲-1624431043.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/cd35880188632f0fcf4c53f594ceb848.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/50lan2.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/taiwanbubbletea3.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Screen_Shot_2020_01_17_at_12.54.34_PM.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/tiger-sugar-tea.webp',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/images34.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/images3-1.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/images1-1.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/images-1.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/OneZoinTaiwan.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/tiger_sugar.0.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/未命名.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/6b460784-2890-11ea-9939-941d1970c7f1_image_hires_114535.webp',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/xingfutang.jpeg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_131996447_218335249745976_769367262051454803_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_152819016_3784300038324936_8432278416686278079_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_209897776_336548751362556_3921221766297901294_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_234619638_1046730609464814_7401411381978620261_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_241857610_533437737916237_1226822168114481955_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_335542280_1362423731270926_8145248660443156060_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_336285842_1394073124720918_7785316133093262040_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_335939344_548956767080968_285233792377285607_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_336021521_2136767253201275_4629350139510786199_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_335763338_1183964615638418_6757551063114369126_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_335979156_161289763461694_8350815831952884227_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_404625328_368060635590920_4983770167888763514_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_98339087_254385132433600_2410306085271745849_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_99094424_176206027060478_8277428141224523702_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_410193546_694049722793311_1418207748357452612_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_409755505_2478407159009729_3139778168622995221_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_240521632_4172626229452692_7113319155046562175_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_405807731_354830440427479_4148378418008120335_n_1080.jpg',

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
  