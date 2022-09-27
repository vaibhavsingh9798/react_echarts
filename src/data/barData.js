import wineData from "../wineData.json"

const barData = {}
wineData.map((item) => barData[item["Alcohol"]]= item["Malic Acid"] )
export default barData;




