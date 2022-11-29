// import Swiper core and required modules
import classes from './carrusel.module.scss';

import { Navigation, Pagination,  A11y } from 'swiper';
import micro from '../../assets/main/micro.png';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
//import  './carrusel.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//SwiperCore.use([Navigation,Pagination,Scrollbar,A11y]);
const data = [

    {
        id: 1,
        username: 'NOMBRE DE ORGANIZACION',
        descripcion: 'Here goes the description'
    },

    {
        id: 2,
        username: 'NOMBRE DE ORGANIZACION',
        descripcion: 'Here goes the description'
    },
    {
        id: 3,
        username: 'NOMBRE DE ORGANIZACION',
        descripcion: 'Here goes the description'
    },
    {
        id: 4,
        username: 'NOMBRE DE ORGANIZACION',
        descripcion: 'Here goes the description'
    },
    {
        id: 5,
        username: 'NOMBRE DE ORGANIZACION',
        descripcion: 'Here goes the description'
    },
    {
        id: 6,
        username: 'NOMBRE DE ORGANIZACION',
        descripcion: 'Here goes the description'
    }
]

export default () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination,  A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        >

            {data.map(user => (

                <SwiperSlide className={classes["sw"]}  key={user.id}>
                    <div className={classes["sw"]} >
                        <div className={classes["sw"]}>
                            <img src={micro} alt="image" />
                        </div>
                        <h5>{user.username}</h5>
                        <p>
                            {' '}
                            " <i>{user.descripcion}</i> "
                        </p>
                    </div>
                </SwiperSlide>
            ))}
            
        </Swiper>
    );
};