import React, { useState, useEffect } from "react";

export function ImagenesFooter() {
  const [images, setImages] = useState([]);

  async function getInstagramImages(token) {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=${token}`;
    const response = await fetch(url);
    const data = await response.json();
    const latestImages = data.data.slice(4, 9);
    return latestImages;
  }

  useEffect(() => {
    const token =
      "IGQVJYbzBTVlZAVQmg3d2t1RkRwUEJzT3Vrd1JKbWduLWZAhWkxGQ3d5X19ocjZAjYXdvZAU9SVmk4RlZASd3BxZA04wcEVFUk9Gd19wN0JKRGNXRlZAJWVpvc0MwNjgxZAkIwMTIwdjFMd3ZAQRTN1MFZAFdFczNwZDZD";
    async function fetchInstagramImages() {
      const latestImages = await getInstagramImages(token);
      setImages(latestImages);
    }
    fetchInstagramImages();
  }, []);

  return (
    <div className="border border-white rounded p-3">
      <div className="d-flex justify-content-center">
        {images ? (
          images.map((image) => (
            <img
              className="img-fluid col-2 mx-1 URL"
              src={image.media_url}
              alt={image.caption}
              key={image.id}
            />
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}
