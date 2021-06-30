import React, { useEffect, useState } from "react";
import pegarPostUnico from "../utils/pegarPostUnico";
import { useParams } from "react-router-dom";
import {Carousel} from "react-bootstrap";


const CarouselPage = () => {

  const { id } = useParams();

  const [filmeData, setFilmeData] = useState({});

  const coletarPost = async (id) => {
    const _listaCarrossel = await pegarPostUnico(id);
    setFilmeData(_listaCarrossel);
  }


  useEffect(() => { coletarPost(id) }, [id]);

  return (
    <div>
    {filmeData && filmeData.imagemCarousel ? <Carousel fade >
      { 
        filmeData.imagemCarousel.map( (item, index) => {
          return <Carousel.Item interval={3000} key={index}>
              <img
                className="dp-imagem-carrossel d-block w-100"
                src={item}
                alt="First slide"
              /> 
            </Carousel.Item> 
        } )
      };
    </Carousel>
    : "" }
  </div>
  );

};

export default CarouselPage;