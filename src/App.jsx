import Card from './components/card/Card';
import GridContainer from './components/gridContainer/GridContainer';
import { CARDSINFO } from './constants/cardsInfo';
import { GlobalStyles } from './styles/global-styles';

const App = () => {
	return (
		<>
			<GlobalStyles />

			<div className='wrapper-grid'>
				<GridContainer>
					{CARDSINFO.map(card => {
						return (
							<Card
								key={card.id}
								image={card.image}
								name={card.name}
								verified={card.verified}
								shortOpinion={card.shortOpinion}
								longOpinion={card.longOpinion}
								$bgColor={card.$bgColor}
								$foreColor={card.$foreColor}
							/>
						);
					})}
				</GridContainer>
			</div>
		</>
	);
};

export default App;
