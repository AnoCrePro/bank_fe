export async function fetchData (data, url){
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data)
  }
  let json_respon = await fetch(url, requestOptions)
  let res = await json_respon.json()
  return res
}

export async function fetchWithAPIKey(url, apikey){
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'x-apikey': apikey },
  };

  let json_respon = await fetch(url, requestOptions)
  let res = await json_respon.json()
  return res
}
