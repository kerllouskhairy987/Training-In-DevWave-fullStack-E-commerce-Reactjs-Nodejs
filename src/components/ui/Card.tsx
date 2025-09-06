/* eslint-disable @typescript-eslint/no-explicit-any */

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MultiActionAreaCard({ product }: any) {

  console.log("+______________+", product)

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