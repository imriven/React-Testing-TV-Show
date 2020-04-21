import { testEpisodesList, formattedSeasonOutput } from "../testData"
import { formatSeasons } from "./formatSeasons"

//test takes in string (name of the test ) and a callback function
test("Season format correctly", () => {
  
expect(formatSeasons(testEpisodesList)).toEqual(formattedSeasonOutput)
});
