const axios = require('axios');
const querystring = require('querystring');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const payload = req.body;

    const response = await axios.post(
      'https://kakaoapi.aligo.in/akv10/alimtalk/send/',
      querystring.stringify(payload),   // 💡 수정: payload를 form 형식으로 변환
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
