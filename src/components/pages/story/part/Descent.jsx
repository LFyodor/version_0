import { useSelector } from "react-redux"
import AgainDied from "../../../AgainDied";

const Descent = () => {
    const character = useSelector((state) => state.character);

    return (
        <div>
            {character.partPlot.find((part) => part.id === 66)
            ? <div>
                <p className="description">
                    Ты срываешься с уступа и падаешь на острые камни. Истекая кровью, ты ощущаешь, как сознание меркнет вместе со 
                    звёздами в небе. Уходят все твои мысли: и хорошие, и плохие, кроме одной...
                </p>
                <AgainDied />
            </div>
            : ''}
        </div>
    );
};

export default Descent;