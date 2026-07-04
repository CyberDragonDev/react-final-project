import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice';

const plantsData = [
    // --- Category: Flowers  ---
    { "id": 1, "name": "Rose", "price": 15.99, "category": "Flowers", "image": "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/symbol_thumbnail__medium/public/primary-images/OklahomaRoseStateFlower.jpg?itok=Zcwk3mYy" },
    { "id": 2, "name": "Sunflower", "price": 8.99, "category": "Flowers", "image": "https://tse1.mm.bing.net/th/id/OIP.C6bzaap4IH8P-sJ6OvswDgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { "id": 6, "name": "Orchid", "price": 30.00, "category": "Flowers", "image": "https://www.guide-to-houseplants.com/images/purple-orchid.jpg" },
    { "id": 11, "name": "Tulip", "price": 12.50, "category": "Flowers", "image": "https://thypix.com/wp-content/uploads/2021/01/tulip-photo-175-150x150.jpg" },
    { "id": 12, "name": "Lavender", "price": 14.00, "category": "Flowers", "image": "https://tse3.mm.bing.net/th/id/OIP.K0X_JLDp-XE0S4LHGoLe-wAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { "id": 13, "name": "Marigold", "price": 7.25, "category": "Flowers", "image": "https://www.gardenexpress.com.au/wp-content/uploads/2014/11/seed-marigold-crackerjack-african-seemarcra-150x150.jpg" },

    // --- Category: Houseplants  ---
    { "id": 3, "name": "Fiddle Leaf Fig", "price": 25.00, "category": "Houseplants", "image": "https://m.media-amazon.com/images/I/4163u939oAL._SL160_.jpg" },
    { "id": 4, "name": "Snake Plant", "price": 12.99, "category": "Houseplants", "image": "https://gardeningolivia.com/wp-content/uploads/2024/05/Snake_Plant_indoors-150x150.png" },
    { "id": 7, "name": "Spider Plant", "price": 9.99, "category": "Houseplants", "image": "https://www.provenwinners.com/sites/provenwinners.com/files/imagecache/crop_175_175/ifa_upload/chlorophytum_white_edge_-_2021_ps_intro.jpg" },
    { "id": 8, "name": "Peace Lily", "price": 18.00, "category": "Houseplants", "image": "https://gardentipsforall.com/wp-content/uploads/2022/06/Little-Angel-Peace-Lily-150x150.jpg" },
    { "id": 10, "name": "Jade Plant", "price": 10.99, "category": "Houseplants", "image": "https://smartgardenguide.com/wp-content/uploads/2019/11/jade-plant-care-crassula-ovata-24-1-150x113.jpg" },
    { "id": 14, "name": "Pothos", "price": 11.50, "category": "Houseplants", "image": "https://sumogardener.com/wp-content/uploads/2022/03/Golden-Pothos-Propagation-145x150.jpg" },

    // --- Category: Outdoor Plants ---
    { "id": 5, "name": "Azalea", "price": 5.49, "category": "Outdoor Plants", "image": "https://i5.walmartimages.com/asr/8d4826f7-96c7-47e5-8884-d34a4eeb797e.75df7bb6fb66920789c494aa6aaa5785.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF" },
    { "id": 9, "name": "Bamboo", "price": 45.00, "category": "Outdoor Plants", "image": "https://ahistoriadasplantas.com.br/wp-content/uploads/2024/11/Bambu-1-150x150.png" },
    { "id": 15, "name": "Boston Fern", "price": 15.00, "category": "Outdoor Plants", "image": "https://m.media-amazon.com/images/I/51ezAaTGVXL._SL160_.jpg" },
    { "id": 16, "name": "Aloe Vera", "price": 13.25, "category": "Outdoor Plants", "image": "https://www.healthbenefitstimes.com/9/uploads/2013/08/Aloe-Chine-sis-150x150.jpg" },
    { "id": 17, "name": "English Ivy", "price": 14.99, "category": "Outdoor Plants", "image": "https://tse3.mm.bing.net/th/id/OIP.jfVIguSBzydy3XtWihNiQAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { "id": 18, "name": "Boxwood Shrub", "price": 29.99, "category": "Outdoor Plants", "image": "https://gardenerspath.com/wp-content/uploads/2020/12/Dwarf-English-Boxwood-150x150.jpg" }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const categories = [...new Set(plantsData.map((plant) => plant.category))];

  return (
    <div style={{ padding: '30px', marginTop: '80px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Collection</h1>
      {categories.map((category) => (
        <div key={category} style={{ marginBottom: '20px' }}>
          <h2 style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>{category}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {plantsData
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const isInCart = cartItems.some((item) => item.id === plant.id);

                return (
                  <div key={plant.id} style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center', width: '200px' }}>
                    <img src={plant.image} alt={plant.name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                    <h3>{plant.name}</h3>
                    <p>${plant.price.toFixed(2)}</p>

                    <button 
                      onClick={() => dispatch(addItem(plant))}
                      disabled={isInCart}
                      style={{ 
                        backgroundColor: isInCart ? '#9e9e9e' : '#2E7D32', 
                        color: 'white', 
                        border: 'none', 
                        padding: '10px 15px', 
                        borderRadius: '5px', 
                        cursor: isInCart ? 'not-allowed' : 'pointer',
                        width: '100%',
                        fontWeight: 'bold'
                      }}
                    >
                      {isInCart ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;