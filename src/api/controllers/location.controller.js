const Location = require("../../models/location");

const Home = async (req, res) => {
  res.render("index.ejs");
};

const MainPage = async (req, res) => {
  try {
    const { distance } = req.body;

    console.log(distance);
    await Location.create({
      distance: distance.distance,
      latitude: distance.startLocation.latitude,
      longitude: distance.startLocation.longitude,
    });

    res.status(200).json({ message: "Success", result: distance });
  } catch (error) {
    console.log(error.message);
  }
};

const GetAllDistance = async (req, res) => {
  const result = await Location.find({});

  const distanceSum = calcDis(result);

  res.render("getall", { distanceSum });
};

const calcDis = (data) => {
  let totalSum = 0;
  data.forEach((item) => {
    totalSum += +item.distance;
  });
  return totalSum.toFixed(2);
};

module.exports = {
  Home,
  MainPage,
  GetAllDistance,
};
