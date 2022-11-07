import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      try {
        fetch(url)
          .then((res) => {
            if (!res.ok) {
              throw error("there was a problem");
            } else {
              return res.json();
            }
          })
          .then((imageData) => {
            setImages(imageData);
            setLoading(false);
            setError(null);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }, 1000);
  }, [error, loading, url]);

  return { images, error, loading };
};

export default useFetch;
