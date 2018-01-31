import React from 'react';
import '../styles/home.css';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
		
	render() {
		return (
			<div >
				<h2>Home Garbarino</h2>

						<div className="gb-top-header">
						<div className="gb-wrapper">
								<ul className="gb-header-right">

										<li className="gb--right-items-1025">
												<a href="http:/www.garbarino.com/credito-garbarino/" className="gb--creditos-img">
														<object type="image/svg+xml" data="//dj4i04i24axgu.cloudfront.net/normi/statics/0.1.139/garbarino/images/credito-garbarino.svg" width="90px" height="39px">
														</object>
												</a>
										</li>

										<li className="gb--right-items-1025">
												<a href="https://seguros.garbarino.com?utm_source=garbarino.com&amp;utm_medium=banner_header" className="gb--seguros">
														<object type="image/svg+xml" data="//dj4i04i24axgu.cloudfront.net/normi/statics/0.1.139/garbarino/images/SegurosHeader.svg" width="105px" height="39px">
														</object>
												</a>
										</li>
										<li className="gb--right-items-1025">
												<a href="https://listas.garbarino.com/?utm_medium=desktop-header&amp;utm_source=garbarino.com/">
													<object type="image/svg+xml" data="//dj4i04i24axgu.cloudfront.net/normi/statics/0.1.139/garbarino/images/listas_garbarino.svg" width="105px" height="39px">
													</object>
												</a>
										</li>
										<li className="gb--right-items-1025">
												<a href="http://www.garbarinoviajes.com.ar/?utm_medium=desktop-header&amp;utm_source=garbarino.com/">
														<object type="image/svg+xml" data="//dj4i04i24axgu.cloudfront.net/normi/statics/0.1.139/garbarino/images/viajes_garbarino.svg" width="105px" height="39px">
														</object>
												</a>
										</li>
								</ul>
						</div>
				</div>

				<div className="gb-footer-links">
        <div className="gb-wrapper">
            <div className="row">
                <div className="col-md-12 col-sm-12 gb-menu-links">
                    <div className="gb-footer-links-container">
                      <h2 className="gb-menu-links-title">Categorías</h2>
                      <ul>
                            <li><a href="https://www.garbarino.com/productos/tv-led-y-video/4340">Televisores</a></li>
                            <li><a href="https://www.garbarino.com/productos/celulares-libres/4359">Celulares</a></li>
                            <li><a href="https://www.garbarino.com/productos/notebooks/4363">Notebooks</a></li>
                            <li><a href="https://www.garbarino.com/productos/computadoras-de-escritorio/4365">Computadoras</a></li>
                            <li><a href="https://www.garbarino.com/categorias">Todas las categorías</a></li>
                      </ul>
                    </div>
                    <div className="gb-footer-links-container">
                      <h2 className="gb-menu-links-title">Marcas</h2>
                      <ul>
                            <li><a href="https://www.garbarino.com/marcas/samsung">Samsung</a></li>
                            <li><a href="https://www.garbarino.com/marcas/LG">LG</a></li>
                            <li><a href="https://www.garbarino.com/marcas/philips/aeeo">Phillips</a></li>
                            <li><a href="https://www.garbarino.com/marcas/Sony">Sony</a></li>
                            <li><a href="https://www.garbarino.com/marcas">Todas las marcas</a></li>
                      </ul>
                    </div>
                    <div className="gb-footer-links-container">
                      <h2 className="gb-menu-links-title">Lo más buscado</h2>
                      <ul>
                            <li><a href="//www.garbarino.com/listado/gaming-mundo-playstation">Playstation</a></li>
                            <li><a href="http://www.garbarino.com/guias/televisores">Guía de Televisores</a></li>
                            <li><a href="//www.garbarino.com/productos/herramientas/4861">Herramientas</a></li>
                            <li><a href="https://www.garbarino.com/productos/colchones-y-sommiers/4215">Colchones y Sommiers</a></li>
                            <li><a href="https://www.garbarino.com/productos/aires-acondicionados-split/4278">Aires Acondicionados</a></li>
                      </ul>
                    </div>
                    <div className="gb-footer-links-container">
                      <h2 className="gb-menu-links-title">Empresas Garbarino</h2>
                      <ul>
                            <li><a href="//www.garbarinoviajes.com.ar/?utm_medium=bannerfooter&amp;utm_source=garbarino.com">Garbarino Viajes</a></li>
                            <li><a href="//listas.garbarino.com/?utm_medium=footer&amp;utm_source=garbarino.com">Listas de Regalos</a></li>
                            <li><a data-target="#venta-a-empresas" data-toggle="modal">Venta a Empresas</a></li>
                            <li><a href="//seguros.garbarino.com/">Seguros</a></li>
                            <li><a href="https://www.garbarino.com/credito-garbarino/">Crédito Garbarino</a></li>
                      </ul>
                    </div>
                    <div className="gb-footer-links-container">
                      <h2 className="gb-menu-links-title">Garbarino</h2>
                      <ul>
                            <li><a href="https://www.garbarino.com/trabaja-en-garbarino">Sumate a nuestro equipo</a></li>
                            <li><a href="//sustentable.garbarino.com/">Garbarino Sustentable</a></li>
                            <li><a data-target="#prensa" data-toggle="modal">Prensa</a></li>
                            <li><a href="//www.garbarino.com/apps">Bajá ¡GRATIS! nuestra app</a></li>
                            <li><a href="//www.garbarino.com/aerolineas-plus">Aerolíneas Plus</a></li>
                      </ul>
                    </div>
                    <div className="gb-footer-links-container">
                      <h2 className="gb-menu-links-title">Servicios</h2>
                      <ul>
                            <li><a href="//www.garbarino.com/ayuda">Atención al Cliente</a></li>
                            <li><a data-target="#venta-telefonica" data-toggle="modal">Venta Telefónica</a></li>
                      </ul>
                    </div>
                    <div className="gb-footer-links-container">
                      <h2 className="gb-menu-links-title">Ayuda</h2>
                      <ul>
                            <li><a href="//www.garbarino.com/sucursales">Nuestros locales</a></li>
                            <li><a href="//www.garbarino.com/ayuda">Centro de Ayuda</a></li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


			</div>
		);
	}
}

export default Home;