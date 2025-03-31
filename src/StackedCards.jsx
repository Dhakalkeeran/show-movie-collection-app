import Card from "./Card"

function StackedCards({ allData }) {
    let length = allData.length;
    return (
        <div id="stacked-cards">
            {[...Array(length)].map((_, i) => (
                <Card key={i} data={allData[i]} />
            ))}
        </div>
    )
}

export default StackedCards