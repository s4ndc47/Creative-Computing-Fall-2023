document.addEventListener('DOMContentLoaded', function () {
  
    let textHolder = [
      'ThaiMilkTea',
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
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_19428656_1409523432427412_5782848077341655040_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_145205559_145843340684106_8926190823654138205_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_158275817_3550105758451909_2067870347241253417_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_144023509_1122713764834766_2435962221084216450_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_26869061_1815806588718460_4823476602459389952_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_23734806_129799884370224_2587821708278759424_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_44759629_320713021847530_6930030964323322286_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_40645915_326375844592795_7514801824926354388_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_19534120_1444838798907485_1752735381373059072_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_17931909_1270120073106117_7887155321058099200_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_18298680_1292996877482466_5952387440290299904_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_20766935_270178583481133_2299635080663924736_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_18380358_782280548615739_6778923526691749888_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_18094801_410586059319966_2626632639083184128_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_37199628_884487908429180_4659843665651302400_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_20902690_260258717806390_6904263454211702784_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_19624336_1976414412588688_4618160806180159488_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_44433612_485185728637058_245484015349732554_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_19228218_1884226495163988_8330181085971349504_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_19122458_1667080253321832_4274749197015580672_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_17596829_241153046357354_172214363069874176_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_281472350_491042736144000_8371262906501866158_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_357811590_1104763240502219_6934084284753787803_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_243786474_300174674807571_741389537377511278_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_103858763_1666909716831445_479645412694305559_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_60837357_179545393040109_3739697462189272005_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_121055809_194637885395391_2618160286258479367_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_175671977_457134415357352_2760919181480916737_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_309512104_808848553797550_7134479112340551211_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_309521292_136156792249451_4766834750890526799_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_257297373_618423372621786_2307253061182076986_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_407682534_1086300645698102_5238003594626124141_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_407678827_1079532396554237_2072461929783412080_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_117884653_154919826239998_9155245365971820233_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_117987910_653380618718278_2622470890384520724_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_118007751_754808495371673_1186812461228799132_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_117885331_305002900724251_1620857598575346969_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_117814286_606917923356202_1564426847730856981_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_117888430_633554944203787_4579889921381595069_n_1080.jpg',
      'https://photolibrary.commons.gc.cuny.edu/wp-content/blogs.dir/27109/files/2023/12/Snapinsta.app_405200424_247212615042992_5943813128569386058_n_1080.jpg',
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
  