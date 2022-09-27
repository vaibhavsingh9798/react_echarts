import wineData from "../wineData.json"


const scatterData = {}

wineData.map((item) => scatterData[item["Color intensity"]]= item.Hue)


export default scatterData;




