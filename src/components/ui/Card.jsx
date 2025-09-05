
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MultiActionAreaCard({ product }) {

  
                

const formattedDate = product.deliveryDate
  ? new Date(product.deliveryDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  : "N/A";

  return (



<Card 
  sx={{ 
    width: 290, 
    height: 470,   // force same height for all cards
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between" // spread content evenly
  }}
>
  <Link to={`/products/${product?._id}`}>
  <CardActionArea sx={{ flexGrow: 1 }}>
    <CardMedia
      component="img"
      image={product.images[0]}
      alt={product.name}
      loading="lazy"
      sx={{
        height: 200,
        objectFit: "cover",
      }}
    />

    <CardContent>
      <Typography gutterBottom variant="h6" component="div" noWrap>
        {product.name}
      </Typography>

      <div className="flex items-center mb-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={i < product.stars ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}
          />
        ))}
      </div>

      <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
        {product.salerate} + bought in past month
      </Typography>

      <Typography variant="body2" sx={{ fontSize: 25, fontWeight: "bold" }}>
        {product.price}
        <Typography component="span" sx={{ color: "text.secondary", fontSize: 14, fontWeight: "normal" }}>
          {" "}{product.discount} % off
        </Typography>
      </Typography>

      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Save extra with No Cost EMI
      </Typography>

      <Typography variant="body2">
        FREE delivery by{" "}
        <Typography component="span" sx={{ fontWeight: "bold" }}>
          {formattedDate}
        </Typography>
      </Typography>
    </CardContent>
  </CardActionArea>

  <CardActions>
    <Button
      size="small"
      sx={{
        backgroundColor: "#FFCC00",
        color: "black",
        px: 2,
        py: 1,
        borderRadius: "20px",
        mb: 2,
      
      }}
    >
      Add to Cart
    </Button>
  </CardActions>
  </Link>
</Card>

  );
}











// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';
// import { Star } from 'lucide-react';
// import { styled } from '@mui/material/styles';

// // Styled component for the card with hover effects
// const ProductCard = styled(Card)(({ theme }) => ({
//   maxWidth: 300,
//   transition: 'transform 0.3s, box-shadow 0.3s',
//   '&:hover': {
//     transform: 'translateY(-5px)',
//     boxShadow: theme.shadows[8],
//   },
// }));

// // Fallback image in case the product image fails to load
// const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80';

// export default function MultiActionAreaCard({ product }) {
//   // Function to handle image loading errors
//   const handleImageError = (e) => {
//     e.target.src = FALLBACK_IMAGE;
//   };

//   // Use actual working images instead of example.com placeholders
//   const getImageUrl = () => {
//     if (product.images && product.images.length > 0) {
//       // Replace example.com URLs with actual image URLs
//       return product.images[0].replace(
//         'https://example.com/images/', 
//         'https://images.unsplash.com/photo-'
//       ) || FALLBACK_IMAGE;
//     }
//     return FALLBACK_IMAGE;
//   };

//   const imageUrl = getImageUrl();
  
//   // Format price with currency
//   const formattedPrice = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD'
//   }).format(product.price);

//   // Calculate discounted price
//   const discountedPrice = product.discount > 0 
//     ? product.price - (product.price * product.discount / 100)
//     : null;

//   const formattedDiscountedPrice = discountedPrice 
//     ? new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'USD'
//       }).format(discountedPrice)
//     : null;

//   // Format delivery date
//   const formatDeliveryDate = (dateString) => {
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString('en-US', { 
//         weekday: 'long', 
//         month: 'long', 
//         day: 'numeric' 
//       });
//     } catch (error) {
//       return "Soon";
//     }
//   };

//   return (
//     <ProductCard>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           image={imageUrl}
//           alt={product.name}
//           onError={handleImageError}
//           sx={{
//             height: 200,
//             objectFit: "cover",
//           }}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h6" component="div">
//             {product.name}
//           </Typography>
          
//           <Typography variant="body2" color="text.secondary" gutterBottom>
//             {product.brand || 'Electronics'}
//           </Typography>

//           <div className="flex items-center mb-1">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 size={20}
//                 className={i < product.stars ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}
//               />
//             ))}
//             <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
//               ({product.stars})
//             </Typography>
//           </div>

//           <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
//             {product.salerate}+ bought in past month
//           </Typography>
          
//           <div sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
//             {discountedPrice ? (
//               <>
//                 <Typography variant="h6" sx={{ fontWeight: 'bold', display: 'inline' }}>
//                   {formattedDiscountedPrice}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: 'text.secondary', textDecoration: 'line-through', ml: 1 }}>
//                   {formattedPrice}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: 'success.main', ml: 1, fontWeight: 'bold' }}>
//                   {product.discount}% off
//                 </Typography>
//               </>
//             ) : (
//               <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                 {formattedPrice}
//               </Typography>
//             )}
//           </div>
          
//           <Typography variant="body2" sx={{ color: 'success.main', fontWeight: 'bold', marginBottom: 1 }}>
//             Save extra with No Cost EMI
//           </Typography>

//           <Typography variant="body2">
//             FREE delivery by{' '}
//             <Typography variant="span" sx={{ fontWeight: 'semi-bold' }}>
//               {formatDeliveryDate(product.deliveryDate)}
//             </Typography>
//           </Typography>
          
//           <Typography variant="body2" sx={{ color: 'info.main', fontWeight: 'medium', mt: 1 }}>
//             Only {product.stock} left in stock
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions sx={{ justifyContent: 'center' }}>
//         <Button 
//           size="small" 
//           sx={{ 
//             backgroundColor: '#FFCC00', 
//             color: 'black',
//             padding: '8px 16px',
//             borderRadius: '20px',
//             mb: 2,
//             '&:hover': {
//               backgroundColor: '#FFD700',
//             }
//           }}
//         >
//           Add to Cart
//         </Button>
//       </CardActions>
//     </ProductCard>
//   );
// }