exports.handler = async ({ body }) => {
  const { table } = require('./helpers/airtable');

  const reqData = JSON.parse(body);

  const fields = {
    "Imię": reqData.name,
    "Dziękuję za": reqData.thx,
    "Proszę o": reqData.ask,
    "Data": new Date().toISOString()
  }

  try{
    const createdCard = await table.create([{ fields }]);
  }
  catch(err){
    console.log(err);
  }
  
  return {
    statusCode: 200
  };
}