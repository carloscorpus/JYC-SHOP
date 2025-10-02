import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './components/ui/card';

import logo from '@/assets/logo.jpeg';
import herooo from '../src/hero.png';
import aña from '@/assets/aña.jpeg';
import icon1 from '@/assets/icon1.jpeg';
import icon2 from '@/assets/icon2.jpeg';
import icon3 from '@/assets/icon3.jpeg';
import icon4 from '@/assets/icon4.jpeg';
import icon5 from '@/assets/icon5.jpeg';
import foooter from '../src/fooooter.png';

const products = [
	{ title: 'Camisa Oversize de Lino', price: '$65.00', img: aña },
	{ title: 'Pantalón Cargo Minimal', price: '$79.00', img: aña },
	{ title: 'Vestido Gris Seda', price: '$65.00', img: aña },
	{ title: 'Vestido Largo de Cáñamo', price: '$65.00', img: aña },
	{ title: 'Vestido de Gala Verde', price: '$65.00', img: aña },
	{ title: 'Thunder Jeans', price: '$65.00', img: aña },
];

const testimonios = [
	{
		name: 'Laura M.',
		text: 'Simplemente me encantó. La calidad es increíble y llegó en solo dos días.',
		avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
	},
	{
		name: 'Laura M.',
		text: 'Simplemente me encantó. La calidad es increíble y llegó en solo dos días.',
		avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
	},
	{
		name: 'Laura M.',
		text: 'Simplemente me encantó. La calidad es increíble y llegó en solo dos días.',
		avatar: 'https://randomuser.me/api/portraits/women/72.jpg',
	},
];

function App() {
	return (
		<>
			<div>
				{/* NAVBAR */}
				<nav className="fixed top-0 left-0 w-full bg-white shadow-md flex flex-row items-center justify-between px-6 py-4 z-50">
					<div className="w-28">
						<img src={logo} alt="Logo" className="w-full object-contain" />
					</div>
					<ul className="hidden md:flex space-x-8 items-center font-medium">
						<a href="#inicio" className="hover:text-orange-600">
							Inicio
						</a>
						<a href="#coleccion" className="hover:text-orange-600">
							Colección
						</a>
						<a href="#contacto" className="hover:text-orange-600">
							Contacto
						</a>
					</ul>
					<div className="hidden sm:flex items-center">
						<Button>Explorar Colección</Button>
					</div>
				</nav>

				{/* HERO */}
				<section
					id="inicio"
					className="relative w-full h-[90vh] flex items-center justify-center bg-cover bg-center"
					style={{ backgroundImage: `url(${herooo})` }}
				>
					<div className="absolute inset-0 bg-black/50"></div>
					<div className="relative z-10 text-center text-white px-6">
						<h1 className="text-4xl md:text-6xl font-bold mb-4">
							Viste tu esencia <br /> con estilo único
						</h1>
						<p className="text-lg md:text-xl mb-6">
							Descubre prendas atemporales diseñadas para expresarte. Comodidad, calidad y diseño
							sostenible.
						</p>
						<Button className="bg-orange-600 hover:bg-orange-700">Ver Colección</Button>
					</div>
				</section>

				{/* COLECCIÓN */}
				<section id="coleccion" className="p-10">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Nuestros Bestsellers</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{products.map((item, index) => (
							<Card key={index} className="bg-zinc-100 shadow-md">
								<CardHeader>
									<img src={item.img} className="w-full object-cover" alt={item.title} />
								</CardHeader>
								<CardContent>
									<p>{item.title}</p>
									<p>
										<strong>{item.price}</strong>
									</p>
								</CardContent>
								<CardFooter>
									<Button>Ver más</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</section>

				{/* ICONOS */}
				{/* ¿POR QUÉ ELEGIRNOS? */}
				<section className="bg-gray-200 py-14 px-6">
					<h2 className="text-2xl md:text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
					<div className="flex flex-wrap justify-center gap-12 text-center">
						<div className="flex flex-col items-center max-w-[160px]">
							<img src={icon1} alt="Producción ética" className="w-12 h-12 mb-3" />
							<p className="font-medium">Producción ética</p>
						</div>
						<div className="flex flex-col items-center max-w-[160px]">
							<img src={icon2} alt="Política de devolución fácil" className="w-12 h-12 mb-3" />
							<p className="font-medium">Política de devolución fácil</p>
						</div>
						<div className="flex flex-col items-center max-w-[160px]">
							<img src={icon3} alt="Envío rápido y gratuito" className="w-12 h-12 mb-3" />
							<p className="font-medium">Envío rápido y gratuito</p>
						</div>
						<div className="flex flex-col items-center max-w-[160px]">
							<img src={icon4} alt="Diseño exclusivo" className="w-12 h-12 mb-3" />
							<p className="font-medium">Diseño exclusivo</p>
						</div>
						<div className="flex flex-col items-center max-w-[160px]">
							<img src={icon5} alt="Materiales sostenibles" className="w-12 h-12 mb-3" />
							<p className="font-medium">Materiales sostenibles</p>
						</div>
					</div>
				</section>

				{/* TESTIMONIOS */}
				<section className="p-10">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Lo que dicen nuestros clientes</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{testimonios.map((t, idx) => (
							<div key={idx} className="bg-gray-100 shadow-md rounded-lg p-6">
								<div className="flex items-center mb-4">
									<img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-3" />
									<p className="font-bold">– {t.name}</p>
								</div>
								<p className="text-gray-700 italic">“{t.text}”</p>
							</div>
						))}
					</div>
				</section>

				{/* FOOTER SUSCRIPCIÓN */}
				<section
					id="contacto"
					className="relative w-full bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: `url(${foooter})` }}
				>
					<div className="absolute inset-0 bg-black/50"></div>
					<div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 md:py-32 max-w-3xl mx-auto">
						<h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
							Sé parte de nuestra comunidad
						</h2>
						<p className="text-white/90 text-base md:text-lg mb-6">
							Suscríbete y recibe un <span className="font-semibold">10% de descuento</span> en tu primera
							compra. Además, accede antes que nadie a lanzamientos exclusivos y ofertas especiales.
						</p>
						<form className="w-full flex flex-col sm:flex-row items-center gap-3">
							<input
								type="email"
								placeholder="Correo electrónico"
								className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
								required
							/>
							<button
								type="submit"
								className="px-6 py-3 bg-orange-600 hover:bg-orange-700 transition text-white font-medium rounded-lg shadow-lg w-full sm:w-auto"
							>
								Ver más
							</button>
						</form>
					</div>
				</section>
			</div>
		</>
	);
}

export default App;
