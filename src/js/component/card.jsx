import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cards = (props) => {
	return (
		<Card>
			<Card.Img variant="top" src={props.thumbnail} />
			<Card.Body className="text-center">
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.cardcontent}</Card.Text>
			</Card.Body>
			<Card.Footer className="text-center">
				<Button variant="primary">Visit {props.title}</Button>
			</Card.Footer>
		</Card>
	);
};
export default Cards;
// )
// 	<>
// 		<CardGroup>
// 			<Card>
// 				<Card.Img
// 					variant="top"
// 					src="https://media.istockphoto.com/photos/madrid-spain-on-gran-via-picture-id514769480?s=170667a"
// 				/>
// 				<Card.Body>
// 					<Card.Title>Edificio Metrópolis</Card.Title>
// 					<Card.Text>
// 						El Edificio Metrópolis es un edificio de la ciudad
// 						española de Madrid, de estilo ecléctico de
// 						inspiración francesa, ubicado en la esquina de la
// 						calle de Alcalá con la calle Gran Vía (Distrito
// 						Centro). Las obras no comenzaron hasta junio de 1907
// 						por problemas judiciales, ya que algunos vecinos y
// 						negocios alojados en los edificios que debían ser
// 						derribados plantearon un litigio que no se resolvió
// 						hasta ese año. Las obras duraron tres años.
// 					</Card.Text>
// 				</Card.Body>
// 				<Card.Footer>
// 					<small className="text-muted">
// 						Last updated 3 mins ago
// 					</small>
// 				</Card.Footer>
// 			</Card>
// 			<Card>
// 				<Card.Img
// 					variant="top"
// 					src="https://theculturetrip.com/wp-content/uploads/2017/02/cibeles-palace-one-of-the-symbols-of-the-city-of-madrid.jpg"
// 				/>
// 				<Card.Body>
// 					<Card.Title>Palacio Cibeles</Card.Title>
// 					<Card.Text>
// 						El Palacio de Cibeles (denominado antes Palacio de
// 						Telecomunicaciones o Palacio de Comunicaciones) es
// 						un conjunto integrado por dos edificios de fachada
// 						blanca ubicados en uno de los centros del Madrid
// 						histórico, España. Se erigen en un lateral de la
// 						plaza de Cibeles en el barrio de los Jerónimos
// 						(distrito Retiro) y ocupan alrededor de 30 000
// 						metros cuadrados de lo que fueron los antiguos
// 						Jardines del Buen Retiro.{" "}
// 					</Card.Text>
// 				</Card.Body>
// 				<Card.Footer>
// 					<small className="text-muted">
// 						Last updated 3 mins ago
// 					</small>
// 				</Card.Footer>
// 			</Card>
// 			<Card>
// 				<Card.Img
// 					variant="top"
// 					src="https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2012/06/15/60453.jpg"
// 				/>
// 				<Card.Body>
// 					<Card.Title>Puerta del Sol</Card.Title>
// 					<Card.Text>
// 						La Puerta del Sol es una plaza de la ciudad española
// 						de Madrid. En ella se encuentra desde 1950 el
// 						denominado Kilómetro Cero de las carreteras radiales
// 						del país. El edificio más antiguo de la Puerta del
// 						Sol es la Casa de Correos y en ella destaca el reloj
// 						de torre que fue construido y donado en el siglo xix
// 						por José Rodríguez de Losada, y cuyas campanadas de
// 						las 12 de la noche del 31 de diciembre marcan la
// 						tradicional toma de las doce uvas a la gran mayoría
// 						de los españoles.
// 					</Card.Text>
// 				</Card.Body>
// 				<Card.Footer>
// 					<small className="text-muted">
// 						Last updated 3 mins ago
// 					</small>
// 				</Card.Footer>
// 			</Card>
// 		</CardGroup>
// 	</>
// );
