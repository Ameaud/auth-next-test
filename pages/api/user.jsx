
export default async function (req, res) {
  const {cookies} = req;
  const jwt = cookies.jwt;
  if (!jwt) {
    res.json({message:"Invalid token !"})
  }
  res.status(200).json({jwt,isValide:true});

}
