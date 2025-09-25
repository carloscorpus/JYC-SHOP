import "./App.css";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./components/ui/card";
import logo from "@/assets/logo.jpeg";
import main1 from "@/assets/main1.jpeg";
import aña from "@/assets/aña.jpeg";
import icon1 from "@/assets/icon1.jpeg";
import icon2 from "@/assets/icon2.jpeg";
import icon3 from "@/assets/icon3.jpeg";
import icon4 from "@/assets/icon4.jpeg";
import icon5 from "@/assets/icon5.jpeg";
import asas from "@/assets/ASAS.jpeg";

function App() {
  return (
    <>
      <div>
        <nav className="flex flex-row bg-white content-between justify-between p-5">
          <div>
            <img src={logo} alt="" />
          </div>
          <ul className="flex space-x-3 items-center justify-center">
            <a href="">Inicio</a>
            <a href="">Coleccion</a>
            <a href="">Contacto</a>
          </ul>
          <div className="flex items-center">
            <Button>Explorar Colección</Button>
          </div>
        </nav>
        <div className="w-full">
          <img src={main1} alt="" className="w-full object-cover" />
        </div>
        <div>
          <h2>Nuestros Bestsellers</h2>
          <div className="grid grid-cols-3 gap-4 p-5">
            <Card className="bg-zinc-200">
              <CardHeader>
                <img src={aña} className="w-full" alt="" />
              </CardHeader>
              <CardContent>
                <p>Camisa Oversize de Lino</p>
                <p>
                  <strong>$65.00</strong>
                </p>
              </CardContent>
              <CardFooter>
                <Button>Ver Más</Button>
              </CardFooter>
            </Card>
            <Card className="bg-zinc-200">
              <CardHeader>
                <img src={aña} className="w-full" alt="" />
              </CardHeader>
              <CardContent>
                <p>Pantalón Cargo Minimal</p>
                <p>
                  <strong>$79.00</strong>
                </p>
              </CardContent>
              <CardFooter>
                <Button>Ver Más</Button>
              </CardFooter>
            </Card>
            <Card className="bg-zinc-200">
              <CardHeader>
                <img src={aña} className="w-full" alt="" />
              </CardHeader>
              <CardContent>
                <p>Vestido Gris Seda</p>
                <p>
                  <strong>$65.00</strong>
                </p>
              </CardContent>
              <CardFooter>
                <Button>Ver Más</Button>
              </CardFooter>
            </Card>
            <Card className="bg-zinc-200">
              <CardHeader>
                <img src={aña} className="w-full" alt="" />
              </CardHeader>
              <CardContent>
                <p>Vestido Largo de Cañamo</p>
                <p>
                  <strong>$65.00</strong>
                </p>
              </CardContent>
              <CardFooter>
                <Button>Ver Más</Button>
              </CardFooter>
            </Card>
            <Card className="bg-zinc-200">
              <CardHeader>
                <img src={aña} className="w-full" alt="" />
              </CardHeader>
              <CardContent>
                <p>Vestido de Gala Verde</p>
                <p>
                  <strong>$65.00</strong>
                </p>
              </CardContent>
              <CardFooter>
                <Button>Ver Más</Button>
              </CardFooter>
            </Card>
            <Card className="bg-zinc-200">
              <CardHeader>
                <img src={aña} className="w-full" alt="" />
              </CardHeader>
              <CardContent>
                <p>Thunder Jeans</p>
                <p>
                  <strong>$65.00</strong>
                </p>
              </CardContent>
              <CardFooter>
                <Button>Ver Más</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="w-full h-screen flex justify-center items-center">
          <div className="w-full h-full max-w-full max-h-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/7x8XAe8IWJI?autoplay=1"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="flex items-center justify-center p-20">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdnY-TBNd_J33T1oAqjelF_NAxUHk6jBDrv_oQV_ZKqeOuw6Q/viewform?usp=header">
            <button className="block p-2 bg-red-400">Ir al formulario</button>
          </a>
        </div>
        <div>
          <h2 className="text-5xl text-center">¿Por qué elegirnos?</h2> <br />
          <div className="">
            <div className="flex flex-row items-center justify-center gap-5">
              <div className="bg-white flex flex-col items-center p- m-1">
                <img src={icon1} alt="" />
                <h4>Produccion Etica</h4>
              </div>
              <div className="bg-white flex flex-col items-center p-4 m-1">
                <img src={icon2} alt="" />
                <h4>Politica de devolucion facil</h4>
              </div>
              <div className="bg-white flex flex-col items-center p-4 m-1">
                <img src={icon3} alt="" />
                <h4>Envio rapido y gratuito</h4>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-white flex flex-col items-center p-4 m-1">
                <img src={icon4} alt="" />
                <h4>Diseño exclusivo</h4>
              </div>
              <div className="bg-white flex flex-col items-center p-4 m-1">
                <img src={icon5} alt="" />
                <h4>Materiales sostenibles</h4>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <h2 className="text-center text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <img src={asas} alt="" className="w-full object-cover" />
        </footer>
      </div>
    </>
  );
}

export default App;
