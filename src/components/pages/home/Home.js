import "./Home.css";
import React from 'react';
import Nav from "../../web components/nav/nav";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper";


const Home = () => {
	return (
		<section id="homeSection" className="mainContainer">
			<Nav activeclass="activeHome" />

			<div className="banner">
				<Swiper
					modules={[Autoplay]}
					autoplay={{ delay: 2500 }}
					loop={true}
					spaceBetween={50}
					slidesPerView={1}>
					<SwiperSlide>
						<img className="bannerImg" src="https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Photos/Office%20Photos%20HD/Netguru-Biuro-2018-5353.jpg?width=1150&height=768&name=Netguru-Biuro-2018-5353.jpg" alt="banner 1" />
					</SwiperSlide>

					<SwiperSlide>
						<img className="bannerImg" src="https://www.netguru.com/hs-fs/hubfs/DSC_8204%20_HD.jpg?width=1150&height=768&name=DSC_8204%20_HD.jpg" alt="banner 2" />
					</SwiperSlide>

					<SwiperSlide>
						<img className="bannerImg" src="https://www.netguru.com/hs-fs/hubfs/13(1)%20(1).png?width=1280&height=640&name=13(1)%20(1).png" alt="banner 3" />
					</SwiperSlide>
				</Swiper>

				<div className="bannerText">
					<p className="bannerP1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore aliquid optio quis enim magnam nisi amet repudiandae est saepe libero velit corrupti facilis facere repellendus quod, harum ducimus, odit labore!
					</p>

					<p className="bannerP2"> <a href="#">Lets Start</a> </p>
				</div>
			</div>

			<div className="homeBody">
				<div className="row row1">
					<div className="rowImgDiv">
						<img src="https://www.netguru.com/hs-fs/hubfs/13(1)%20(1).png?width=1280&height=640&name=13(1)%20(1).png" alt="img" />
					</div>

					<div className="rowTextDiv">
						<h4>Headding 1</h4>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, harum id omnis laborum illo neque inventore, possimus voluptas animi ad eos dignissimos iusto voluptate sed. Inventore laboriosam esse adipisci ipsum?</p>
					</div>
				</div>

				<div className="row row2">
					<div className="rowTextDiv">
						<h4>Headding 2</h4>

						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, harum id omnis laborum illo neque inventore, possimus voluptas animi ad eos dignissimos iusto voluptate sed. Inventore laboriosam esse adipisci ipsum?</p>
					</div>

					<div className="rowImgDiv">
						<img src="https://www.netguru.com/hs-fs/hubfs/13(1)%20(1).png?width=1280&height=640&name=13(1)%20(1).png" alt="img" />
					</div>
				</div>

				<div className="row row3">
					<div className="rowImgDiv">
						<img src="https://www.netguru.com/hs-fs/hubfs/13(1)%20(1).png?width=1280&height=640&name=13(1)%20(1).png" alt="img" />
					</div>

					<div className="rowTextDiv">
						<h4>Headding 3</h4>

						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, harum id omnis laborum illo neque inventore, possimus voluptas animi ad eos dignissimos iusto voluptate sed. Inventore laboriosam esse adipisci ipsum?</p>
					</div>
				</div>
			</div>

			<footer className="footer">

				<div className="footer_col">
					<h3>ABOUT</h3>
					<p><a href="#">Home</a></p>
					<p><a href="#">Service</a></p>
					<p><a href="#">About</a></p>
					<p><a href="#">Contact</a></p>
					<p><a href="#">Careers</a></p>
				</div>

				<div className="footer_col">
					<h3>SOCIAL</h3>
					<p><a href="#">Facebook</a></p>
					<p><a href="#">Twitter</a></p>
					<p><a href="#">Youtube</a></p>
					<p><a href="#">Linkdin</a></p>
				</div>

				<div>
					<h3>OFFICIAL ADDRESS</h3>
					<p>website Private Limited,</p>
					<p>Buildings Alyssa, Begonia &amp;</p>
					<p>Clove Embassy Tech Village,</p>
					<p>Outer Ring Road, Devarabeesanahalli Village,</p>
					<p>Karnataka, India</p>
				</div>

			</footer>

		</section>
	)
}

export default Home